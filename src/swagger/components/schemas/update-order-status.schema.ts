export const UpdateOrderStatusSchema = {
  type: "object",
  required: ["status"],
  properties: {
    status: {
      type: "string",
      enum: [
        "PENDING",
        "CONFIRMED",
        "PREPARING",
        "READY",
        "OUT_FOR_DELIVERY",
        "DELIVERED",
        "CANCELLED",
      ],
      example: "CONFIRMED",
    },
  },
};