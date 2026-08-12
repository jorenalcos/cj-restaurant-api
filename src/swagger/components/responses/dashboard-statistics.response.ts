export const DashboardStatisticsResponse = {
  description: "Dashboard statistics retrieved successfully.",
  content: {
    "application/json": {
      schema: {
        type: "object",
        properties: {
          success: {
            type: "boolean",
            example: true,
          },
          message: {
            type: "string",
            example: "Dashboard statistics retrieved successfully.",
          },
          data: {
            $ref: "#/components/schemas/DashboardStatistics",
          },
        },
      },
    },
  },
};