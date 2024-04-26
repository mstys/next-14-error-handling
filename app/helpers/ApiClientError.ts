/** custom error class */

export class ApiClientError extends Error {
  constructor(
    message: string,
    public httpCode: 400 | 401 | 402 | 403 | 404 | 500 | number,
    cause?: any
  ) {
    super(message);
    this.httpCode = httpCode ?? 500;
    this.cause = cause;
  }
}
