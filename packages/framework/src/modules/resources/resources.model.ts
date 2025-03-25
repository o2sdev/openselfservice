import { Pagination } from '@/utils/models';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type AssetStatus = 'ACTIVE' | 'INACTIVE' | 'RETIRED';

export type ContractStatus = 'ACTIVE' | 'EXPIRED' | 'INACTIVE';

export type PaymentPeriod = 'ONE_TIME' | 'MONTHLY' | 'YEARLY';

export class Contract {
    id!: string;
    type!: string;
    status!: ContractStatus;
    startDate!: string;
    endDate!: string;
    paymentPeriod?: PaymentPeriod;
}

export class Resource {
    id!: string;
    productId!: string;
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
export type Services = Pagination.Paginated<Service>;
export type Assets = Pagination.Paginated<Asset>;
