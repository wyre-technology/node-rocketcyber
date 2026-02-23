import type { Firewall } from '../../src/types/firewalls.js';

export const firewallsFixture: Firewall[] = [
  {
    id: 3001,
    accountId: 1001,
    accountName: 'Acme Corp',
    hostname: 'FW-EDGE-01',
    ipAddress: '10.0.0.1',
    firmware: '7.4.3',
    model: 'FortiGate 60F',
    serial: 'FGT60F0000001',
    vendor: 'Fortinet',
    connectivity: 'online',
    createdAt: '2023-02-20T10:00:00Z',
    updatedAt: '2024-06-01T08:00:00Z',
  },
  {
    id: 3002,
    accountId: 1001,
    accountName: 'Acme Corp',
    hostname: 'FW-BRANCH-01',
    ipAddress: '10.1.0.1',
    firmware: '6.2.1',
    model: 'SonicWall TZ370',
    serial: 'SW0000002',
    vendor: 'SonicWall',
    connectivity: 'offline',
    createdAt: '2023-05-15T14:00:00Z',
    updatedAt: '2024-05-20T11:00:00Z',
  },
];
