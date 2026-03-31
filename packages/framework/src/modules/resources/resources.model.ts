import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { PaginatedProducts, Product } from '../products/products.model';
import type { ProductType } from '../products/products.model';

import { Pagination, Price } from '@/utils/models';
import { Address } from '@/utils/models/address';

export type { ProductType };

/** Allowed asset lifecycle status values (OpenAPI + TS union). */
export const ASSET_STATUS_VALUES = ['ACTIVE', 'INACTIVE', 'RETIRED'] as const;
export type AssetStatus = (typeof ASSET_STATUS_VALUES)[number];

/** Allowed contract lifecycle status values (OpenAPI + TS union). */
export const CONTRACT_STATUS_VALUES = ['ACTIVE', 'EXPIRED', 'INACTIVE'] as const;
export type ContractStatus = (typeof CONTRACT_STATUS_VALUES)[number];

/** Allowed billing recurrence values (OpenAPI + TS union). */
export const PAYMENT_PERIOD_VALUES = ['ONE_TIME', 'MONTHLY', 'YEARLY', 'WEEKLY'] as const;
export type PaymentPeriod = (typeof PAYMENT_PERIOD_VALUES)[number];

/** Resource subtype filter (OpenAPI + TS union). */
export const RESOURCE_TYPE_VALUES = ['Asset', 'Service'] as const;
export type ResourceType = (typeof RESOURCE_TYPE_VALUES)[number];

/** Contract attached to a service resource. */
export class Contract {
    @ApiProperty({ description: 'Unique contract identifier' })
    id!: string;

    @ApiPropertyOptional({ description: 'Contract type' })
    type?: string;

    @ApiProperty({ description: 'Contract lifecycle status', enum: CONTRACT_STATUS_VALUES })
    status!: ContractStatus;

    @ApiProperty({ description: 'Contract start date in ISO 8601 format' })
    startDate!: string;

    @ApiProperty({ description: 'Contract end date in ISO 8601 format' })
    endDate!: string;

    @ApiPropertyOptional({ description: 'Billing recurrence period', enum: PAYMENT_PERIOD_VALUES })
    paymentPeriod?: PaymentPeriod;

    @ApiProperty({ description: 'Contract price' })
    price!: Price.Price;
}

/** Base resource shared by services and assets. */
export class Resource {
    @ApiProperty({ description: 'Unique resource identifier' })
    id!: string;

    @ApiProperty({ description: 'Associated product details', type: () => Product })
    product!: Product;

    @ApiProperty({ description: 'Billing account identifier' })
    billingAccountId!: string;
}

/** Service resource with contract and related assets. */
export class Service extends Resource {
    @ApiProperty({ description: 'Resource discriminator', enum: ['Service'] })
    __typename!: 'Service';

    @ApiProperty({ description: 'Service contract details', type: () => Contract })
    contract!: Contract;

    @ApiProperty({ description: 'Assets linked to this service', type: () => [Asset] })
    assets!: Asset[];
}

/** Asset resource with manufacturer/model and compatibility info. */
export class Asset extends Resource {
    @ApiProperty({ description: 'Resource discriminator', enum: ['Asset'] })
    __typename!: 'Asset';

    @ApiPropertyOptional({ description: 'Asset manufacturer' })
    manufacturer?: string;

    @ApiProperty({ description: 'Asset model name' })
    model!: string;

    @ApiProperty({ description: 'Asset serial number' })
    serialNo!: string;

    @ApiProperty({ description: 'Asset description' })
    description!: string;

    @ApiPropertyOptional({ description: 'Asset lifecycle status', enum: ASSET_STATUS_VALUES })
    status?: AssetStatus;

    @ApiPropertyOptional({ description: 'Asset location address' })
    address?: Address;

    @ApiPropertyOptional({ description: 'Compatible services for this asset', type: () => PaginatedProducts })
    compatibleServices?: PaginatedProducts;

    @ApiPropertyOptional({ description: 'Warranty end date in ISO 8601 format' })
    endOfWarranty?: string;
}

/** Paginated service list for OpenAPI schema. */
export class PaginatedServices extends Pagination.Paginated<Service> {
    @ApiProperty({ description: 'Array of services', type: () => [Service] })
    declare data: Service[];

    @ApiProperty({ description: 'Total number of services' })
    declare total: number;
}

/** Paginated asset list for OpenAPI schema. */
export class PaginatedAssets extends Pagination.Paginated<Asset> {
    @ApiProperty({ description: 'Array of assets', type: () => [Asset] })
    declare data: Asset[];

    @ApiProperty({ description: 'Total number of assets' })
    declare total: number;
}

/** @deprecated Use PaginatedServices/PaginatedAssets classes for OpenAPI compatibility. */
export type Resources = Pagination.Paginated<Resource>;
/** @deprecated Use PaginatedServices class for OpenAPI compatibility. */
export type Services = Pagination.Paginated<Service>;
/** @deprecated Use PaginatedAssets class for OpenAPI compatibility. */
export type Assets = Pagination.Paginated<Asset>;
