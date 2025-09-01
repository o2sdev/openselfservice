import { CMS } from '@o2s/framework/modules';

export class GetOrdersSummaryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    dateFrom!: string;
    dateTo!: string;
    range!: 'day' | 'week' | 'month';
}
