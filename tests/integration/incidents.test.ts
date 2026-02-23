import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { incidentsFixture } from '../fixtures/incidents.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('IncidentsResource', () => {
  it('should list incidents', async () => {
    const response = await client.incidents.list();
    expect(response.data).toEqual(incidentsFixture);
    expect(response.totalCount).toBe(2);
  });

  it('should listAll incidents', async () => {
    const incidents = await client.incidents.listAll();
    expect(incidents).toHaveLength(2);
    expect(incidents[0]?.title).toBe('Suspicious PowerShell Execution Detected');
  });
});
