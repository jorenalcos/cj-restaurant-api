import productRepository from "./repository";
import categoryRepository from "../category/categoryRepository";
import { prisma } from "../../config/prisma.config";
import { CreateProductInput } from "./dto/create-product.dto";
import ApiError from "../../utils/ApiError";
import { NotFoundError } from "../../errors/NotFoundError";
import { ConflictError } from "../../errors/ConflictError";

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

    async createProduct(dto: CreateProductInput) {
        const category =
            await categoryRepository.findById(dto.categoryId);
        if (!category) {
            throw new NotFoundError("Category not found");
        }
        const existing =
            await productRepository.findByName(dto.name);
        if (existing) {
            throw new ConflictError("Product already exists");
        }
        return productRepository.create({
            name: dto.name,
            description: dto.description,
            price: dto.price,
            image: dto.image,
            rating: dto.rating,
            isAvailable: dto.isAvailable,

            category: {
                connect: {
                    id: dto.categoryId,
                },
            },
        });

    }
}

export default new ProductService();