import { NotFoundError } from "../../errors/NotFoundError";
import { prisma } from "../../config/prisma";
import { OrderStatus, PaymentStatus } from "@prisma/client";

import productRepository from "../product/repository";
import orderRepository from "./order.repository";

import { CreateOrderInput } from "./dto/create-order.dto";
import { ORDER_STATUS_TRANSITIONS } from "./constants/order-status-transition";
import { BadRequestError } from "../../errors/BadRequestError";
import { CANCELLABLE_ORDER_STATUSES } from "./constants/order.constants";

export class OrderService {
  private generateOrderNumber(): string {
    return `ORD-${Date.now()}`;
  }

  async createOrder(dto: CreateOrderInput) {
    // Extract all requested product IDs
    const productIds = dto.items.map((item) => item.productId);

    // Load products from the database
    const products = await productRepository.findManyByIds(productIds);

    // Ensure every requested product exists
    if (products.length !== productIds.length) {
      throw new NotFoundError("One or more products were not found.");
    }

    //Find all ordered products
    const productMap = new Map(
      products.map((product) => [product.id, product])
    );

    const orderItems = dto.items.map((item) => {
      const product = productMap.get(item.productId)!;
      const unitPrice = Number(product.price);
      const subtotal = unitPrice * item.quantity;

      return {
        productId: product.id,
        productName: product.name,
        quantity: item.quantity,
        unitPrice,
        subtotal,
      };
    });

    const totalAmount = orderItems.reduce(
      (total, item) => total + item.subtotal,
      0
    );

    const paymentData = {
      method: dto.paymentMethod,
      amount: totalAmount,
      status: PaymentStatus.PENDING,
    };

    const orderData = {
      orderNumber: this.generateOrderNumber(),

      customerName: dto.customerName,
      phone: dto.phone,
      address: dto.address,
      notes: dto.notes,

      subtotal: totalAmount,
      deliveryFee: 0,
      tax: 0,
      discount: 0,
      total: totalAmount,

      status: OrderStatus.PENDING,
    };

    return prisma.$transaction(async (tx) => {
      return orderRepository.createCompleteOrder(tx, {
        order: orderData,
        items: orderItems,
        payment: paymentData,
      });
    });
  }

  async getOrders() {
    return orderRepository.findAll();
  }

  async getOrder(id: number) {
    const order = await orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError("Order not found.");
    }

    return order;
  }

  async updateOrderStatus(id: number, status: OrderStatus) {
    const order = await orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError("Order not found.");
    }

    const currentStatus: OrderStatus = order.status;
    const allowedStatuses = ORDER_STATUS_TRANSITIONS[currentStatus];

    if (!allowedStatuses.includes(status)) {
      throw new BadRequestError(
        `Invalid status transition. Order status can only change from ${currentStatus} to ${allowedStatuses.join(", ")}.`
      );
    }

    return orderRepository.updateStatus(id, status);
  }

  async cancelOrder(id: number) {
    const order = await orderRepository.findById(id);

    if (!order) {
      throw new NotFoundError("Order not found.");
    }

    if (!CANCELLABLE_ORDER_STATUSES.includes(order.status)) {
      throw new BadRequestError(
        `Order cannot be cancelled because it is currently ${order.status}.`
      );
    }

    return orderRepository.cancel(id);
  }
}

export default new OrderService();