export const UpdateOrderStatusRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        $ref: "#/components/schemas/UpdateOrderStatus",
      },
    },
  },
};