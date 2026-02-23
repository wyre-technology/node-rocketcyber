import type { HttpClient } from '../http.js';
import type { Agent, AgentListParams } from '../types/agents.js';
import type { PaginatedResponse } from '../types/common.js';

export class AgentsResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async list(params?: AgentListParams): Promise<PaginatedResponse<Agent>> {
    return this.http.request<PaginatedResponse<Agent>>('/agents', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }

  async listAll(params?: AgentListParams): Promise<Agent[]> {
    const allItems: Agent[] = [];
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
