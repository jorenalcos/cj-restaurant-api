export const BestSellingProductsResponse = {
  description: "Best selling products retrieved successfully.",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: true,
          },
          message: {
            type: "string",
            example: "Best selling products retrieved successfully.",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/BestSellingProduct",
            },
          },
        },
      },
    },
  },
};