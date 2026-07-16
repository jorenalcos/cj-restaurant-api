import { Request, Response, NextFunction } from "express";
import productService from "./service";
import { CreateProductDto } from "./dto/create-product.dto";
import { successResponse } from "../../utils/response";

class ProductController {
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

    async create(req: Request,res: Response){
        const body = CreateProductDto.parse(req.body);
        const product = await productService.createProduct(body);
        return res.status(201).json({
            success:true,
            message:"Product created successfully",
            data:product,
        });
    }
}

export default new ProductController();