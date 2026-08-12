export const OrderTrendSchema = {
  type: "object",
  properties: {
    label: {
      type: "string",
      example: "2026-08-01",
    },

    pending: {
      type: "integer",
      example: 3,
    },

    confirmed: {
      type: "integer",
      example: 5,
    },

    preparing: {
      type: "integer",
      example: 2,
    },

    ready: {
      type: "integer",
      example: 4,
    },

    outForDelivery: {
      type: "integer",
      example: 1,
    },

    delivered: {
      type: "integer",
      example: 12,
    },

    cancelled: {
      type: "integer",
      example: 0,
    },
  },
};