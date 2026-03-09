import { IsOptional, Matches } from 'class-validator';

import type { VariantOptionGroupConfig } from '../cms/models/blocks/product-details.model';

import { ProductReferenceType, ProductType } from './products.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a paginated product list. */
export class GetProductListQuery extends PaginationQuery {
    /** Product type filter. */
    type?: ProductType;
    /** Product category filter. */
    category?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
    /** Sort expression from query string, e.g. `name_ASC`. */
    sort?: string;
    /** Optional base path override used by integration routing. */
    @IsOptional()
    @Matches(/^\/[a-z0-9\-/]*$/, { message: 'basePath must be a safe path (e.g. /products)' })
    basePath?: string;
}

/** Query params for fetching a single product. */
export class GetProductParams {
    /** Product identifier. */
    id!: string;
    /** Optional variant identifier. */
    variantId?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
    /** Optional base path override used by integration routing. */
    @IsOptional()
    @Matches(/^\/[a-z0-9\-/]*$/, { message: 'basePath must be a safe path (e.g. /products)' })
    basePath?: string;
    /**
     * Configuration of variant option groups used for building option dropdowns.
     */
    variantOptionGroups?: VariantOptionGroupConfig[];
}

/** Query params for fetching products related to a selected product/variant. */
export class GetRelatedProductListParams extends PaginationQuery {
    /** Relation type to resolve (spare part, replacement, compatible service). */
    type!: ProductReferenceType;
    /** Source product identifier. */
    productId!: string;
    /** Optional source product variant identifier. */
    productVariantId?: string;
    /** Optional locale passed via query string (kept as string). */
    locale?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    sort?: string;
    /** Optional base path override used by integration routing. */
    @IsOptional()
    @Matches(/^\/[a-z0-9\-/]*$/, { message: 'basePath must be a safe path (e.g. /products)' })
    basePath?: string;
}
