import type { App } from '../../src/types/apps.js';

export const appsFixture: App[] = [
  {
    id: 2001,
    name: 'Breach Detection',
    description: 'Monitors for credential breaches across the dark web',
    version: '2.1.0',
    status: 'active',
    accountId: 1001,
    accountName: 'Acme Corp',
    createdAt: '2023-04-01T10:00:00Z',
    updatedAt: '2024-05-15T09:00:00Z',
    category: 'security',
  },
  {
    id: 2002,
    name: 'DNS Filtering',
    description: 'DNS-level content filtering and threat protection',
    version: '1.5.3',
    status: 'active',
    accountId: 1001,
    accountName: 'Acme Corp',
    createdAt: '2023-06-20T08:00:00Z',
    updatedAt: '2024-04-10T12:00:00Z',
    category: 'network',
  },
];
