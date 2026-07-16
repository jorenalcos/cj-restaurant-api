"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = __importDefault(require("./repository"));
const prisma_config_1 = require("../../config/prisma.config");
const ApiError_1 = __importDefault(require("../../utils/ApiError"));
class ProductService {
    async getProducts() {
        return repository_1.default.findAll();
    }
    async getProduct(id) {
        const product = await repository_1.default.findById(id);
        if (!product) {
            throw new ApiError_1.default(404, "Product not found");
        }
        return product;
    }
    async createProduct(data) {
        const category = await prisma_config_1.prisma.category.findUnique({
            where: {
                id: data.categoryId,
            }
        });
        if (!category) {
            throw new ApiError_1.default(404, "Product not foCategory does not existund");
        }
        return repository_1.default.create(data);
    }
}
exports.default = new ProductService();
