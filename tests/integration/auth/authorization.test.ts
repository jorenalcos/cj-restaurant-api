import { describe, expect, it } from "vitest";
import request from "supertest";

import app from "../../../src/app";
import { loginAs } from "../../helpers/auth";

describe("Product authorization", () => {
  it("should allow ADMIN to create a product", async () => {
    const token = await loginAs(
      "admin@cjrestaurant.com",
      "admin123"
    );

    const productName = `Test Burger ${Date.now()}`;

    const response = await request(app)
      .post("/api/v1/products")
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: productName,
        description: "Test product",
        price: 150,
        categoryId: 1,
      });

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
  });

  // it("should allow MANAGER to create a product", async () => {
  //   const token = await loginAs(
  //     "manager@example.com",
  //     "password123"
  //   );

  //   const response = await request(app)
  //     .post("/api/v1/products")
  //     .set("Authorization", `Bearer ${token}`)
  //     .send({
  //       name: "Beef Burger",
  //       description: "Classic beef burger",
  //       price: 180,
  //       categoryId: 1,
  //     });

  //   expect(response.status).toBe(201);
  // });

  // it("should reject STAFF from creating a product", async () => {
  //   const token = await loginAs(
  //     "staff@example.com",
  //     "password123"
  //   );

  //   const response = await request(app)
  //     .post("/api/v1/products")
  //     .set("Authorization", `Bearer ${token}`)
  //     .send({
  //       name: "Fries",
  //       description: "French fries",
  //       price: 100,
  //       categoryId: 1,
  //     });

  //   expect(response.status).toBe(403);

  //   expect(response.body.success).toBe(false);
  // });
});