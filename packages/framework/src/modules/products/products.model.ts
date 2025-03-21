import { Currency, Pagination } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type Money = {
    value: number;
    currency: Currency.Currency;
};

export class Product {
    id!: string;
    name!: string;
    description!: string;
    shortDescription!: string;
    image!: string;
    price!: Money;
    link!: string;
    type!: ProductType;
    category!: string;
}

export type Products = Pagination.Paginated<Product>;
