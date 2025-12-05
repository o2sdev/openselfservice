import { CMS, Products } from '@o2s/framework/modules';

export class GetProductListBlockQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Products.Request.GetProductListQuery
{
    id!: string;
    offset?: number;
    limit?: number;
    type?: Products.Model.ProductType;
    category?: string;
    sort?: string;
}
