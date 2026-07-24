import { NotFoundError } from "../../errors/NotFoundError";
import { prisma } from "../../config/prisma";
import { OrderStatus, PaymentStatus } from "@prisma/client";

import productRepository from "../product/repository";
import orderRepository from "./order.repository";

import { CreateOrderInput } from "./dto/create-order.dto";

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
}

export default new OrderService();