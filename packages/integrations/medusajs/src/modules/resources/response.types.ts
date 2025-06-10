import { AddressDTO, AdminProductVariant, HttpTypes } from '@medusajs/types';

import { Products } from '@o2s/framework/modules';

export type Asset = {
    id: string;
    name: string;
    description: string;
    thumbnail: string;
    serial_number: string;
    end_of_warranty_date: string;
    service_item_id: string;
    created_at: string;
    updated_at: string;
    address: AddressDTO;
    product_variant: HttpTypes.AdminProductVariant;
    product: Products.Model.Product;
    totals: Totals;
};

export type AssetsResponse = {
    assets: Asset[];
    count: number;
    offset: number;
    limit: number;
};

export type ServiceInstance = {
    id: string;
    name: string;
    start_date: string;
    end_date: string;
    purchase_date: string;
    payment_type: string;
    status: string;
    customer: {
        email: string;
    };
    assets: Asset[];
    product_variant: AdminProductVariant;
    product: Products.Model.Product;
    totals: Totals;
};

export type ServiceInstancesResponse = {
    serviceInstances: ServiceInstance[];
    count: number;
    offset: number;
    limit: number;
};

export type Totals = {
    currency: string;
    total_price: {
        value: number;
        precision: number;
    };
};

export type CompatibleServicesResponse = {
    compatibleServices: HttpTypes.AdminProductVariant[];
    count: number;
    offset: number;
    limit: number;
};

export type FeaturedServicesResponse = {
    featuredServices: HttpTypes.AdminProductVariant[];
    count: number;
    offset: number;
    limit: number;
};
