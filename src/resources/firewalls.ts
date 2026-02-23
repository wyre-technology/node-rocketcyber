import type { HttpClient } from '../http.js';
import type { Firewall, FirewallListParams } from '../types/firewalls.js';
import type { PaginatedResponse } from '../types/common.js';

export class FirewallsResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async list(params?: FirewallListParams): Promise<PaginatedResponse<Firewall>> {
    return this.http.request<PaginatedResponse<Firewall>>('/firewalls', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }

  async listAll(params?: FirewallListParams): Promise<Firewall[]> {
    const allItems: Firewall[] = [];
    let page = 1;

    while (true) {
      const response = await this.list({ ...params, page });
      allItems.push(...response.data);
      if (response.currentPage >= response.totalPages) break;
      page++;
    }
    return allItems;
  }
}
