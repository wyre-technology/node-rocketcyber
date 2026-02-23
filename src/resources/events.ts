import type { HttpClient } from '../http.js';
import type { Event, EventListParams, EventSummary, EventSummaryParams } from '../types/events.js';
import type { PaginatedResponse } from '../types/common.js';

export class EventsResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async list(params?: EventListParams): Promise<PaginatedResponse<Event>> {
    return this.http.request<PaginatedResponse<Event>>('/events', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }

  async listAll(params?: EventListParams): Promise<Event[]> {
    const allItems: Event[] = [];
    let page = 1;

    while (true) {
      const response = await this.list({ ...params, page });
      allItems.push(...response.data);
      if (response.currentPage >= response.totalPages) break;
      page++;
    }
    return allItems;
  }

  async getSummary(params?: EventSummaryParams): Promise<EventSummary> {
    return this.http.request<EventSummary>('/events/summary', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }
}
