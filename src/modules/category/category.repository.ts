import prisma from "../../config/prisma";
import { Category, Prisma } from "@prisma/client";
import { UpdateCategoryInput } from "./dto/update-category.dto";

class CategoryRepository {
  async findByName(name: string) {
    return prisma.category.findFirst({
      where: {
        deletedAt: null,
        name: {
          equals: name,
          mode: "insensitive",
        },
      },
    });
  }

  async findById(id: number) {
    return prisma.category.findFirst({
      where: {
        id,
        deletedAt: null,
      },
    });
  }

  async findAll() {
    return prisma.category.findMany({
      where: {
        deletedAt: null,
      },
      include: {
        _count: {
          select: {
            products: {
              where: {
                deletedAt: null,
              },
            },
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async create(data: Prisma.CategoryCreateInput): Promise<Category> {
    return prisma.category.create({
      data,
    });
  }

  async update(id: number, data: UpdateCategoryInput) {
    return prisma.category.update({
      where: {
        id,
      },
      data,
    });
  }

  async findByNameExceptId(name: string, id: number) {
    return prisma.category.findFirst({
      where: {
        name,
        deletedAt: null,
        NOT: {
          id,
        },
      },
    });
  }

  async softDelete(id: number) {
    return prisma.category.update({
      where: {
        id,
      },
      data: {
        deletedAt: new Date(),
      },
    });
  }
}

export default new CategoryRepository();