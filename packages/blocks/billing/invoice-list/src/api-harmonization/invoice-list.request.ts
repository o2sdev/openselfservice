import { CMS } from '@o2s/framework/modules';

export class GetInvoiceListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
    /**
     * 1-based page from the URL, resolved into an `offset` with the page size the block actually uses.
     * Ignored when `offset` is given. Lets a server render honour a `page` param without knowing the
     * CMS pagination config up front.
     */
    page?: number;
    dateFrom?: string;
    dateTo?: string;
    search?: string;
}
