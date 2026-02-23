import type { RocketCyberConfig, ResolvedConfig } from './config.js';
import { resolveConfig } from './config.js';
import { AuthManager } from './auth.js';
import { HttpClient } from './http.js';
import { RateLimiter } from './rate-limiter.js';
import { AccountResource } from './resources/account.js';
import { AgentsResource } from './resources/agents.js';
import { IncidentsResource } from './resources/incidents.js';
import { EventsResource } from './resources/events.js';
import { FirewallsResource } from './resources/firewalls.js';
import { AppsResource } from './resources/apps.js';
import { DefenderResource } from './resources/defender.js';
import { OfficeResource } from './resources/office.js';

export class RocketCyberClient {
  private readonly config: ResolvedConfig;
  private readonly authManager: AuthManager;
  private readonly rateLimiter: RateLimiter;
  private readonly httpClient: HttpClient;

  readonly account: AccountResource;
  readonly agents: AgentsResource;
  readonly incidents: IncidentsResource;
  readonly events: EventsResource;
  readonly firewalls: FirewallsResource;
  readonly apps: AppsResource;
  readonly defender: DefenderResource;
  readonly office: OfficeResource;

  constructor(config: RocketCyberConfig) {
    this.config = resolveConfig(config);
    this.authManager = new AuthManager(this.config);
    this.rateLimiter = new RateLimiter(this.config.rateLimit);
    this.httpClient = new HttpClient(this.config, this.authManager, this.rateLimiter);

    this.account = new AccountResource(this.httpClient);
    this.agents = new AgentsResource(this.httpClient);
    this.incidents = new IncidentsResource(this.httpClient);
    this.events = new EventsResource(this.httpClient);
    this.firewalls = new FirewallsResource(this.httpClient);
    this.apps = new AppsResource(this.httpClient);
    this.defender = new DefenderResource(this.httpClient);
    this.office = new OfficeResource(this.httpClient);
  }

  getConfig(): Readonly<ResolvedConfig> {
    return this.config;
  }

  getRateLimitStatus(): { remaining: number; rate: number } {
    return {
      remaining: this.rateLimiter.getRemainingRequests(),
      rate: this.rateLimiter.getCurrentRate(),
    };
  }
}
