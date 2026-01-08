import { CMS } from '@o2s/framework/modules';

export class GetRecommendedProductsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    excludeProductId?: string;
    limit?: number;
}
