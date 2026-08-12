export const DashboardStatisticsSchema = {
  type: "object",
  properties: {
    totalProducts: {
      type: "integer",
      example: 35,
    },
    totalCategories: {
      type: "integer",
      example: 6,
    },
    totalOrders: {
      type: "integer",
      example: 250,
    },
    pendingOrders: {
      type: "integer",
      example: 12,
    },
    completedOrders: {
      type: "integer",
      example: 210,
    },
    cancelledOrders: {
      type: "integer",
      example: 28,
    },
    todaySales: {
      type: "number",
      example: 3250,
    },
    monthlySales: {
      type: "number",
      example: 125600,
    },
    totalRevenue: {
      type: "number",
      example: 850450,
    },
  },
};