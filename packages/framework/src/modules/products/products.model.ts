import { Media, Pagination, Price } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type ProductReferenceType = 'SPARE_PART' | 'REPLACEMENT' | 'COMPATIBLE_SERVICE';

export class Product {
    id!: string;
    sku!: string;
    name!: string;
    description!: string;
    shortDescription?: string;
    variantId?: string;
    image?: Media.Media;
    price!: Price.Price;
    link!: string;
    type!: ProductType;
    category!: string;
    tags!: {
        label: string;
        variant: string;
    }[];
}

export type Products = Pagination.Paginated<Product>;
