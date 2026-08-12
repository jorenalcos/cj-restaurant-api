export const PaymentSummaryResponse = {
  description: "Payment summary retrieved successfully.",
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
            example: "Payment summary retrieved successfully.",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/PaymentSummary",
            },
          },
        },
      },
    },
  },
};