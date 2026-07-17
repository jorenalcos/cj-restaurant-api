export const NotFoundResponse = {
  description: "Resource not found",
  content: {
    "application/json": {
      schema: {
        $ref: "#/components/schemas/ApiResponse",
      },
      example: {
        success: false,
        message: "Product not found",
      },
    },
  },
};