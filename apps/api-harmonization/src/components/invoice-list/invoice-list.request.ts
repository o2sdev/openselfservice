import { CMS } from '@o2s/framework/modules';

export class GetInvoiceListComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
    dateFrom?: Date;
    dateTo?: Date;
}
