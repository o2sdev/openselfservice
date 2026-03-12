import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, Matches } from 'class-validator';

import type { VariantOptionGroupConfig } from '../cms/models/blocks/product-details.model';

import type { ProductReferenceType, ProductType } from './products.model';
import { PaginationQuery } from '@/utils/models/pagination';

/** Query params for fetching a paginated product list. */
export class GetProductListQuery extends PaginationQuery {
    /** Product type filter. */
    @ApiPropertyOptional({ description: 'Product type filter.' })
    type?: ProductType;
    /** Product category filter. */
    @ApiPropertyOptional({ description: 'Product category filter.' })
    category?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
    /** Sort expression from query string, e.g. `name_ASC`. */
    @ApiPropertyOptional({ description: 'Sort expression from query string, for example `name_ASC`.' })
    sort?: string;
    /** Optional base path override used by integration routing. */
    @ApiPropertyOptional({ description: 'Optional base path override used by integration routing.' })
    @IsOptional()
    @Matches(/^\/[a-z0-9\-/]*$/, { message: 'basePath must be a safe path (e.g. /products)' })
    basePath?: string;
}

/** Query params for fetching a single product. */
export class GetProductParams {
    /** Product identifier. */
    @ApiProperty({ description: 'Product identifier.' })
    id!: string;
    /** Optional variant identifier. */
    @ApiPropertyOptional({ description: 'Optional variant identifier.' })
    variantId?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
    /** Optional base path override used by integration routing. */
    @ApiPropertyOptional({ description: 'Optional base path override used by integration routing.' })
    @IsOptional()
    @Matches(/^\/[a-z0-9\-/]*$/, { message: 'basePath must be a safe path (e.g. /products)' })
    basePath?: string;
    /**
     * Configuration of variant option groups used for building option dropdowns.
     */
    @ApiPropertyOptional({ description: 'Configuration of variant option groups used by product details views.' })
    variantOptionGroups?: VariantOptionGroupConfig[];
}

/** Query params for fetching products related to a selected product/variant. */
export class GetRelatedProductListParams extends PaginationQuery {
    /** Relation type to resolve (spare part, replacement, compatible service). */
    @ApiProperty({ description: 'Relation type to resolve (spare part, replacement, compatible service).' })
    type!: ProductReferenceType;
    /** Source product identifier (bound from route :id). */
    @ApiProperty({ description: 'Source product identifier (bound from route `:id`).' })
    id!: string;
    /** Optional source product variant identifier (bound from route :variantId). */
    @ApiPropertyOptional({ description: 'Optional source product variant identifier (bound from route `:variantId`).' })
    variantId?: string;
    /** Optional locale passed via query string (kept as string). */
    @ApiPropertyOptional({ description: 'Optional locale code used to localize response values.' })
    locale?: string;
    /** Sort expression from query string, e.g. `createdAt_DESC`. */
    @ApiPropertyOptional({ description: 'Sort expression from query string, for example `createdAt_DESC`.' })
    sort?: string;
    /** Optional base path override used by integration routing. */
    @ApiPropertyOptional({ description: 'Optional base path override used by integration routing.' })
    @IsOptional()
    @Matches(/^\/[a-z0-9\-/]*$/, { message: 'basePath must be a safe path (e.g. /products)' })
    basePath?: string;
}
