import { describe, it, expect } from 'vitest';
import { RateLimiter } from '../../src/rate-limiter.js';
import { DEFAULT_RATE_LIMIT_CONFIG } from '../../src/config.js';

describe('RateLimiter', () => {
  it('should start with full remaining requests', () => {
    const limiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
    expect(limiter.getRemainingRequests()).toBe(60);
  });

  it('should decrement remaining after recording requests', () => {
    const limiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
    limiter.recordRequest();
    limiter.recordRequest();
    expect(limiter.getRemainingRequests()).toBe(58);
  });

  it('should report current rate', () => {
    const limiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
    expect(limiter.getCurrentRate()).toBe(0);
    limiter.recordRequest();
    expect(limiter.getCurrentRate()).toBeCloseTo(1 / 60);
  });

  it('should not record when disabled', () => {
    const limiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, enabled: false });
    limiter.recordRequest();
    expect(limiter.getRemainingRequests()).toBe(60);
  });

  it('should resolve waitForSlot immediately when disabled', async () => {
    const limiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, enabled: false });
    await limiter.waitForSlot(); // Should not throw or hang
  });

  it('should check retry eligibility', () => {
    const limiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, maxRetries: 3 });
    expect(limiter.shouldRetry(0)).toBe(true);
    expect(limiter.shouldRetry(2)).toBe(true);
    expect(limiter.shouldRetry(3)).toBe(false);
  });

  it('should calculate retry delay with exponential backoff', () => {
    const limiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, retryAfterMs: 1000 });
    expect(limiter.calculateRetryDelay(0)).toBe(1000);
    expect(limiter.calculateRetryDelay(1)).toBe(2000);
    expect(limiter.calculateRetryDelay(2)).toBe(4000);
  });

  it('should cap retry delay at 30 seconds', () => {
    const limiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, retryAfterMs: 10000 });
    expect(limiter.calculateRetryDelay(5)).toBe(30000);
  });

  it('should parse Retry-After header as seconds', () => {
    const limiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
    expect(limiter.parseRetryAfter('5')).toBe(5000);
    expect(limiter.parseRetryAfter('30')).toBe(30000);
  });

  it('should return default when Retry-After is null', () => {
    const limiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
    expect(limiter.parseRetryAfter(null)).toBe(DEFAULT_RATE_LIMIT_CONFIG.retryAfterMs);
  });

  it('should return default for unparseable Retry-After', () => {
    const limiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
    expect(limiter.parseRetryAfter('invalid-date')).toBe(DEFAULT_RATE_LIMIT_CONFIG.retryAfterMs);
  });
});
