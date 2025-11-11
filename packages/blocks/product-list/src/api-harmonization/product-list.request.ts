import { CMS, Products } from '@o2s/framework/modules';

export class GetProductListBlockQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Products.Request.GetProductListQuery
{
    id!: string;
    type?: Products.Model.ProductType;
    category?: string;
    availability?: Products.Model.ProductAvailability | Products.Model.ProductAvailability[];
    tags?: string[];
    priceRange?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
    search?: string;
    limit?: number;
    offset?: number;
    locale?: string;
}
