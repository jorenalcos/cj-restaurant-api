export class UnauthorizedError extends Error {
  public readonly statusCode: number;

  constructor(message = "Unauthorized") {
    super(message);

    this.name = "UnauthorizedError";
    this.statusCode = 401;

    Error.captureStackTrace(this, this.constructor);
  }
}