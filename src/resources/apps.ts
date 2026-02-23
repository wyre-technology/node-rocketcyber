import type { HttpClient } from '../http.js';
import type { App, AppListParams } from '../types/apps.js';
import type { PaginatedResponse } from '../types/common.js';

export class AppsResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async list(params?: AppListParams): Promise<PaginatedResponse<App>> {
    return this.http.request<PaginatedResponse<App>>('/apps', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }

  async listAll(params?: AppListParams): Promise<App[]> {
    const allItems: App[] = [];
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
