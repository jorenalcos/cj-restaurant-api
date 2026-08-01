export const PaymentIdParameter = {
  name: "id",
  in: "path",
  required: true,
  description: "Payment ID",
  schema: {
    type: "integer",
  },
  example: 1,
};