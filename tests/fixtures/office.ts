import type { OfficeStatus } from '../../src/types/office.js';

export const officeFixture: OfficeStatus = {
  accountId: 1001,
  accountName: 'Acme Corp',
  totalUsers: 120,
  protectedUsers: 115,
  unprotectedUsers: 5,
  licenses: [
    {
      name: 'Microsoft 365 Business Premium',
      status: 'active',
      assignedTo: 'john.doe@acmecorp.com',
      createdAt: '2023-01-15T10:00:00Z',
    },
    {
      name: 'Microsoft 365 Business Premium',
      status: 'active',
      assignedTo: 'jane.smith@acmecorp.com',
      createdAt: '2023-01-15T10:00:00Z',
    },
  ],
};
