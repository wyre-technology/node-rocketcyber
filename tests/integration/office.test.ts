import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { officeFixture } from '../fixtures/office.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('OfficeResource', () => {
  it('should get office status', async () => {
    const status = await client.office.get();
    expect(status).toEqual(officeFixture);
    expect(status.totalUsers).toBe(120);
    expect(status.protectedUsers).toBe(115);
  });
});
