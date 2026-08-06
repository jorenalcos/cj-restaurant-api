import { PaymentStatus } from "@prisma/client";
import { DatabaseClient, db } from "../../types/database";
import { prisma } from "../../config/prisma";

export class PaymentRepository {
  constructor(
    private readonly database: DatabaseClient = db
  ) { }

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const totalItems = await this.database.payment.count();

    const payments = await this.database.payment.findMany({
      skip,
      take: limit,
      include: {
        order: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      payments,
      totalItems,
    };
  }

  async findById(id: number) {
    return this.database.payment.findUnique({
      where: {
        id,
      },
      include: {
        order: true,
      },
    });
  }

  async updateStatus(id: number, status: PaymentStatus, paidAt?: Date) {
    return this.database.payment.update({
      where: {
        id,
      },
      data: {
        status,
        paidAt,
      },
      include: {
        order: true,
      },
    });
  }
}

export default new PaymentRepository();