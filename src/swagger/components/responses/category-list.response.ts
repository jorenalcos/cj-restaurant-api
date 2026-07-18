export const CategoryListResponse = {
  description: "Category list retrieved successfully",
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
                type: "array",

                items: {
                  $ref: "#/components/schemas/Category",
                },
              },
            },
          },
        ],
      },
    },
  },
};