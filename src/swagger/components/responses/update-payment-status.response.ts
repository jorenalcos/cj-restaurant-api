export const UpdatePaymentStatusResponse = {
  description: "Payment status updated successfully.",
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
            example: "Payment status updated successfully.",
          },
          data: {
            $ref: "#/components/schemas/Payment",
          },
        },
      },
    },
  },
};