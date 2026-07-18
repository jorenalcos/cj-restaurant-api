export const CategoryResponse = {
  description: "Category retrieved successfully",
  content: {
    "application/json": {
      schema: {
        allOf: [
          {
            $ref: "#/components/schemas/ApiResponse",
          },
          {
            properties: {
              data: {
                $ref: "#/components/schemas/Category",
              },
            },
          },
        ],
      },
    },
  },
};