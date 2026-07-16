"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerTags = exports.swaggerComponents = void 0;
const api_response_schema_1 = require("./components/schemas/api-response.schema");
const category_schema_1 = require("./components/schemas/category.schema");
const product_schema_1 = require("./components/schemas/product.schema");
const product_id_parameter_1 = require("./components/parameters/product-id.parameter");
const product_response_1 = require("./components/responses/product.response");
const product_list_response_1 = require("./components/responses/product-list.response");
const product_tag_1 = require("./tags/product.tag");
const category_tag_1 = require("./tags/category.tag");
exports.swaggerComponents = {
    schemas: {
        ApiResponse: api_response_schema_1.ApiResponseSchema,
        Category: category_schema_1.CategorySchema,
        Product: product_schema_1.ProductSchema,
    },
    parameters: {
        ProductId: product_id_parameter_1.ProductIdParameter,
    },
    responses: {
        ProductResponse: product_response_1.ProductResponse,
        ProductListResponse: product_list_response_1.ProductListResponse,
    },
};
exports.swaggerTags = [
    product_tag_1.ProductTag,
    category_tag_1.CategoryTag,
];
