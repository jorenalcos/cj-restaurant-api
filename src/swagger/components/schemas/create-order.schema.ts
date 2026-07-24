export const CreateOrderSchema = {
  type: "object",
  required: [
    "customerName",
    "phone",
    "address",
    "paymentMethod",
    "items",
  ],
  properties: {
    customerName: {
      type: "string",
      example: "Juan Dela Cruz",
    },
    phone: {
      type: "string",
      example: "09171234567",
    },
    address: {
      type: "string",
      example: "Cebu City",
    },
    notes: {
      type: "string",
      example: "No onions",
      nullable: true,
    },
    paymentMethod: {
      type: "string",
      enum: [
        "CASH",
        "CASH_ON_DELIVERY",
        "GCASH",
        "MAYA",
        "CARD",
      ],
      example: "GCASH",
    },
    items: {
      type: "array",
      items: {
        $ref: "#/components/schemas/CreateOrderItem",
      },
    },
  },
};