import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { accountFixture } from '../fixtures/account.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('AccountResource', () => {
  it('should get account info', async () => {
    const account = await client.account.get();
    expect(account).toEqual(accountFixture);
    expect(account.id).toBe(1001);
    expect(account.accountName).toBe('Acme Corp MSP');
  });
});
