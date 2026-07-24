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
import { NotFoundResponse } from "./responses/not-found.response";
import { UnauthorizedResponse } from "./components/responses/unauthorized.response";
import { ForbiddenResponse } from "./components/responses/forbidden.response";
import { CreateOrderSchema } from "./components/schemas/create-order.schema";
import { OrderSchema } from "./components/schemas/order.schema";
import { CreateOrderItemSchema } from "./components/schemas/order-item.schema";
import { PaymentSchema } from "./components/schemas/payment.schema";
import { OrderResponse } from "./components/responses/order.response";
import { OrderTag } from "./tags/order.tag";
import { CreateOrderResponse } from "./components/schemas/create-order.response";

export const swaggerComponents = {
    schemas: {
        Login: LoginSchema,

        ApiResponse: ApiResponseSchema,
        Category: CategorySchema,
        Product: ProductSchema,

        CreateOrder: CreateOrderSchema,
        CreateOrderItemSchema: CreateOrderItemSchema,
        Order: OrderSchema,
        Payment: PaymentSchema,
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
        LoginResponse,

        NotFoundResponse,
        UnauthorizedResponse,
        ForbiddenResponse,

        CreateOrderResponse,
    },
    requestBodies: {
        ...requestBodies,
    },
};

export const swaggerTags = [
    AuthTag,
    ProductTag,
    CategoryTag,
    OrderTag,
];