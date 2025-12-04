import { CMS, Products } from '@o2s/framework/modules';

export class GetProductListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    limit?: number;
    offset?: number;
    type?: Products.Model.ProductType;
    category?: string;
    sort?: string;
}
