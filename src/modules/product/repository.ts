import { prisma } from "../../config/prisma.config";
import { Prisma, Product } from "@prisma/client";

class ProductRepository {
    async findAll() {
        return prisma.product.findMany({
            include: {
                category: true,
            },
            where: {
                deletedAt: null,
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
}

export default new ProductRepository();