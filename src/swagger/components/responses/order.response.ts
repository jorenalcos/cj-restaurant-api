export const OrderResponse = {
  description: "Order created successfully.",
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
            example: "Order created successfully.",
          },

          data: {
        $ref: "#/components/schemas/Order",
          },
        },
      },
    },
  },
};