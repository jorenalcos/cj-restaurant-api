export const OrderTrendsResponse = {
  description: "Order trends retrieved successfully.",
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
            example: "Order trends retrieved successfully.",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/OrderTrend",
            },
          },
        },
      },
    },
  },
};