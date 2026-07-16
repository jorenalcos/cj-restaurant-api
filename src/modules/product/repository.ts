import { prisma } from "../../config/prisma.config";
import { CreateProductInput } from "./dto/create-product.dto";

class ProductRepository {
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

    async create(data: CreateProductInput) {
        return prisma.product.create({
            data,
            include: {
                category: true,
            }
        });
    }
}

export default new ProductRepository();