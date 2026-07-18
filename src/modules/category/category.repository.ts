import prisma from "../../config/prisma";
import { Category, Prisma } from "@prisma/client";

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

  async create(
    data: Prisma.CategoryCreateInput
  ): Promise<Category> {
    return prisma.category.create({
      data,
    });
  }
}

export default new CategoryRepository();