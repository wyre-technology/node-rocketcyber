import type { DefenderStatus } from '../../src/types/defender.js';

export const defenderFixture: DefenderStatus = {
  accountId: 1001,
  accountName: 'Acme Corp',
  totalEndpoints: 50,
  protectedEndpoints: 47,
  unprotectedEndpoints: 3,
  endpointDetails: [
    {
      agentId: 'agent-001',
      hostname: 'DESKTOP-ABC123',
      status: 'protected',
      version: '4.18.24010.12',
      lastScan: '2024-06-10T06:00:00Z',
      definitions: '1.411.123.0',
      realTimeProtection: true,
    },
    {
      agentId: 'agent-002',
      hostname: 'SERVER-DC01',
      status: 'protected',
      version: '4.18.24010.12',
      lastScan: '2024-06-10T04:00:00Z',
      definitions: '1.411.123.0',
      realTimeProtection: true,
    },
  ],
};
