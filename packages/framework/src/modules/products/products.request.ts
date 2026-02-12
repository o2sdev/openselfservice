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
    specFieldsMapping?: Record<string, string>;
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
