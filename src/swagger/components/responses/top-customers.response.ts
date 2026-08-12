export const TopCustomersResponse = {
  description: "Top customers retrieved successfully.",
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
            example: "Top customers retrieved successfully.",
          },
          data: {
            type: "array",
            items: {
              $ref: "#/components/schemas/TopCustomer",
            },
          },
        },
      },
    },
  },
};