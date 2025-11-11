import { ProductAvailability, ProductReferenceType, ProductType } from './products.model';
import { PaginationQuery } from '@/utils/models/pagination';

export class GetProductListQuery extends PaginationQuery {
    type?: ProductType;
    category?: string;
    locale?: string;
    availability?: ProductAvailability | ProductAvailability[];
    tags?: string[];
    priceRange?: string;
    minPrice?: number;
    maxPrice?: number;
    sort?: string;
    search?: string;
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
