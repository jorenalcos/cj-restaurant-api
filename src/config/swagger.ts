import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CJ Restaurant API",
      version: "1.0.0",
      description: "Restaurant Ordering API",
    },
    servers: [
      {
        url: "http://localhost:5000",
      },
    ],
  },
  apis: ["src/modules/**/*.ts"],
};

export default swaggerJsdoc(options);