import { Request, Response, NextFunction } from "express";
import productService from "./service";
import { successResponse } from "../../utils/response";
import { ProductIdDto } from "./dto/product-id.dto";
import { QueryDto } from "../../common/query/query.dto";
import { BadRequestError } from "../../errors/BadRequestError";

class ProductController {
  async getProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const { page, limit, search, sortBy, sortOrder, categoryId, isAvailable } = QueryDto.parse(req.query);
      const products = await productService.getProducts(page, limit, search, sortBy, sortOrder, categoryId, isAvailable);

      return successResponse(
        res,
        "Products retrieved successfully",
        products
      );
    } catch (error) {
      next(error);
    }
  }

  async getProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id);

      const product = await productService.getProduct(id);

      return successResponse(
        res,
        "Product retrieved successfully",
        product
      );
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req: Request, res: Response) {
    const product = await productService.createProduct(req.body);

    return res.status(201).json({
      success: true,
      message: "Product created successfully",
      data: product,
    });
  }

  async uploadImage(req: Request, res: Response, next: NextFunction) {
    try {
      const productId = Number(req.params.id);

      if (!req.file) {
        throw new BadRequestError("Image is required.");
      }

      const product = await productService.uploadProductImage(productId, req.file);

      return res.status(200).json({
        success: true,
        message: "Product image uploaded successfully.",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req: Request, res: Response) {
    const { id } = ProductIdDto.parse(req.params);
    const product = await productService.updateProduct(id, req.body);

    return res.status(200).json({
      success: true,
      message:
        "Product updated successfully",
      data: product,
    });
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = ProductIdDto.parse(req.params);

    await productService.deleteProduct(id);
    return res.status(200).json({
      success: true,
      message:
        "Product deleted successfully",
    });

  }
}

export default new ProductController();