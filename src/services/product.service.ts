import productRepository from "../repositories/product.repository";
import ApiError from "../utils/ApiError";

export class ProductService {
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
}

export default new ProductService();