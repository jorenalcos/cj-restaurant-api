export const ConflictResponse = {
  description: "Conflict",

  content: {
    "application/json": {
      schema: {
        allOf: [
          {
            $ref: "#/components/schemas/ApiResponse",
          },
          {
            properties: {
              success: {
                example: false,
              },

              message: {
                example: "Resource already exists.",
              },
            },
          },
        ],
      },
    },
  },
};