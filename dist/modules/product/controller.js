"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("./service"));
const create_product_dto_1 = require("./dto/create-product.dto");
const response_1 = require("../../utils/response");
class ProductController {
    async getProducts(req, res, next) {
        try {
            const products = await service_1.default.getProducts();
            return (0, response_1.successResponse)(res, "Products retrieved successfully", products);
        }
        catch (error) {
            next(error);
        }
    }
    async getProduct(req, res, next) {
        try {
            const id = Number(req.params.id);
            const product = await service_1.default.getProduct(id);
            return (0, response_1.successResponse)(res, "Product retrieved successfully", product);
        }
        catch (error) {
            next(error);
        }
    }
    async create(req, res) {
        const body = create_product_dto_1.CreateProductDto.parse(req.body);
        const product = await service_1.default.createProduct(body);
        return res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    }
}
exports.default = new ProductController();
