import { PaymentStatus } from "@prisma/client";

import paymentRepository, { PaymentRepository } from "./payment.repository";

import { NotFoundError } from "../../errors/NotFoundError";
import { BadRequestError } from "../../errors/BadRequestError";

import { PAYMENT_STATUS_TRANSITIONS } from "./constants/payment-status-transition";
import { OrderRepository } from "../order/order.repository";
import { PAYMENT_ORDER_STATUS } from "./constants/payment-order-status";
import { prisma } from "../../config/prisma";
import { createPaginationMeta } from "../../common/pagination/pagination.util";

export class PaymentService {
  async getPayments(page: number, limit: number) {
    const { payments, totalItems } = await paymentRepository.findAll(page, limit);

    return {
      data: payments,

      pagination: createPaginationMeta(
        page,
        limit,
        totalItems
      ),
    };
  }

  async getPayment(id: number) {
    const payment = await paymentRepository.findById(id);

    if (!payment) {
      throw new NotFoundError("Payment not found.");
    }

    return payment;
  }

  async updatePaymentStatus(id: number, status: PaymentStatus) {
    const payment = await paymentRepository.findById(id);

    if (!payment) {
      throw new NotFoundError("Payment not found.");
    }

    const allowedStatuses = PAYMENT_STATUS_TRANSITIONS[payment.status];

    if (!allowedStatuses.includes(status)) {
      throw new BadRequestError(
        `Invalid payment status transition. Payment status can only change from ${payment.status} to ${allowedStatuses.join(", ")}.`
      );
    }

    const paidAt = status === PaymentStatus.PAID ? new Date() : payment.paidAt ?? undefined;

    return prisma.$transaction(async (tx) => {
      const paymentRepo = new PaymentRepository(tx);
      const orderRepo = new OrderRepository(tx);

      const updatedPayment = await paymentRepo.updateStatus(id, status, paidAt);
      const nextOrderStatus = PAYMENT_ORDER_STATUS[status];

      if (nextOrderStatus) {
        await orderRepo.updateStatus(payment.orderId, nextOrderStatus);
      }

      return updatedPayment;
    });
  }
}

export default new PaymentService();