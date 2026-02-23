/**
 * Common types shared across RocketCyber resources
 */

export interface BaseListParams {
  /** Page number (1-indexed) */
  page?: number;
  /** Items per page (max 1000) */
  pageSize?: number;
  /** Sort field and direction (e.g., "hostname:asc") */
  sort?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}
