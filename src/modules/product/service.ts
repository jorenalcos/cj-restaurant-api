import productRepository from "./repository";
import { prisma } from "../../config/prisma.config";
import { CreateProductInput } from "./dto/create-product.dto";
import ApiError from "../../utils/ApiError";

class ProductService {
    async getProducts() {
        return productRepository.findAll();
    }

    async getProduct(id: number) {
        const product = await productRepository.findById(id);

        if (!product) {
            throw new ApiError(
                404,
                "Product not found"
            );
        }
        return product;
    }

    async createProduct(data: CreateProductInput) {
        const category = await prisma.category.findUnique({
            where: {
                id: data.categoryId,
            }
        });
        if (!category) {
            throw new ApiError(
                404,
                "Product not foCategory does not existund"
            );
        }
        return productRepository.create(data);
    }
}

export default new ProductService();