import request from "supertest";
import app from "../../src/app";

export async function loginAs(
  email: string,
  password: string
): Promise<string> {
  const response = await request(app)
    .post("/api/v1/auth/login")
    .send({
      email,
      password,
    });

  return response.body.data.accessToken;
}