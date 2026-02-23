// Client
export { RocketCyberClient } from './client.js';

// Config
export type { RocketCyberConfig, ResolvedConfig, RateLimitConfig, RocketCyberRegion } from './config.js';
export { resolveConfig, REGION_URLS, DEFAULT_RATE_LIMIT_CONFIG } from './config.js';

// Errors
export {
  RocketCyberError,
  RocketCyberAuthenticationError,
  RocketCyberForbiddenError,
  RocketCyberNotFoundError,
  RocketCyberRateLimitError,
  RocketCyberServerError,
} from './errors.js';

// Types
export type {
  BaseListParams,
  PaginatedResponse,
  Account,
  Agent,
  AgentListParams,
  Incident,
  IncidentListParams,
  Event,
  EventListParams,
  EventSummary,
  EventSummaryParams,
  Firewall,
  FirewallListParams,
  App,
  AppListParams,
  DefenderStatus,
  DefenderEndpoint,
  DefenderParams,
  OfficeStatus,
  OfficeLicense,
  OfficeParams,
} from './types/index.js';

// Resources
export { AccountResource } from './resources/account.js';
export { AgentsResource } from './resources/agents.js';
export { IncidentsResource } from './resources/incidents.js';
export { EventsResource } from './resources/events.js';
export { FirewallsResource } from './resources/firewalls.js';
export { AppsResource } from './resources/apps.js';
export { DefenderResource } from './resources/defender.js';
export { OfficeResource } from './resources/office.js';
