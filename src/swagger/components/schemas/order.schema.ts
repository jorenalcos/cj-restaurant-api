export const OrderSchema = {
  type: "object",

  properties: {
    id: {
      type: "integer",
      example: 1,
    },

    orderNumber: {
      type: "string",
      example: "ORD-1753373812",
    },

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
      nullable: true,
      example: "Extra spicy",
    },

    subtotal: {
      type: "number",
      format: "decimal",
      example: 998,
    },

    deliveryFee: {
      type: "number",
      format: "decimal",
      example: 0,
    },

    tax: {
      type: "number",
      format: "decimal",
      example: 0,
    },

    discount: {
      type: "number",
      format: "decimal",
      example: 0,
    },

    total: {
      type: "number",
      format: "decimal",
      example: 998,
    },

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
    },

    items: {
      type: "array",
      items: {
        $ref: "#/components/schemas/OrderItem",
      },
    },

    payment: {
      $ref: "#/components/schemas/Payment",
    },

    createdAt: {
      type: "string",
      format: "date-time",
    },

    updatedAt: {
      type: "string",
      format: "date-time",
    },
  },
};