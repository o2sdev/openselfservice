import { Products } from '@o2s/framework/modules';

import { Pagination, Price } from '@/utils/models';
import { Address } from '@/utils/models/address';

/** Product kind used by resource catalog models. */
export type ProductType = 'PHYSICAL' | 'VIRTUAL';

/** Asset lifecycle status. */
export type AssetStatus = 'ACTIVE' | 'INACTIVE' | 'RETIRED';

/** Service contract lifecycle status. */
export type ContractStatus = 'ACTIVE' | 'EXPIRED' | 'INACTIVE';

/** Billing/payment recurrence period for contracts. */
export type PaymentPeriod = 'ONE_TIME' | 'MONTHLY' | 'YEARLY' | 'WEEKLY';

/** Contract attached to a service resource. */
export class Contract {
    id!: string;
    type?: string;
    status!: ContractStatus;
    startDate!: string;
    endDate!: string;
    paymentPeriod?: PaymentPeriod;
    price!: Price.Price;
}

/** Base resource shared by services and assets. */
export class Resource {
    id!: string;
    product!: Products.Model.Product;
    billingAccountId!: string;
}

/** Service resource with contract and related assets. */
export class Service extends Resource {
    __typename!: 'Service';
    contract!: Contract;
    assets!: Asset[];
}

/** Asset resource with manufacturer/model and compatibility info. */
export class Asset extends Resource {
    __typename!: 'Asset';
    manufacturer?: string;
    model!: string;
    serialNo!: string;
    description!: string;
    status?: AssetStatus;
    address?: Address;
    compatibleServices?: Products.Model.Products;
    endOfWarranty?: string;
}

/** Paginated resource list. */
export type Resources = Pagination.Paginated<Resource>;
/** Paginated service list. */
export type Services = Pagination.Paginated<Service>;
/** Paginated asset list. */
export type Assets = Pagination.Paginated<Asset>;
