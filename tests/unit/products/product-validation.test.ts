import { describe, expect, it } from "vitest";
import { CreateProductDto } from "../../../src/modules/product/dto/create-product.dto";
import request from "supertest";
import app from "../../../src/app";

describe("CreateProductDto", () => {
  it("should accept valid product data", () => {
    const result = CreateProductDto.safeParse({
      name: "Chicken Burger",
      description: "Classic chicken burger Test Burger ${Date.now()}",
      price: 150,
      categoryId: 1,
    });

    expect(result.success).toBe(true);
  });

  it("should reject an empty product name", () => {
    const result = CreateProductDto.safeParse({
      name: "",
      description: "Classic chicken burger Test Burger ${Date.now()}",
      price: 150,
      categoryId: 1,
    });

    expect(result.success).toBe(false);
  });

  it("should reject a negative price", () => {
    const result = CreateProductDto.safeParse({
      name: "Chicken Burger Test Burger ${Date.now()}",
      price: -100,
      categoryId: 1,
    });

    expect(result.success).toBe(false);
  });

  it("should reject an invalid category ID", () => {
    const result = CreateProductDto.safeParse({
      name: "Chicken Burger Test Burger ${Date.now()}",
      price: 150,
      categoryId: 0,
    });

    expect(result.success).toBe(false);
  });
});

describe("Products API", () => {
  it("should return products", async () => {
    const response = await request(app)
      .get("/api/v1/products");

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty("success");
    expect(response.body).toHaveProperty("data");
  });
});