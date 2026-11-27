import { CMS } from '@o2s/framework/modules';

export class GetOrdersSummaryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
    dateFrom!: string;
    dateTo!: string;
    range!: 'day' | 'week' | 'month';
}
