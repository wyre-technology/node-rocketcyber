import { describe, it, expect } from 'vitest';
import { RocketCyberClient } from '../../src/client.js';
import { agentsFixture } from '../fixtures/agents.js';

const client = new RocketCyberClient({
  apiKey: 'test-api-key',
  baseUrl: 'https://api-us.rocketcyber.com/v3',
  rateLimit: { enabled: false },
});

describe('AgentsResource', () => {
  it('should list agents with pagination', async () => {
    const response = await client.agents.list();
    expect(response.data).toEqual(agentsFixture);
    expect(response.totalCount).toBe(3);
    expect(response.currentPage).toBe(1);
    expect(response.totalPages).toBe(1);
  });

  it('should list agents with page param', async () => {
    const response = await client.agents.list({ page: 1, pageSize: 2 });
    expect(response.data).toHaveLength(2);
    expect(response.totalPages).toBe(2);
  });

  it('should listAll agents across pages', async () => {
    const agents = await client.agents.listAll({ pageSize: 2 });
    expect(agents).toHaveLength(3);
    expect(agents[0]?.id).toBe('agent-001');
    expect(agents[2]?.id).toBe('agent-003');
  });
});
