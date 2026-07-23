import { NotFoundError } from "../../errors/NotFoundError";
import { prisma } from "../../config/prisma";
import { OrderStatus } from "@prisma/client";

import productRepository from "../product/repository";
import orderRepository from "./order.repository";

import { CreateOrderInput } from "./dto/create-order.dto";

export class OrderService {
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

    return prisma.$transaction(async (tx) => {
      const order = await orderRepository.createOrder(tx, {
        status: OrderStatus.PENDING,
        paymentMethod: dto.paymentMethod,
        totalAmount,
      });

      const orderItemData = orderItems.map((item) => ({
        orderId: order.id,
        ...item,
      }));

      await orderRepository.createOrderItems(tx, orderItemData);

      return order;
    });
  }
}

export default new OrderService();