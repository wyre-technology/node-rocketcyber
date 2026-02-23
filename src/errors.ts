/**
 * Custom error classes for the RocketCyber client
 */

export class RocketCyberError extends Error {
  readonly statusCode: number;
  readonly response: unknown;

  constructor(message: string, statusCode: number = 0, response?: unknown) {
    super(message);
    this.name = 'RocketCyberError';
    this.statusCode = statusCode;
    this.response = response;
    Object.setPrototypeOf(this, RocketCyberError.prototype);
  }
}

export class RocketCyberAuthenticationError extends RocketCyberError {
  constructor(message: string, statusCode: number = 401, response?: unknown) {
    super(message, statusCode, response);
    this.name = 'RocketCyberAuthenticationError';
    Object.setPrototypeOf(this, RocketCyberAuthenticationError.prototype);
  }
}

export class RocketCyberForbiddenError extends RocketCyberError {
  constructor(message: string, response?: unknown) {
    super(message, 403, response);
    this.name = 'RocketCyberForbiddenError';
    Object.setPrototypeOf(this, RocketCyberForbiddenError.prototype);
  }
}

export class RocketCyberNotFoundError extends RocketCyberError {
  constructor(message: string, response?: unknown) {
    super(message, 404, response);
    this.name = 'RocketCyberNotFoundError';
    Object.setPrototypeOf(this, RocketCyberNotFoundError.prototype);
  }
}

export class RocketCyberRateLimitError extends RocketCyberError {
  readonly retryAfter: number;

  constructor(message: string, retryAfter: number = 5000, response?: unknown) {
    super(message, 429, response);
    this.name = 'RocketCyberRateLimitError';
    this.retryAfter = retryAfter;
    Object.setPrototypeOf(this, RocketCyberRateLimitError.prototype);
  }
}

export class RocketCyberServerError extends RocketCyberError {
  constructor(message: string, statusCode: number = 500, response?: unknown) {
    super(message, statusCode, response);
    this.name = 'RocketCyberServerError';
    Object.setPrototypeOf(this, RocketCyberServerError.prototype);
  }
}
