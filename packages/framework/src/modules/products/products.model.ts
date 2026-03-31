import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { Media, Pagination, Price } from '@/utils/models';

/** Allowed product type values (OpenAPI + TS union). */
export const PRODUCT_TYPE_VALUES = ['PHYSICAL', 'VIRTUAL'] as const;
export type ProductType = (typeof PRODUCT_TYPE_VALUES)[number];

/** Allowed product reference relation types (OpenAPI + TS union). */
export const PRODUCT_REFERENCE_TYPE_VALUES = ['SPARE_PART', 'REPLACEMENT', 'COMPATIBLE_SERVICE'] as const;
export type ProductReferenceType = (typeof PRODUCT_REFERENCE_TYPE_VALUES)[number];

/** Product option group (e.g., color, size). */
export class ProductOptionGroup {
    @ApiProperty({ description: 'Option group identifier' })
    id!: string;

    @ApiProperty({ description: 'Option group display title' })
    title!: string;

    @ApiProperty({ description: 'Available values for this option group', type: [String] })
    values!: string[];
}

/** Product variant option. */
export class ProductVariantOption {
    @ApiProperty({ description: 'Variant identifier' })
    id!: string;

    @ApiProperty({ description: 'Variant display title' })
    title!: string;

    @ApiProperty({ description: 'URL-friendly variant slug' })
    slug!: string;

    @ApiPropertyOptional({ description: 'Link to variant page' })
    link?: string;

    @ApiPropertyOptional({
        description: 'Selected option values for this variant',
        type: 'object',
        additionalProperties: { type: 'string' },
    })
    options?: Record<string, string>;

    @ApiPropertyOptional({ description: 'Whether this variant is in stock' })
    inStock?: boolean;
}

/** Product tag with label and visual variant. */
export class ProductTag {
    @ApiProperty({ description: 'Tag display label' })
    label!: string;

    @ApiProperty({ description: 'Visual variant/style of the tag' })
    variant!: string;
}

/**
 * Raw product attributes collected from the underlying commerce system.
 * Keys follow the integration's field names (e.g. Medusa: "weight", "origin_country").
 * Presentation concerns (labels, grouping, "key specs" vs. table, etc.) are handled at the block level.
 */
export type ProductAttributes = Record<string, string | number>;

/** Product entity with pricing, media, variants and attributes. */
export class Product {
    @ApiProperty({ description: 'Unique product identifier' })
    id!: string;

    @ApiProperty({ description: 'Stock keeping unit' })
    sku!: string;

    @ApiProperty({ description: 'Product name' })
    name!: string;

    @ApiProperty({ description: 'Full product description' })
    description!: string;

    @ApiPropertyOptional({ description: 'Short product description' })
    shortDescription?: string;

    @ApiPropertyOptional({ description: 'Product subtitle' })
    subtitle?: string;

    @ApiPropertyOptional({ description: 'Selected variant identifier' })
    variantId?: string;

    @ApiPropertyOptional({ description: 'Main product image' })
    image?: Media.Media;

    @ApiPropertyOptional({ description: 'Additional product images', type: () => [Media.Media] })
    images?: Media.Media[];

    @ApiProperty({ description: 'Product price' })
    price!: Price.Price;

    @ApiProperty({ description: 'Product page URL' })
    link!: string;

    @ApiProperty({ description: 'Product type', enum: PRODUCT_TYPE_VALUES })
    type!: ProductType;

    @ApiProperty({ description: 'Product category' })
    category!: string;

    @ApiProperty({ description: 'Product tags', type: () => [ProductTag] })
    tags!: ProductTag[];

    @ApiPropertyOptional({
        description: 'Product attributes',
        type: 'object',
        additionalProperties: { oneOf: [{ type: 'string' }, { type: 'number' }] },
    })
    attributes?: ProductAttributes;

    @ApiPropertyOptional({ description: 'Product location/warehouse' })
    location?: string;

    @ApiPropertyOptional({ description: 'Available option groups', type: () => [ProductOptionGroup] })
    optionGroups?: ProductOptionGroup[];

    @ApiPropertyOptional({ description: 'Product variants', type: () => [ProductVariantOption] })
    variants?: ProductVariantOption[];
}

/** Paginated product list for OpenAPI schema. */
export class PaginatedProducts extends Pagination.Paginated<Product> {
    @ApiProperty({ description: 'Array of products', type: () => [Product] })
    declare data: Product[];

    @ApiProperty({ description: 'Total number of products matching the query' })
    declare total: number;
}

/** @deprecated Use PaginatedProducts class for OpenAPI compatibility. */
export type Products = Pagination.Paginated<Product>;
