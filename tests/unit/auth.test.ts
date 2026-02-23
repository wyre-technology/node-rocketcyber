import { describe, it, expect } from 'vitest';
import { AuthManager } from '../../src/auth.js';
import { resolveConfig } from '../../src/config.js';

describe('AuthManager', () => {
  it('should return Bearer token auth headers', () => {
    const config = resolveConfig({ apiKey: 'my-api-key' });
    const auth = new AuthManager(config);
    const headers = auth.getAuthHeaders();
    expect(headers).toEqual({
      Authorization: 'Bearer my-api-key',
    });
  });

  it('should use the api key from config', () => {
    const config = resolveConfig({ apiKey: 'different-key' });
    const auth = new AuthManager(config);
    const headers = auth.getAuthHeaders();
    expect(headers.Authorization).toBe('Bearer different-key');
  });
});
