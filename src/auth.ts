/**
 * Bearer token authentication manager for the RocketCyber API
 */

import type { ResolvedConfig } from './config.js';

export class AuthManager {
  private readonly config: ResolvedConfig;

  constructor(config: ResolvedConfig) {
    this.config = config;
  }

  getAuthHeaders(): Record<string, string> {
    return {
      'Authorization': `Bearer ${this.config.apiKey}`,
    };
  }
}
