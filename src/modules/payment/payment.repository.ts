import { PaymentStatus } from "@prisma/client";
import { DatabaseClient, db } from "../../types/database";

export class PaymentRepository {
  constructor(
    private readonly database: DatabaseClient = db
  ) { }

  async findAll() {
    return this.database.payment.findMany({
      include: {
        order: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
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