import { PaginationQuery } from '@/utils/models/pagination';

export class GetArticleParams {
    id!: string;
    locale?: string;
}

export class GetArticleListQuery extends PaginationQuery {
    title?: string;
    dateFrom?: Date;
    dateTo?: Date;
    locale?: string;
}

export class GetArticleListComponentBody {
    query?: string;
    category?: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}
