"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListResponse = void 0;
exports.ProductListResponse = {
    description: "Products retrieved successfully",
    content: {
        "application/json": {
            schema: {
                allOf: [
                    {
                        $ref: "#/components/schemas/ApiResponse",
                    },
                    {
                        type: "object",
                        properties: {
                            data: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Product",
                                },
                            },
                        },
                    },
                ],
            },
        },
    },
};
