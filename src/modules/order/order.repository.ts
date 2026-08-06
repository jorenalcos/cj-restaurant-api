import { OrderStatus, Prisma } from "@prisma/client";
import { CreateCompleteOrderPayload } from "./types/create-complete-order.type"
import { DatabaseClient, db } from "../../types/database";
import { prisma } from "../../config/prisma";

export class OrderRepository {
  constructor(
    private readonly database: DatabaseClient = db
  ) { }
  async createCompleteOrder(tx: Prisma.TransactionClient, payload: CreateCompleteOrderPayload) {
    const { order, items, payment } = payload;
    const createdOrder = await tx.order.create({
      data: order,
    });

    await tx.orderItem.createMany({
      data: items.map((item) => ({
        ...item,
        orderId: createdOrder.id,
      })),
    });

    await tx.payment.create({
      data: {
        ...payment,
        order: {
          connect: {
            id: createdOrder.id,
          },
        },
      },
    });

    return tx.order.findUnique({
      where: {
        id: createdOrder.id,
      },
      include: {
        items: true,
        payment: true,
      },
    });
  }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;
    const totalItems = await this.database.order.count();

    const orders = await this.database.order.findMany({
      skip,
      take: limit,
      include: {
        items: true,
        payment: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      orders,
      totalItems,
    };
  }

  async findById(id: number) {
    return this.database.order.findUnique({
      where: {
        id,
      },
      include: {
        items: true,
        payment: true,
      },
    });
  }

  async updateStatus(id: number, status: OrderStatus) {
    return this.database.order.update({
      where: {
        id,
      },
      data: {
        status,
      },
    });
  }

  async cancel(id: number) {
    return this.database.order.update({
      where: {
        id,
      },
      data: {
        status: OrderStatus.CANCELLED,
      },
      include: {
        items: true,
        payment: true,
      },
    });
  }
}

export default new OrderRepository();