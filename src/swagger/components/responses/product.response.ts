export const ProductResponse = {
  description: "Product retrieved successfully",

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
                $ref: "#/components/schemas/Product",
              },
            },
          },
        ],
      },
    },
  },
};