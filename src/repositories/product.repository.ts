import { prisma } from "../config/prisma";

export class ProductRepository {
  [x: string]: any;
  async findAll() {
    return prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        id: "asc",
      },
    });
  }

  async findById(id: number) {
    return prisma.product.findFirst({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        category: true,
      },
    });
  }

  async countByCategory(categoryId: number) {
    return prisma.product.count({
      where: {
        categoryId,
        deletedAt: null,
      },
    });
  }
}

export default new ProductRepository();