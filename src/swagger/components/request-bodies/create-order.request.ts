export const CreateOrderRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        $ref: "#/components/schemas/CreateOrder",
      },
    },
  },
};