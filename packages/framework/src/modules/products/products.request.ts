import type { SpecFieldConfig, VariantOptionGroupConfig } from '../cms/models/blocks/product-details.model';

import { ProductReferenceType, ProductType } from './products.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetProductListQuery extends PaginationQuery {
    type?: ProductType;
    category?: string;
    locale?: string;
    sort?: string;
    basePath?: string;
}

export class GetProductParams {
    id!: string;
    variantId?: string;
    locale?: string;
    basePath?: string;
    specFieldsMapping?: Record<string, SpecFieldConfig>;
    /**
     * Configuration of variant option groups used for building option dropdowns.
     */
    variantOptionGroups?: VariantOptionGroupConfig[];
}

export class GetRelatedProductListParams {
    type!: ProductReferenceType;
    productId!: string;
    productVariantId?: string;
    locale?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    basePath?: string;
}
