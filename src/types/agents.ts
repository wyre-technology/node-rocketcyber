import type { BaseListParams } from './common.js';

export interface Agent {
  id: string;
  customerId: number;
  customerName?: string;
  hostname: string;
  platform?: string;
  family?: string;
  version?: string;
  architecture?: string;
  build?: string;
  connectivity?: 'online' | 'offline';
  agentVersion?: string;
  ipAddress?: string;
  macAddress?: string;
  createdAt?: string;
  accountPath?: string;
}

export interface AgentListParams extends BaseListParams {
  /** Account ID to filter by */
  accountId?: number;
  /** Filter by connectivity status (comma-separated: "online,offline") */
  connectivity?: string;
  /** Filter by hostname */
  hostname?: string;
  /** Filter by platform */
  platform?: string;
  /** Date range (pipe-separated: "2024-01-01|2024-02-01") */
  dates?: string;
}
