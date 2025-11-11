import { Media, Pagination, Price } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type ProductReferenceType = 'SPARE_PART' | 'REPLACEMENT' | 'COMPATIBLE_SERVICE';

export type ProductAvailability = 'IN_STOCK' | 'LOW_STOCK' | 'OUT_OF_STOCK' | 'PREORDER';

export type ProductRating = {
    value: number;
    max?: number;
    count?: number;
};

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
    availability?: ProductAvailability;
    stock?: number;
    rating?: ProductRating;
    tags!: {
        label: string;
        variant: string;
    }[];
}

export type Products = Pagination.Paginated<Product>;
