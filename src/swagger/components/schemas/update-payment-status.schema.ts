export const UpdatePaymentStatusSchema = {
  type: "object",
  required: ["status"],
  properties: {
    status: {
      type: "string",
      enum: [
        "PENDING",
        "PAID",
        "FAILED",
        "REFUNDED",
      ],
      example: "PAID",
    },
  },
};