"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductIdParameter = void 0;
exports.ProductIdParameter = {
    name: "id",
    in: "path",
    required: true,
    description: "Product ID",
    schema: {
        type: "integer",
        example: 1,
    },
};
