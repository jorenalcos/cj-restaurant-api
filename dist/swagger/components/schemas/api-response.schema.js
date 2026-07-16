"use strict";
// api-response.schema.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseSchema = void 0;
exports.ApiResponseSchema = {
    type: "object",
    properties: {
        success: {
            type: "boolean",
            example: true,
        },
        message: {
            type: "string",
            example: "Success",
        },
        data: {
            type: "object",
        },
    },
};
