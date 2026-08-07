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
import { OrderItemSchema } from "./components/schemas/order-item.schema";
import { PaymentSchema } from "./components/schemas/payment.schema";
import { OrderResponse } from "./components/responses/order.response";
import { OrderTag } from "./tags/order.tag";
import { CreateOrderResponse } from "./components/schemas/create-order.response";
import { OrderListResponse } from "./components/responses/order-list.response";
import { OrderIdParameter } from "./components/parameters/order.id.parameter";
import { CreateOrderItemSchema } from "./components/schemas/create-order-item.schema";
import { InternalServerErrorResponse } from "./components/responses/internal-server-error.response";
import { UpdateOrderStatusSchema } from "./components/schemas/update-order-status.schema";
import { UpdateOrderStatusResponse } from "./components/responses/update-order-status.response";
import { UpdatePaymentStatusSchema } from "./components/schemas/update-payment-status.schema";
import { PaymentIdParameter } from "./components/parameters/payment-id.parameter";
import { UpdatePaymentStatusResponse } from "./components/responses/update-payment-status.response";
import { PaymentListResponse } from "./components/responses/payment-list.response";
import { PaymentResponse } from "./components/responses/payment.response";
import { PaymentTag } from "./tags/payment.tag";
import { CancelOrderResponse } from "./components/responses/cancel-order-response";
import { LimitParameter } from "./components/parameters/limit.parameter";
import { PageParameter } from "./components/parameters/page.parameter";
import { SearchParameter } from "./components/parameters/search.parameter";
import { SortOrderParameter } from "./components/parameters/sort-order.parameter";
import { CategoryFilterParameter } from "./components/parameters/categoryId.parameter";
import { IsAvailableParameter } from "./components/parameters/isAvailable.parameter";

export const swaggerComponents = {
    schemas: {
        Login: LoginSchema,

        ApiResponse: ApiResponseSchema,
        Category: CategorySchema,
        Product: ProductSchema,

        CreateOrder: CreateOrderSchema,
        CreateOrderItem: CreateOrderItemSchema,
        OrderItem: OrderItemSchema,
        Order: OrderSchema,
        UpdateOrderStatus: UpdateOrderStatusSchema,

        Payment: PaymentSchema,
        UpdatePaymentStatus: UpdatePaymentStatusSchema,
    },
    parameters: {
        ProductId: ProductIdParameter,
        CategoryId: CategoryIdParameter,
        OrderId: OrderIdParameter,
        PaymentId: PaymentIdParameter,

        Page: PageParameter,
        Limit: LimitParameter,
        Search: SearchParameter,
        Sort: SortOrderParameter,
        CategoryFilter: CategoryFilterParameter,
        IsAvailable: IsAvailableParameter
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
        OrderListResponse,
        OrderResponse,
        UpdateOrderStatusResponse,
        CancelOrderResponse,

        InternalServerErrorResponse,

        PaymentResponse,
        PaymentListResponse,
        UpdatePaymentStatusResponse,
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
    PaymentTag
];