export const SalesAnalyticsResponse = {
  description: "Sales analytics retrieved successfully.",
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
            example: "Sales analytics retrieved successfully.",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/SalesAnalytics",
            },
          },
        },
      },
    },
  },
};