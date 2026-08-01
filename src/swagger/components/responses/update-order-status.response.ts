export const UpdateOrderStatusResponse = {
  description: "Order status updated successfully.",
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
            example: "Order status updated successfully.",
          },
          data: {
            $ref: "#/components/schemas/Order",
          },
        },
      },
    },
  },
};