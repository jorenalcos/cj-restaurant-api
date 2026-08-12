import { prisma } from "../../config/prisma";
import { OrderStatus } from "@prisma/client";
import { Prisma } from "@prisma/client";

export class DashboardRepository {
  private async getOrderTrends(
    period: "day" | "week" | "month" | "year",
    format: string
  ) {
    return prisma.$queryRawUnsafe<
      {
        label: string;

        pending: bigint;
        confirmed: bigint;
        preparing: bigint;
        ready: bigint;
        outForDelivery: bigint;
        delivered: bigint;
        cancelled: bigint;
      }[]
    >(
      `
    SELECT
        TO_CHAR(DATE_TRUNC($1, "createdAt"), $2) AS label,

        SUM(CASE WHEN status='PENDING' THEN 1 ELSE 0 END) AS pending,
        SUM(CASE WHEN status='CONFIRMED' THEN 1 ELSE 0 END) AS confirmed,
        SUM(CASE WHEN status='PREPARING' THEN 1 ELSE 0 END) AS preparing,
        SUM(CASE WHEN status='READY' THEN 1 ELSE 0 END) AS ready,
        SUM(CASE WHEN status='OUT_FOR_DELIVERY' THEN 1 ELSE 0 END) AS "outForDelivery",
        SUM(CASE WHEN status='DELIVERED' THEN 1 ELSE 0 END) AS delivered,
        SUM(CASE WHEN status='CANCELLED' THEN 1 ELSE 0 END) AS cancelled

    FROM "Order"

    GROUP BY DATE_TRUNC($1, "createdAt")

    ORDER BY DATE_TRUNC($1, "createdAt")
    `,
      period,
      format
    );
  }

  async countProducts() {
    return prisma.product.count({
      where: {
        deletedAt: null,
      },
    });
  }

  async countCategories() {
    return prisma.category.count({
      where: {
        deletedAt: null,
      },
    });
  }

  async countOrders() {
    return prisma.order.count();
  }

  async countOrdersByStatus(status: OrderStatus) {
    return prisma.order.count({
      where: {
        status,
      },
    });
  }

  async getTotalRevenue() {
    const result = await prisma.order.aggregate({
      where: {
        status: OrderStatus.DELIVERED,
      },
      _sum: {
        total: true,
      },
    });

    return Number(result._sum.total ?? 0);
  }

  async getTodaySales() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const result = await prisma.order.aggregate({
      where: {
        createdAt: {
          gte: today,
        },
        status: OrderStatus.DELIVERED,
      },
      _sum: {
        total: true,
      },
    });

    return Number(result._sum.total ?? 0);
  }

  async getMonthlySales() {
    const now = new Date();

    const firstDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      1
    );

    const result = await prisma.order.aggregate({
      where: {
        createdAt: {
          gte: firstDay,
        },
        status: OrderStatus.DELIVERED,
      },
      _sum: {
        total: true,
      },
    });

    return Number(result._sum.total ?? 0);
  }

  async getDailySalesAnalytics() {
    return prisma.$queryRaw<
      {
        label: string;
        sales: Prisma.Decimal;
      }[]
    >`
    SELECT
      TO_CHAR(DATE("createdAt"), 'YYYY-MM-DD') AS label,
      SUM(total) AS sales
    FROM "Order"
    WHERE status = 'DELIVERED'
    GROUP BY DATE("createdAt")
    ORDER BY DATE("createdAt") ASC;
  `;
  }

  async getWeeklySalesAnalytics() {
    return prisma.$queryRaw<
      {
        label: string;
        sales: Prisma.Decimal;
      }[]
    >`
    SELECT
      TO_CHAR(DATE_TRUNC('week', "createdAt"), 'YYYY-MM-DD') AS label,
      SUM(total) AS sales
    FROM "Order"
    WHERE status = 'DELIVERED'
    GROUP BY DATE_TRUNC('week', "createdAt")
    ORDER BY DATE_TRUNC('week', "createdAt");
  `;
  }

  async getMonthlySalesAnalytics() {
    return prisma.$queryRaw<
      {
        label: string;
        sales: Prisma.Decimal;
      }[]
    >`
    SELECT
      TO_CHAR(DATE_TRUNC('month', "createdAt"), 'YYYY-MM') AS label,
      SUM(total) AS sales
    FROM "Order"
    WHERE status = 'DELIVERED'
    GROUP BY DATE_TRUNC('month', "createdAt")
    ORDER BY DATE_TRUNC('month', "createdAt");
  `;
  }

  async getYearlySalesAnalytics() {
    return prisma.$queryRaw<
      {
        label: string;
        sales: Prisma.Decimal;
      }[]
    >`
    SELECT
      TO_CHAR(DATE_TRUNC('year', "createdAt"), 'YYYY') AS label,
      SUM(total) AS sales
    FROM "Order"
    WHERE status = 'DELIVERED'
    GROUP BY DATE_TRUNC('year', "createdAt")
    ORDER BY DATE_TRUNC('year', "createdAt");
  `;
  }

  async getBestSellingProducts(limit: number) {
    return prisma.$queryRaw<
      {
        productId: number;
        productName: string;
        quantitySold: bigint;
        revenue: Prisma.Decimal;
      }[]
    >`
    SELECT
      oi."productId",
      oi."productName",
      SUM(oi.quantity) AS "quantitySold",
      SUM(oi.subtotal) AS revenue
    FROM "OrderItem" oi
    INNER JOIN "Order" o
      ON oi."orderId" = o.id
    WHERE o.status = 'DELIVERED'
    GROUP BY
      oi."productId",
      oi."productName"
    ORDER BY
      SUM(oi.quantity) DESC
    LIMIT ${limit};
  `;
  }

  async getDailyOrderTrends() {
    return this.getOrderTrends("day", "YYYY-MM-DD");
  }

  async getWeeklyOrderTrends() {
    return this.getOrderTrends("week", "YYYY-MM-DD");
  }

  async getMonthlyOrderTrends() {
    return this.getOrderTrends("month", "YYYY-MM");
  }

  async getYearlyOrderTrends() {
    return this.getOrderTrends("year", "YYYY");
  }
}

export default new DashboardRepository();