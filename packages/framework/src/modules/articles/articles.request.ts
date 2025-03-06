import { PaginationQuery } from '@/utils/models/pagination';

export class GetArticleParams {
    id!: string;
}

export class GetArticleListQuery extends PaginationQuery {
    title?: string;
    dateFrom?: Date;
    dateTo?: Date;
}
