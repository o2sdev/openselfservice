import { Media, Pagination, Price } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type ProductReferenceType = 'SPARE_PART' | 'REPLACEMENT' | 'COMPATIBLE_SERVICE';

export type KeySpecItem = {
    value?: string;
    icon?: string;
};

export type DetailedSpec = {
    label: string;
    value: string;
    category?: string;
};

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
    keySpecs?: KeySpecItem[];
    detailedSpecs?: DetailedSpec[];
    location?: string;
    optionGroups?: ProductOptionGroup[];
    variants?: ProductVariantOption[];
}

export type Products = Pagination.Paginated<Product>;
