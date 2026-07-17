import { prisma } from "../../config/prisma.config";

import { Prisma, Product } from "@prisma/client";

class ProductRepository {
    async findAll() {
        return prisma.product.findMany({
            include: {
                category: true,
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

    async findCategoryById(id: number) {
        return prisma.category.findUnique({
            where: {
                id,
            },
        });
    }

    async findByName(name: string) {
        return prisma.product.findFirst({
            where: {
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
            },
            data,
        });
    }

    async findByNameExceptId(id: number, name: string) {
        return prisma.product.findFirst({
            where: {
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
}

export default new ProductRepository();