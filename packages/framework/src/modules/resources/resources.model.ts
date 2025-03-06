import { Pagination } from '@/utils/models';

export enum ProductType {
    PHYSICAL,
    VIRTUAL,
}

export enum AssetStatus {
    ACTIVE,
    INACTIVE,
    RETIRED,
}

export enum ContractStatus {
    ACTIVE,
    EXPIRED,
    INACTIVE,
}

export class Product {
    id!: string;
    name!: string;
    description!: string;
    url!: string;
    type!: ProductType;
    category!: string;
}

export class Contract {
    id!: string;
    type!: string;
    status!: ContractStatus;
    startDate!: string;
    endDate!: string;
}

export class Resource {
    id!: string;
    product!: Product;
    billingAccountId!: string;
}

export class Service extends Resource {
    __typename!: 'Service';
    contract!: Contract;
}

export class Asset extends Resource {
    __typename!: 'Asset';
    manufacturer!: string;
    model!: string;
    serialNo!: string;
    description!: string;
    status!: AssetStatus;
}

export type Resources = Pagination.Paginated<Resource>;
