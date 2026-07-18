import { Request, Response } from "express";
import categoryService from "./category.service";
import { CreateCategoryDto } from "./dto/create-category.dto";

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
}

export default new CategoryController();