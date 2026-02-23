import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { appsFixture } from '../fixtures/apps.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('AppsResource', () => {
  it('should list apps', async () => {
    const response = await client.apps.list();
    expect(response.data).toEqual(appsFixture);
    expect(response.totalCount).toBe(2);
  });

  it('should listAll apps', async () => {
    const apps = await client.apps.listAll();
    expect(apps).toHaveLength(2);
    expect(apps[0]?.name).toBe('Breach Detection');
  });
});
