import { ApiResponseSchema } from "./components/schemas/api-response.schema";
import { CategorySchema } from "./components/schemas/category.schema";
import { ProductSchema } from "./components/schemas/product.schema";
import { ProductIdParameter } from "./components/parameters/product-id.parameter";
import { ProductResponse } from "./components/responses/product.response";
import { ProductListResponse } from "./components/responses/product-list.response";

import { ProductTag } from "./tags/product.tag";
import { CategoryTag } from "./tags/category.tag";
import { requestBodies } from "./components/request-bodies";
import { CategoryIdParameter } from "./components/parameters/category-id.parameter";
import { CategoryListResponse } from "./components/responses/category-list.response";
import { CategoryResponse } from "./components/responses/category.response";
import { LoginSchema } from "./components/schemas/login.schema";
import { LoginResponse } from "./components/responses/login.response";
import { AuthTag } from "./tags/auth.tag";
import { ConflictResponse } from "./components/responses/conflict.response";

export const swaggerComponents = {
    schemas: {
        ApiResponse: ApiResponseSchema,
        Category: CategorySchema,
        Product: ProductSchema,

        Login: LoginSchema,
    },
    parameters: {
        ProductId: ProductIdParameter,
        CategoryId: CategoryIdParameter,
    },
    responses: {
        ProductResponse,
        ProductListResponse,

        CategoryResponse,
        CategoryListResponse,
        ConflictResponse,
        LoginResponse
    },
    requestBodies: {
        ...requestBodies,
    },
};

export const swaggerTags = [
    ProductTag,
    CategoryTag,
    AuthTag,
];