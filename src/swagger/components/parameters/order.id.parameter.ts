export const OrderIdParameter = {
  name: "id",
  in: "path",
  required: true,
  schema: {
    type: "integer",
  },
  description: "Order ID",
  example: 1,
};