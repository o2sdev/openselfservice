import { Media, Pagination, Price } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type ProductReferenceType = 'SPARE_PART' | 'REPLACEMENT' | 'COMPATIBLE_SERVICE';

export type ProductOptionGroup = {
    id: string;
    title: string;
    values: string[];
};

export type ProductVariantOption = {
    id: string;
    title: string;
    slug: string;
    link?: string;
    options?: Record<string, string>;
};

/**
 * Raw product attributes collected from the underlying commerce system.
 * Keys follow the integration's field names (e.g. Medusa: "weight", "origin_country").
 * Presentation concerns (labels, grouping, "key specs" vs. table, etc.) are handled at the block level.
 */
export type ProductAttributes = Record<string, string | number>;

export class Product {
    id!: string;
    sku!: string;
    name!: string;
    description!: string;
    shortDescription?: string;
    subtitle?: string;
    variantId?: string;
    image?: Media.Media;
    images?: Media.Media[];
    price!: Price.Price;
    link!: string;
    type!: ProductType;
    category!: string;
    tags!: {
        label: string;
        variant: string;
    }[];
    attributes?: ProductAttributes;
    location?: string;
    optionGroups?: ProductOptionGroup[];
    variants?: ProductVariantOption[];
}

export type Products = Pagination.Paginated<Product>;
