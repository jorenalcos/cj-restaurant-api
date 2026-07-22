import { NextFunction, Request, Response } from "express";
import categoryService from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CategoryIdDto } from "./dto/category-id.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";

class CategoryController {
  async createCategory(req: Request, res: Response) {
    const dto = CreateCategoryDto.parse(req.body);
    const category = await categoryService.createCategory(dto);

    return res.status(201).json({
      success: true,
      message:
        "Category created successfully.",
      data: category,
    });
  }

  async getCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = CategoryIdDto.parse(req.params);
      const category = await categoryService.getCategory(id);

      return res.status(200).json({
        success: true,
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await categoryService.getCategories();

      return res.status(200).json({
        success: true,
        data: categories,
      });
    } catch (error) {
      next(error);
    }
  }

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } =
        CategoryIdDto.parse(req.params);

      const dto =
        UpdateCategoryDto.parse(req.body);

      const category = await categoryService.updateCategory(id, dto);

      return res.status(200).json({
        success: true,
        message: "Category updated successfully.",
        data: category,
      });
    } catch (error) {
      next(error);
    }
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = CategoryIdDto.parse(req.params);
      await categoryService.deleteCategory(id);

      return res.status(200).json({
        success: true,
        message: "Category deleted successfully.",
      });
    } catch (error) {
      console.log("error: ", error);
      next(error);
    }
  }
}

export default new CategoryController();