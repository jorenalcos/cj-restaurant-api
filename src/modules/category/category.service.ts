import categoryRepository from "./category.repository";
import { CreateCategoryInput } from "./dto/create-category.dto";
import { ConflictError } from "../../errors/ConflictError";
import { NotFoundError } from "../../errors/NotFoundError";
import { UpdateCategoryInput } from "./dto/update-category.dto";
import productRepository from "../../repositories/product.repository";

class CategoryService {
  async createCategory(dto: CreateCategoryInput) {
    const name = dto.name.trim();
    const existing = await categoryRepository.findByName(name);

    if (existing) {
      throw new ConflictError(
        "Category already exists."
      );
    }

    return categoryRepository.create({
      name,
    });
  }

  async getCategories() {
    return await categoryRepository.findAll();
  }

  async getCategory(id: number) {
    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    return category;
  }

  async updateCategory(id: number, dto: UpdateCategoryInput) {
    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    const duplicate =
      await categoryRepository.findByNameExceptId(
        dto.name,
        id
      );

    if (duplicate) {
      throw new ConflictError(
        "Category name already exists."
      );
    }

    return await categoryRepository.update(
      id,
      dto
    );
  }

  async deleteCategory(id: number) {
    const category = await categoryRepository.findById(id);

    if (!category) {
      throw new NotFoundError("Category not found.");
    }

    const productCount: any = await productRepository.countByCategory(id);

    if (productCount > 0) {
      throw new ConflictError(
        "Cannot delete category because it contains active products."
      );
    }

    await categoryRepository.softDelete(id);
  }
}

export default new CategoryService();