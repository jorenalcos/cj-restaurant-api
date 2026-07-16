"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
exports.CategorySchema = {
    type: "object",
    properties: {
        id: {
            type: "integer",
            example: 1,
        },
        name: {
            type: "string",
            example: "Coffee",
        },
        createdAt: {
            type: "string",
            format: "date-time",
        },
        updatedAt: {
            type: "string",
            format: "date-time",
        },
    },
};
