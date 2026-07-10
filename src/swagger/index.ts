import { ApiResponseSchema } from "./components/schemas/api-response.schema";
import { CategorySchema } from "./components/schemas/category.schema";
import { ProductSchema } from "./components/schemas/product.schema";
import {ProductIdParameter} from "./components/parameters/product-id.parameter";
import { ProductResponse } from "./components/responses/product.response";
import { ProductListResponse } from "./components/responses/product-list.response";

import { ProductTag } from "./tags/product.tag";
import { CategoryTag } from "./tags/category.tag";

export const swaggerComponents = {
  schemas: {
    ApiResponse: ApiResponseSchema,
    Category: CategorySchema,
    Product: ProductSchema,
  },
  parameters: {
    ProductId: ProductIdParameter,
  },
  responses: {
    ProductResponse,
    ProductListResponse,
  },
};

export const swaggerTags = [
  ProductTag,
  CategoryTag,
];