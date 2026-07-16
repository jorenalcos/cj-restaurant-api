"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const prisma_config_1 = require("../config/prisma.config");
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
}
exports.ProductRepository = ProductRepository;
exports.default = new ProductRepository();
