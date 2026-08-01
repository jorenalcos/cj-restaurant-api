export const CancelOrderResponse = {
  description: "Order cancelled successfully.",
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
            example: "Order cancelled successfully.",
          },
          data: {
            $ref: "#/components/schemas/Order",
          },
        },
      },
    },
  },
};