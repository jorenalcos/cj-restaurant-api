export const UpdatePaymentStatusRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        $ref: "#/components/schemas/UpdatePaymentStatus",
      },
    },
  },
};