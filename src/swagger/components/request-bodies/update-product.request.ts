export const UpdateProductRequest = {
  required: true,
  content: {
    "application/json": {
      schema: {
        type: "object",
        required: [
          "categoryId",
          "name",
          "description",
          "price",
          "rating",
          "isAvailable",
        ],
        properties: {
          categoryId: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Chicken Burger",
          },
          description: {
            type: "string",
            example: "Delicious grilled chicken burger",
          },
          price: {
            type: "number",
            example: 199,
          },
          image: {
            type: "string",
            nullable: true,
            example: "https://example.com/burger.jpg",
          },
          rating: {
            type: "number",
            example: 5,
          },
          isAvailable: {
            type: "boolean",
            example: true,
          },
        },
      },
    },
  },
};