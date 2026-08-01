import { ConflictResponse } from "../responses/conflict.response";
import { CreateCategoryRequest } from "./create-category.request";
import { CreateOrderRequest } from "./create-order.request";
import { CreateProductRequest } from "./create-product.request";
import { LoginRequest } from "./login.request";
import { UpdateCategoryRequest } from "./update-category.request";
import { UpdateOrderStatusRequest } from "./update-order-status.request";
import { UpdatePaymentStatusRequest } from "./update-payment-status.request";
import { UpdateProductRequest } from "./update-product.request";

export const requestBodies = {
  CreateProductRequest,
  UpdateProductRequest,

  CreateCategoryRequest,
  UpdateCategoryRequest,

  CreateOrderRequest,

  LoginRequest,

  UpdateOrderStatusRequest,

  UpdatePaymentStatusRequest
};