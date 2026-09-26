import { describe, expect, it } from "vitest";
import request from "supertest";

import app from "../../../src/app";
import { loginAs } from "../../helpers/auth";

describe("Orders API", () => {
  it("should create an order successfully", async () => {
    const token = await loginAs(
      "admin@cjrestaurant.com",
      "admin123"
    );

    const response = await request(app)
      .post("/api/v1/orders")
      .set("Authorization", `Bearer ${token}`)
      .send({
        customerName: "Test Customer",
        phone: "09171234567",
        address: "Cebu City, Cebu",
        notes: "Test order",
        paymentMethod: "GCASH",
        items: [
          {
            productId: 1,
            quantity: 2,
          },
        ],
      });

    console.log("CREATE ORDER STATUS:", response.status);
    console.log(
      "CREATE ORDER BODY:",
      JSON.stringify(response.body, null, 2)
    );

    expect(response.status).toBe(201);

    expect(response.body.success).toBe(true);

    expect(response.body.message).toBe(
      "Order created successfully."
    );

    expect(response.body.data).toHaveProperty("id");
    expect(response.body.data).toHaveProperty("orderNumber");
    expect(response.body.data).toHaveProperty("customerName");
    expect(response.body.data).toHaveProperty("items");
    expect(response.body.data).toHaveProperty("payment");
  });
});