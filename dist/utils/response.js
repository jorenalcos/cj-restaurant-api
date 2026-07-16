"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.successResponse = successResponse;
exports.errorResponse = errorResponse;
function successResponse(res, message, data, status = 200, pagination) {
    const response = {
        success: true,
        message,
        data,
        pagination,
    };
    return res.status(status).json(response);
}
function errorResponse(res, message, status = 500) {
    return res.status(status).json({
        success: false,
        message,
    });
}
