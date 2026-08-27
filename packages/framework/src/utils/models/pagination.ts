export class PaginationQuery {
    offset?: number;
    limit?: number;
}

/**
 * Pagination as a URL can carry it: an explicit `offset` window, or the 1-based `page` behind it.
 *
 * Kept apart from `PaginationQuery`, which the domain modules extend: `page` is resolved before their
 * queries are built (by `Utils.Pagination.resolvePagination` in `@o2s/utils.api-harmonization`), so
 * advertising it there would promise integrations something they never receive.
 */
export class PaginatedQuery extends PaginationQuery {
    page?: number;
}

export class Paginated<T> {
    data!: T[];
    total!: number;
}

export class Pagination {
    limit!: number;
    legend!: string;
    prev!: string;
    next!: string;
    selectPage!: string;
}
