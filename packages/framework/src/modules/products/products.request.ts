import { PaginationQuery } from '../../utils/models/pagination';

import { ProductReferenceType, ProductType } from './products.model';

export class GetProductListQuery extends PaginationQuery {
    type?: ProductType;
    category?: string;
    locale?: string;
}

export class GetProductParams {
    id!: string;
    variantId?: string;
    locale?: string;
}

export class GetRelatedProductListParams {
    type!: ProductReferenceType;
    productId!: string;
    productVariantId?: string;
    locale?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
