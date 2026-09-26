import { describe, expect, it } from "vitest";
import request from "supertest";

import app from "../../../src/app";

console.log("NODE_ENV:", process.env.NODE_ENV);

describe("Authentication API", () => {
  it("should login successfully with valid credentials", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "admin@cjrestaurant.com",
        password: "admin123",
      });

    expect(response.status).toBe(200);

    expect(response.body.success).toBe(true);

    expect(response.body.data).toHaveProperty("accessToken");

    expect(typeof response.body.data.accessToken).toBe("string");
  });

  it("should reject invalid credentials", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "admin@cjrestaurant.com",
        password: "wrong-password",
      });

    expect(response.status).toBe(401);

    expect(response.body.success).toBe(false);
  });

  it("should reject missing email", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        password: "admin123",
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Validation failed.");
  });

  it("should reject missing password", async () => {
    const response = await request(app)
      .post("/api/v1/auth/login")
      .send({
        email: "admin@cjrestaurant.com",
      });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
    expect(response.body.message).toBe("Validation failed.");
  });
});