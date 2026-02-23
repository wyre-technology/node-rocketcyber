import type { BaseListParams } from './common.js';

export interface Firewall {
  id: number;
  accountId?: number;
  accountName?: string;
  hostname?: string;
  ipAddress?: string;
  firmware?: string;
  model?: string;
  serial?: string;
  vendor?: string;
  connectivity?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface FirewallListParams extends BaseListParams {
  accountId?: number;
  connectivity?: string;
  hostname?: string;
  vendor?: string;
}
