import type { HttpClient } from '../http.js';
import type { Incident, IncidentListParams } from '../types/incidents.js';
import type { PaginatedResponse } from '../types/common.js';

export class IncidentsResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async list(params?: IncidentListParams): Promise<PaginatedResponse<Incident>> {
    return this.http.request<PaginatedResponse<Incident>>('/incidents', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }

  async listAll(params?: IncidentListParams): Promise<Incident[]> {
    const allItems: Incident[] = [];
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
