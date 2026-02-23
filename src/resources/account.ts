import type { HttpClient } from '../http.js';
import type { Account } from '../types/account.js';

export class AccountResource {
  private readonly http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  async get(params?: { accountId?: number }): Promise<Account> {
    return this.http.request<Account>('/account', {
      params: params as Record<string, string | number | boolean | undefined>,
    });
  }
}
