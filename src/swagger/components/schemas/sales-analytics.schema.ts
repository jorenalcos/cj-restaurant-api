export const SalesAnalyticsSchema = {
  type: "object",
  properties: {
    label: {
      type: "string",
      example: "2026-08-01",
    },
    sales: {
      type: "number",
      example: 4250,
    },
  },
};