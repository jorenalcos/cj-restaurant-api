import { Prisma, PrismaClient } from "@prisma/client";
import { prisma } from "../../config/prisma";

export class OrderRepository {
  async createOrder(
    tx: Prisma.TransactionClient,
    data: Prisma.OrderCreateInput
  ) {
    return tx.order.create({
      data,
    });
  }

  async createOrderItems(
    tx: Prisma.TransactionClient,
    data: Prisma.OrderItemCreateManyInput[]
  ) {
    return tx.orderItem.createMany({
      data,
    });
  }
}

export default new OrderRepository();