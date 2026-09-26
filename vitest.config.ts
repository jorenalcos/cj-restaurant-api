import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    setupFiles: ["./tests/setup.ts"],
  },

  define: {
    "process.env.NODE_ENV": JSON.stringify("test"),
  },
});