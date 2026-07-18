import categoryRepository from "./category.repository";
import { CreateCategoryInput } from "./dto/create-category.dto";
import { ConflictError } from "../../errors/ConflictError";

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
}

export default new CategoryService();