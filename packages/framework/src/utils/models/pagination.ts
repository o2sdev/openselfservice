export class PaginationQuery {
    offset?: number;
    limit?: number;
}

/**
 * Pagination as a URL can carry it: an explicit `offset` window, or the 1-based `page` behind it.
 *
 * Kept apart from `PaginationQuery`, which the domain modules extend: `page` is resolved before their
 * queries are built, so advertising it there would promise integrations something they never receive.
 */
export class PaginatedQuery extends PaginationQuery {
    page?: number;
}

export interface ResolvePaginationOptions {
    /** Page size from the block's CMS config, when it has one. */
    cmsLimit?: number;
    /** Page size to use when neither the query nor the CMS config names one. */
    defaultLimit: number;
}

/** A page size only counts as one when it is a whole number of rows above zero. */
const toLimit = (value: number | undefined): number | undefined => {
    const limit = Number(value);

    return Number.isSafeInteger(limit) && limit > 0 ? limit : undefined;
};

/**
 * Resolves the window a block should fetch: the page size it renders with, and the offset to start at.
 *
 * Turning a `page` into an `offset` needs that page size, which is why this cannot happen in the
 * caller of an API — only the API knows the block's CMS config. Values come from a query string, so
 * they arrive as strings or as nonsense:
 *
 * - a `limit` counts only as a whole number of rows above zero, so a negative or fractional one falls
 *   back instead of reaching a backend that cannot use it;
 * - an `offset` wins whenever it is supplied, `0` included, since a caller asking for the first page by
 *   offset means it and a `page` further down the query string must not override it;
 * - a `page` resolves only from a whole number of pages, so a fraction or `Infinity` cannot travel on
 *   as an offset no backend can use;
 * - anything unusable is read as the first page.
 */
export const resolvePagination = (
    query: PaginatedQuery,
    { cmsLimit, defaultLimit }: ResolvePaginationOptions,
): { limit: number; offset: number } => {
    const limit = toLimit(query.limit) ?? toLimit(cmsLimit) ?? defaultLimit;

    const offset = Number(query.offset);
    const hasOffset = query.offset !== undefined && String(query.offset).trim() !== '';

    if (hasOffset && Number.isFinite(offset) && offset >= 0) {
        return { limit, offset };
    }

    const page = Number(query.page);

    return { limit, offset: Number.isSafeInteger(page) && page > 1 ? (page - 1) * limit : 0 };
};

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
