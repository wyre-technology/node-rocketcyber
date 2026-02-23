import { http, HttpResponse } from 'msw';
import { accountFixture } from '../fixtures/account.js';
import { agentsFixture } from '../fixtures/agents.js';
import { incidentsFixture } from '../fixtures/incidents.js';
import { eventsFixture, eventSummaryFixture } from '../fixtures/events.js';
import { firewallsFixture } from '../fixtures/firewalls.js';
import { appsFixture } from '../fixtures/apps.js';
import { defenderFixture } from '../fixtures/defender.js';
import { officeFixture } from '../fixtures/office.js';

const BASE_URL = 'https://api-us.rocketcyber.com/v3';

export const handlers = [
  // Account
  http.get(`${BASE_URL}/account`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return HttpResponse.json(accountFixture);
  }),

  // Agents
  http.get(`${BASE_URL}/agents`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(url.searchParams.get('pageSize') ?? '50', 10);
    const start = (page - 1) * pageSize;
    const data = agentsFixture.slice(start, start + pageSize);
    return HttpResponse.json({
      data,
      totalCount: agentsFixture.length,
      currentPage: page,
      totalPages: Math.ceil(agentsFixture.length / pageSize),
    });
  }),

  // Incidents
  http.get(`${BASE_URL}/incidents`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(url.searchParams.get('pageSize') ?? '50', 10);
    const start = (page - 1) * pageSize;
    const data = incidentsFixture.slice(start, start + pageSize);
    return HttpResponse.json({
      data,
      totalCount: incidentsFixture.length,
      currentPage: page,
      totalPages: Math.ceil(incidentsFixture.length / pageSize),
    });
  }),

  // Events
  http.get(`${BASE_URL}/events/summary`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return HttpResponse.json(eventSummaryFixture);
  }),

  http.get(`${BASE_URL}/events`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(url.searchParams.get('pageSize') ?? '50', 10);
    const start = (page - 1) * pageSize;
    const data = eventsFixture.slice(start, start + pageSize);
    return HttpResponse.json({
      data,
      totalCount: eventsFixture.length,
      currentPage: page,
      totalPages: Math.ceil(eventsFixture.length / pageSize),
    });
  }),

  // Firewalls
  http.get(`${BASE_URL}/firewalls`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(url.searchParams.get('pageSize') ?? '50', 10);
    const start = (page - 1) * pageSize;
    const data = firewallsFixture.slice(start, start + pageSize);
    return HttpResponse.json({
      data,
      totalCount: firewallsFixture.length,
      currentPage: page,
      totalPages: Math.ceil(firewallsFixture.length / pageSize),
    });
  }),

  // Apps
  http.get(`${BASE_URL}/apps`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page') ?? '1', 10);
    const pageSize = parseInt(url.searchParams.get('pageSize') ?? '50', 10);
    const start = (page - 1) * pageSize;
    const data = appsFixture.slice(start, start + pageSize);
    return HttpResponse.json({
      data,
      totalCount: appsFixture.length,
      currentPage: page,
      totalPages: Math.ceil(appsFixture.length / pageSize),
    });
  }),

  // Defender
  http.get(`${BASE_URL}/defender`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return HttpResponse.json(defenderFixture);
  }),

  // Office
  http.get(`${BASE_URL}/office`, ({ request }) => {
    const auth = request.headers.get('Authorization');
    if (!auth || auth !== 'Bearer test-api-key') {
      return HttpResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    return HttpResponse.json(officeFixture);
  }),
];
