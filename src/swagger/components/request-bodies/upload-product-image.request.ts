export const UploadProductImageRequest = {
  required: true,
  content: {
    "multipart/form-data": {
      schema: {
        type: "object",
        required: ["image"],
        properties: {
          image: {
            type: "string",
            format: "binary",
          },
        },
      },
    },
  },
};