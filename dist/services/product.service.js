"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_repository_1 = __importDefault(require("../repositories/product.repository"));
const ApiError_1 = __importDefault(require("../utils/ApiError"));
class ProductService {
    async getProducts() {
        return product_repository_1.default.findAll();
    }
    async getProduct(id) {
        const product = await product_repository_1.default.findById(id);
        if (!product) {
            throw new ApiError_1.default(404, "Product not found");
        }
        return product;
    }
}
exports.ProductService = ProductService;
exports.default = new ProductService();
