import { Request, Response, NextFunction } from "express";
import productService from "../services/product.service";
import { successResponse } from "../utils/response";

export class ProductController {
  async getProducts(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const products = await productService.getProducts();

    return successResponse(
        res,
        "Products retrieved successfully",
        products
    );
    } catch (error) {
      next(error);
    }
  }

  async getProduct(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
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
}

export default new ProductController();