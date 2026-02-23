import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { eventsFixture, eventSummaryFixture } from '../fixtures/events.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('EventsResource', () => {
  it('should list events', async () => {
    const response = await client.events.list();
    expect(response.data).toEqual(eventsFixture);
    expect(response.totalCount).toBe(3);
  });

  it('should listAll events', async () => {
    const events = await client.events.listAll();
    expect(events).toHaveLength(3);
  });

  it('should get event summary', async () => {
    const summary = await client.events.getSummary();
    expect(summary).toEqual(eventSummaryFixture);
    expect(summary.totalEvents).toBe(1250);
    expect(summary.accountId).toBe(1001);
  });
});
