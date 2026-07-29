export const OrderListResponse = {
  description: "List of orders retrieved successfully.",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: true,
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Order",
            },
          },
        },
      },
    },
  },
};