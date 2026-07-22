import { ConflictResponse } from "../responses/conflict.response";
import { CreateCategoryRequest } from "./create-category.request";
import { CreateProductRequest } from "./create-product.request";
import { LoginRequest } from "./login.request";
import { UpdateCategoryRequest } from "./update-category.request";
import { UpdateProductRequest } from "./update-product.request";

export const requestBodies = {
  CreateProductRequest,
  UpdateProductRequest,

  CreateCategoryRequest,
  UpdateCategoryRequest,

  LoginRequest,

  ConflictResponse
};