import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server.js';
import { RocketCyberClient } from '../../src/client.js';
import {
  RocketCyberAuthenticationError,
  RocketCyberForbiddenError,
  RocketCyberNotFoundError,
  RocketCyberRateLimitError,
  RocketCyberServerError,
  RocketCyberError,
} from '../../src/errors.js';

const BASE_URL = 'https://api-us.rocketcyber.com/v3';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: BASE_URL,
  rateLimit: { enabled: false },
});

describe('HttpClient error handling', () => {
  it('should throw RocketCyberAuthenticationError on 401', async () => {
    server.use(
      http.get(`${BASE_URL}/account`, () => {
        return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
      })
    );
    await expect(client.account.get()).rejects.toThrow(RocketCyberAuthenticationError);
  });

  it('should throw RocketCyberForbiddenError on 403', async () => {
    server.use(
      http.get(`${BASE_URL}/account`, () => {
        return HttpResponse.json({ error: 'Forbidden' }, { status: 403 });
      })
    );
    await expect(client.account.get()).rejects.toThrow(RocketCyberForbiddenError);
  });

  it('should throw RocketCyberNotFoundError on 404', async () => {
    server.use(
      http.get(`${BASE_URL}/account`, () => {
        return HttpResponse.json({ error: 'Not found' }, { status: 404 });
      })
    );
    await expect(client.account.get()).rejects.toThrow(RocketCyberNotFoundError);
  });

  it('should throw RocketCyberRateLimitError on 429 after retries', async () => {
    let attempts = 0;
    server.use(
      http.get(`${BASE_URL}/account`, () => {
        attempts++;
        return HttpResponse.json({ error: 'Too many requests' }, { status: 429 });
      })
    );

    const retryClient = new RocketCyberClient({
      apiKey: 'test-api-key',
      baseUrl: BASE_URL,
      rateLimit: { enabled: false, maxRetries: 0, retryAfterMs: 100, maxRequests: 60, windowMs: 60000, throttleThreshold: 0.8 },
    });

    await expect(retryClient.account.get()).rejects.toThrow(RocketCyberRateLimitError);
    expect(attempts).toBe(1);
  });

  it('should throw RocketCyberServerError on 500 after retry', async () => {
    let attempts = 0;
    server.use(
      http.get(`${BASE_URL}/account`, () => {
        attempts++;
        return HttpResponse.json({ error: 'Internal server error' }, { status: 500 });
      })
    );
    await expect(client.account.get()).rejects.toThrow(RocketCyberServerError);
    expect(attempts).toBe(2); // initial + 1 retry
  });

  it('should throw RocketCyberError on 400', async () => {
    server.use(
      http.get(`${BASE_URL}/account`, () => {
        return HttpResponse.json({ error: 'Bad request' }, { status: 400 });
      })
    );
    await expect(client.account.get()).rejects.toThrow(RocketCyberError);
  });
});
