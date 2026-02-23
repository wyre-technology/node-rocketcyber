import type { BaseListParams } from './common.js';

export interface Event {
  id: string;
  eventType?: string;
  severity?: string;
  details?: Record<string, unknown>;
  accountId?: number;
  accountName?: string;
  agentId?: string;
  hostname?: string;
  createdAt?: string;
  protocol?: string;
  process?: string;
}

export interface EventListParams extends BaseListParams {
  accountId?: number;
  eventType?: string;
  severity?: string;
  dates?: string;
  hostname?: string;
}

export interface EventSummary {
  accountId: number;
  accountName?: string;
  totalEvents: number;
  eventsByType?: Record<string, number>;
  eventsBySeverity?: Record<string, number>;
}

export interface EventSummaryParams {
  accountId?: number;
  dates?: string;
}
