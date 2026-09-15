import { CMS } from '@o2s/framework/modules';

export class GetPaymentsHistoryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
    limit!: number;
    offset!: number;
    dateFrom?: string;
    dateTo?: string;
}

export class GetArticleListComponentBody {
    query?: string;
    category?: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}
