import type { Account } from '../../src/types/account.js';

export const accountFixture: Account = {
  id: 1001,
  accountName: 'Acme Corp MSP',
  accountPath: '/acme-corp',
  status: 'active',
  features: ['soc', 'edr', 'office365'],
  createdAt: '2023-01-15T10:00:00Z',
  updatedAt: '2024-06-01T14:30:00Z',
};
