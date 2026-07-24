import { Prisma } from "@prisma/client";
import { CreateCompleteOrderPayload } from "./types/create-complete-order.type"

export class OrderRepository {
  async createCompleteOrder(
    tx: Prisma.TransactionClient,
    payload: CreateCompleteOrderPayload
  ) {
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
}

export default new OrderRepository();