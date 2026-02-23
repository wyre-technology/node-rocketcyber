import type { HttpClient } from '../http.js';
import type { DefenderStatus, DefenderParams } from '../types/defender.js';

export class DefenderResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async get(params?: DefenderParams): Promise<DefenderStatus> {
    return this.http.request<DefenderStatus>('/defender', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }
}
