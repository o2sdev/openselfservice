import { PaginationQuery } from '@/utils/models/pagination';

/** Parameters for fetching a single category: id, locale. */
export class GetCategoryParams {
    id!: string;
    locale!: string;
}

/** Query for category list: locale, pagination (PaginationQuery), optional sort (field, order). */
export class GetCategoryListQuery extends PaginationQuery {
    locale!: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}

/** Parameters for fetching a single article: slug, locale. */
export class GetArticleParams {
    slug!: string;
    locale!: string;
}

/** Query for article list: locale, pagination, optional ids, category, dateFrom, dateTo, sortBy, sortOrder. */
export class GetArticleListQuery extends PaginationQuery {
    locale!: string;
    ids?: string[];
    category?: string;
    dateFrom?: Date;
    dateTo?: Date;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

/** Search query: extends GetArticleListQuery with optional search phrase `query`. */
export class SearchArticlesBody extends GetArticleListQuery {
    query?: string;
}
