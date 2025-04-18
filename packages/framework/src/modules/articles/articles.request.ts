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
    title?: string;
    dateFrom?: Date;
    dateTo?: Date;
    locale!: string;
}

export class GetArticleListBody {
    query?: string;
    category?: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}
