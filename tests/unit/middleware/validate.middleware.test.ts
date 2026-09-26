import { describe, expect, it, vi } from "vitest";
import { Request, Response } from "express";
import { z } from "zod";

import { validate } from "../../../src/middleware/validate.middleware";

describe("validate middleware", () => {
  it("should call next when body is valid", () => {
    const schema = z.object({
      name: z.string(),
      price: z.number(),
    });

    const req = {
      body: {
        name: "Burger",
        price: 150,
      },
    } as Request;

    const res = {} as Response;
    const next = vi.fn();

    const middleware = validate({
      body: schema,
    });

    middleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();
    expect(req.body).toEqual({
      name: "Burger",
      price: 150,
    });
  });

  it("should call next with an error when body is invalid", () => {
    const schema = z.object({
      name: z.string(),
      price: z.number(),
    });

    const req = {
      body: {
        name: "Burger",
        price: "150",
      },
    } as Request;

    const res = {} as Response;
    const next = vi.fn();

    const middleware = validate({
      body: schema,
    });

    middleware(req, res, next);

    expect(next).toHaveBeenCalledOnce();

    const error = next.mock.calls[0][0];

    expect(error).toBeDefined();
  });
});