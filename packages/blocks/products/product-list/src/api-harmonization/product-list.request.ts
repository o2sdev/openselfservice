import { CMS, Products } from '@o2s/framework/modules';

export class GetProductListBlockQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Products.Request.GetProductListQuery
{
    id!: string;
    offset?: number;
    limit?: number;
    /**
     * 1-based page from the URL, resolved into an `offset` with the page size the block actually uses.
     * Ignored when `offset` is given. Lets a server render honour `?page=2` without knowing the CMS
     * pagination config up front.
     */
    page?: number;
    type?: Products.Model.ProductType;
    category?: string;
    sort?: string;
}
