import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { firewallsFixture } from '../fixtures/firewalls.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('FirewallsResource', () => {
  it('should list firewalls', async () => {
    const response = await client.firewalls.list();
    expect(response.data).toEqual(firewallsFixture);
    expect(response.totalCount).toBe(2);
  });

  it('should listAll firewalls', async () => {
    const firewalls = await client.firewalls.listAll();
    expect(firewalls).toHaveLength(2);
    expect(firewalls[0]?.hostname).toBe('FW-EDGE-01');
  });
});
