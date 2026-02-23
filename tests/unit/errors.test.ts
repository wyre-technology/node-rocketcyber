import { describe, it, expect } from 'vitest';
import {
  RocketCyberError,
  RocketCyberAuthenticationError,
  RocketCyberForbiddenError,
  RocketCyberNotFoundError,
  RocketCyberRateLimitError,
  RocketCyberServerError,
} from '../../src/errors.js';

describe('Error classes', () => {
  it('RocketCyberError should have correct properties', () => {
    const error = new RocketCyberError('test error', 400, { detail: 'bad request' });
    expect(error.message).toBe('test error');
    expect(error.statusCode).toBe(400);
    expect(error.response).toEqual({ detail: 'bad request' });
    expect(error.name).toBe('RocketCyberError');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(RocketCyberError);
  });

  it('RocketCyberAuthenticationError should default to 401', () => {
    const error = new RocketCyberAuthenticationError('auth failed');
    expect(error.statusCode).toBe(401);
    expect(error.name).toBe('RocketCyberAuthenticationError');
    expect(error).toBeInstanceOf(RocketCyberError);
  });

  it('RocketCyberForbiddenError should be 403', () => {
    const error = new RocketCyberForbiddenError('forbidden');
    expect(error.statusCode).toBe(403);
    expect(error.name).toBe('RocketCyberForbiddenError');
    expect(error).toBeInstanceOf(RocketCyberError);
  });

  it('RocketCyberNotFoundError should be 404', () => {
    const error = new RocketCyberNotFoundError('not found');
    expect(error.statusCode).toBe(404);
    expect(error.name).toBe('RocketCyberNotFoundError');
    expect(error).toBeInstanceOf(RocketCyberError);
  });

  it('RocketCyberRateLimitError should be 429 with retryAfter', () => {
    const error = new RocketCyberRateLimitError('rate limited', 10000);
    expect(error.statusCode).toBe(429);
    expect(error.retryAfter).toBe(10000);
    expect(error.name).toBe('RocketCyberRateLimitError');
    expect(error).toBeInstanceOf(RocketCyberError);
  });

  it('RocketCyberServerError should default to 500', () => {
    const error = new RocketCyberServerError('server error');
    expect(error.statusCode).toBe(500);
    expect(error.name).toBe('RocketCyberServerError');
    expect(error).toBeInstanceOf(RocketCyberError);
  });

  it('RocketCyberServerError should accept custom status codes', () => {
    const error = new RocketCyberServerError('bad gateway', 502);
    expect(error.statusCode).toBe(502);
  });
});
