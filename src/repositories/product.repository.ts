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
    return prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
  }
}

export default new ProductRepository();