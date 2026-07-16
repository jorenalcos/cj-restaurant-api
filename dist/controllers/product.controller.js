"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = __importDefault(require("../services/product.service"));
const response_1 = require("../utils/response");
class ProductController {
    async getProducts(req, res, next) {
        try {
            const products = await product_service_1.default.getProducts();
            return (0, response_1.successResponse)(res, "Products retrieved successfully", products);
        }
        catch (error) {
            next(error);
        }
    }
    async getProduct(req, res, next) {
        try {
            const id = Number(req.params.id);
            const product = await product_service_1.default.getProduct(id);
            return (0, response_1.successResponse)(res, "Product retrieved successfully", product);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.ProductController = ProductController;
exports.default = new ProductController();
