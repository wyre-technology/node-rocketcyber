import type { HttpClient } from '../http.js';
import type { OfficeStatus, OfficeParams } from '../types/office.js';

export class OfficeResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async get(params?: OfficeParams): Promise<OfficeStatus> {
    return this.http.request<OfficeStatus>('/office', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }
}
