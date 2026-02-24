/**
 * Configuration types and defaults for the RocketCyber client
 */

export type RocketCyberRegion = 'us' | 'eu';

export const REGION_URLS: Record<RocketCyberRegion, string> = {
  us: 'https://api-us.rocketcyber.com/v3',
  eu: 'https://api-eu.rocketcyber.com/v3',
};

export interface RateLimitConfig {
  enabled: boolean;
  maxRequests: number;
  windowMs: number;
  throttleThreshold: number;
  retryAfterMs: number;
  maxRetries: number;
}

/**
 * Conservative rate limit defaults (not publicly documented)
 */
export const DEFAULT_RATE_LIMIT_CONFIG: RateLimitConfig = {
  enabled: true,
  maxRequests: 60,
  windowMs: 60_000,
  throttleThreshold: 0.8,
  retryAfterMs: 5_000,
  maxRetries: 3,
};

export interface RocketCyberConfig {
  /** API key for Bearer token authentication */
  apiKey: string;
  /** Region (default: 'us') */
  region?: RocketCyberRegion;
  /** Explicit base URL override */
  baseUrl?: string;
  /** Rate limiting configuration */
  rateLimit?: Partial<RateLimitConfig>;
}

export interface ResolvedConfig {
  apiKey: string;
  baseUrl: string;
  rateLimit: RateLimitConfig;
}

export function resolveConfig(config: RocketCyberConfig): ResolvedConfig {
  if (!config.apiKey) {
    throw new Error('apiKey is required');
  }

  let baseUrl: string;
  if (config.baseUrl) {
    baseUrl = config.baseUrl.replace(/\/$/, '');
  } else {
    const region = config.region ?? 'us';
    const regionUrl = REGION_URLS[region];
    if (!regionUrl) {
      throw new Error(`Invalid region: ${region}. Valid regions are: ${Object.keys(REGION_URLS).join(', ')}`);
    }
    baseUrl = regionUrl;
  }

  return {
    apiKey: config.apiKey,
    baseUrl,
    rateLimit: {
      ...DEFAULT_RATE_LIMIT_CONFIG,
      ...config.rateLimit,
    },
  };
}
