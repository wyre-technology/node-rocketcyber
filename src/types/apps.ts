import type { BaseListParams } from './common.js';

export interface App {
  id: number;
  name: string;
  description?: string;
  version?: string;
  status?: string;
  accountId?: number;
  accountName?: string;
  createdAt?: string;
  updatedAt?: string;
  category?: string;
  configs?: Record<string, unknown>;
}

export interface AppListParams extends BaseListParams {
  accountId?: number;
  status?: string;
  name?: string;
}
