import type { BaseListParams } from './common.js';

export interface Incident {
  id: number;
  title: string;
  description?: string;
  remediation?: string;
  resolvedAt?: string;
  publishedAt?: string;
  createdAt?: string;
  updatedAt?: string;
  status?: string;
  accountId?: number;
  accountName?: string;
  accountPath?: string;
  eventCount?: number;
  affectedDevices?: string[];
  severity?: string;
}

export interface IncidentListParams extends BaseListParams {
  accountId?: number;
  status?: string;
  dates?: string;
  severity?: string;
  title?: string;
}
