export const PaymentResponse = {
  description: "Payment retrieved successfully.",
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
            $ref: "#/components/schemas/Payment",
          },
        },
      },
    },
  },
};