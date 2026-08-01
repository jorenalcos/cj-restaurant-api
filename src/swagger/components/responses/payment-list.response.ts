export const PaymentListResponse = {
  description: "Payments retrieved successfully.",
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
              $ref: "#/components/schemas/Payment",
            },
          },
        },
      },
    },
  },
};