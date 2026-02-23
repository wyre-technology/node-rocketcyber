import type { Event, EventSummary } from '../../src/types/events.js';

export const eventsFixture: Event[] = [
  {
    id: 'evt-001',
    eventType: 'malware_detected',
    severity: 'critical',
    details: { malwareName: 'Trojan.GenericKD', action: 'quarantined' },
    accountId: 1001,
    accountName: 'Acme Corp',
    agentId: 'agent-001',
    hostname: 'DESKTOP-ABC123',
    createdAt: '2024-06-10T14:20:00Z',
    process: 'suspicious.exe',
  },
  {
    id: 'evt-002',
    eventType: 'firewall_block',
    severity: 'low',
    details: { sourceIp: '203.0.113.50', destPort: 445 },
    accountId: 1001,
    accountName: 'Acme Corp',
    agentId: 'agent-002',
    hostname: 'SERVER-DC01',
    createdAt: '2024-06-10T12:00:00Z',
    protocol: 'TCP',
  },
  {
    id: 'evt-003',
    eventType: 'login_failure',
    severity: 'medium',
    details: { username: 'admin', attempts: 5 },
    accountId: 1002,
    accountName: 'Beta LLC',
    agentId: 'agent-003',
    hostname: 'MAC-PRO-01',
    createdAt: '2024-06-09T18:45:00Z',
  },
];

export const eventSummaryFixture: EventSummary = {
  accountId: 1001,
  accountName: 'Acme Corp',
  totalEvents: 1250,
  eventsByType: {
    malware_detected: 15,
    firewall_block: 800,
    login_failure: 200,
    policy_violation: 235,
  },
  eventsBySeverity: {
    critical: 5,
    high: 25,
    medium: 220,
    low: 1000,
  },
};
