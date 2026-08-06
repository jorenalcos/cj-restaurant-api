import { prisma } from "../../config/prisma";
import { Prisma, Product } from "@prisma/client";

class ProductRepository {
  async findAll(page: number, limit: number) {
    const skip = (page && limit) ? (page - 1) * limit : 0;
    const take = limit || 10;

    const totalItems = await prisma.product.count({
      where: {
        deletedAt: null,
      },
    });

    const products = await prisma.product.findMany({
      skip,
      take: take,
      include: {
        category: true,
      },
      where: {
        deletedAt: null,
        isAvailable: true,
      },
    });

    return {
      products,
      totalItems,
    };
  }

  async findManyByIds(ids: number[]) {
    return prisma.product.findMany({
      where: {
        id: {
          in: ids,
        },
        deletedAt: null,
        isAvailable: true,
      },
      include: {
        category: true,
      },
    });
  }

  async findById(id: number) {
    return prisma.product.findUnique({
      where: {
        id,
        deletedAt: null,
      },
      include: {
        category: true,
      },
    });
  }

  async findByName(name: string) {
    return prisma.product.findFirst({
      where: {
        deletedAt: null,

        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
  }

  async create(data: Prisma.ProductCreateInput): Promise<Product> {
    return prisma.product.create({
      data,
    });

  }

  async update(id: number, data: Prisma.ProductUpdateInput): Promise<Product> {
    return prisma.product.update({
      where: {
        id,
        deletedAt: null,
      },
      data,
    });
  }

  async findByNameExceptId(id: number, name: string) {
    return prisma.product.findFirst({
      where: {
        deletedAt: null,
        id: {
          not: id,
        },

        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
  }

  async softDelete(id: number) {
    return prisma.product.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
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