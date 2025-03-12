import { CMS } from '@o2s/framework/modules';

export class GetPaymentsHistoryComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    limit!: number;
    offset!: number;
    dateFrom?: Date;
    dateTo?: Date;
}
