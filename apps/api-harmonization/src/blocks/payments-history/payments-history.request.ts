import { CMS } from '@o2s/framework/modules';

export class GetPaymentsHistoryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    limit!: number;
    offset!: number;
    dateFrom?: Date;
    dateTo?: Date;
}

export class GetArticleListComponentBody {
    query?: string;
    category?: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}
