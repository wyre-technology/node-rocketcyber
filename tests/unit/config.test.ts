import { describe, it, expect } from 'vitest';
import { resolveConfig, REGION_URLS, DEFAULT_RATE_LIMIT_CONFIG } from '../../src/config.js';

describe('resolveConfig', () => {
  it('should resolve config with defaults', () => {
    const config = resolveConfig({ apiKey: 'test-key' });
    expect(config.apiKey).toBe('test-key');
    expect(config.baseUrl).toBe('https://api-us.rocketcyber.com/v3');
    expect(config.rateLimit).toEqual(DEFAULT_RATE_LIMIT_CONFIG);
  });

  it('should use us region by default', () => {
    const config = resolveConfig({ apiKey: 'test-key' });
    expect(config.baseUrl).toBe(REGION_URLS.us);
  });

  it('should use explicit us region', () => {
    const config = resolveConfig({ apiKey: 'test-key', region: 'us' });
    expect(config.baseUrl).toBe('https://api-us.rocketcyber.com/v3');
  });

  it('should use eu region', () => {
    const config = resolveConfig({ apiKey: 'test-key', region: 'eu' });
    expect(config.baseUrl).toBe('https://api-eu.rocketcyber.com/v3');
  });

  it('should use explicit baseUrl and strip trailing slash', () => {
    const config = resolveConfig({
      apiKey: 'test-key',
      baseUrl: 'https://custom.api.com/v3/',
    });
    expect(config.baseUrl).toBe('https://custom.api.com/v3');
  });

  it('should override rate limit config partially', () => {
    const config = resolveConfig({
      apiKey: 'test-key',
      rateLimit: { maxRequests: 100 },
    });
    expect(config.rateLimit.maxRequests).toBe(100);
    expect(config.rateLimit.windowMs).toBe(DEFAULT_RATE_LIMIT_CONFIG.windowMs);
  });

  it('should throw if apiKey is empty', () => {
    expect(() => resolveConfig({ apiKey: '' })).toThrow('apiKey is required');
  });

  it('should throw for invalid region', () => {
    expect(() =>
      resolveConfig({ apiKey: 'test-key', region: 'invalid' as any })
    ).toThrow('Invalid region');
  });
});
