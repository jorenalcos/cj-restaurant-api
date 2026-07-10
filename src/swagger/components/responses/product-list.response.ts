export const ProductListResponse = {
  description: "Products retrieved successfully",

  content: {
    "application/json": {
      schema: {
        allOf: [
          {
            $ref: "#/components/schemas/ApiResponse",
          },
          {
            type: "object",
            properties: {
              data: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Product",
                },
              },
            },
          },
        ],
      },
    },
  },
};