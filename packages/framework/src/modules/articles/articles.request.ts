import { PaginationQuery } from '@/utils/models/pagination';

export class GetCategoryParams {
    id!: string;
    locale!: string;
}

export class GetCategoryListQuery extends PaginationQuery {
    locale!: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}

export class GetArticleParams {
    slug!: string;
    locale!: string;
}

export class GetArticleListQuery extends PaginationQuery {
    locale!: string;
    ids?: string[];
    category?: string;
    dateFrom?: Date;
    dateTo?: Date;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
}

export class SearchArticlesBody extends GetArticleListQuery {
    query?: string;
}
