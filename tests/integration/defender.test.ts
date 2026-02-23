import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { defenderFixture } from '../fixtures/defender.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('DefenderResource', () => {
  it('should get defender status', async () => {
    const status = await client.defender.get();
    expect(status).toEqual(defenderFixture);
    expect(status.totalEndpoints).toBe(50);
    expect(status.protectedEndpoints).toBe(47);
  });
});
