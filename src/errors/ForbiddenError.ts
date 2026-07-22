export class ForbiddenError extends Error {
  public readonly statusCode: number;

  constructor(message = "Forbidden") {
    super(message);

    this.name = "ForbiddenError";
    this.statusCode = 403;

    Error.captureStackTrace(this, this.constructor);
  }
}