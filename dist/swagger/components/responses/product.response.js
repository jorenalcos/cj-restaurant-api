"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductResponse = void 0;
exports.ProductResponse = {
    description: "Product retrieved successfully",
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
                                $ref: "#/components/schemas/Product",
                            },
                        },
                    },
                ],
            },
        },
    },
};
