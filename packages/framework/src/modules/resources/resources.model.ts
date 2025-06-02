import { Pagination, Price } from '@/utils/models';
import { Address } from '@/utils/models/address';

import { Product } from '@/modules/products/products.model';

export type ProductType = 'PHYSICAL' | 'VIRTUAL';

export type AssetStatus = 'ACTIVE' | 'INACTIVE' | 'RETIRED';

export type ContractStatus = 'ACTIVE' | 'EXPIRED' | 'INACTIVE';

export type PaymentPeriod = 'ONE_TIME' | 'MONTHLY' | 'YEARLY' | 'WEEKLY';

export class Contract {
    id!: string;
    type?: string;
    status!: ContractStatus;
    startDate!: string;
    endDate!: string;
    paymentPeriod?: PaymentPeriod;
    price!: Price.Price;
}

export class Resource {
    id!: string;
    productId!: string;
    productVariantId?: string;
    billingAccountId!: string;
}

export class Service extends Resource {
    __typename!: 'Service';
    contract!: Contract;
    assets!: Asset[];
}

export class Asset extends Resource {
    __typename!: 'Asset';
    manufacturer?: string;
    model!: string;
    serialNo!: string;
    description!: string;
    status?: AssetStatus;
    address?: Address;
    compatibleServices?: Product[];
}

export type Resources = Pagination.Paginated<Resource>;
export type Services = Pagination.Paginated<Service>;
export type Assets = Pagination.Paginated<Asset>;
