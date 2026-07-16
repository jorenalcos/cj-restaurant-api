"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_config_1 = require("../../config/prisma.config");
class ProductRepository {
    async findAll() {
        return prisma_config_1.prisma.product.findMany({
            include: {
                category: true,
            },
            orderBy: {
                id: "asc",
            },
        });
    }
    async findById(id) {
        return prisma_config_1.prisma.product.findUnique({
            where: { id },
            include: {
                category: true,
            },
        });
    }
    async create(data) {
        return prisma_config_1.prisma.product.create({
            data,
            include: {
                category: true,
            }
        });
    }
}
exports.default = new ProductRepository();
