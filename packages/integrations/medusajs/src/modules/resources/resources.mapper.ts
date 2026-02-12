import { AddressDTO } from '@medusajs/types';

import { Models, Products, Resources } from '@o2s/framework/modules';

import { Asset, AssetsResponse, ServiceInstance, ServiceInstancesResponse } from './response.types';

export const mapAsset = (asset: Asset, product: Products.Model.Product): Resources.Model.Asset => {
    return {
        id: asset.id,
        __typename: 'Asset',
        billingAccountId: '',
        model: asset.name,
        serialNo: asset.serial_number,
        description: asset.description,
        product: product,
        address: mapAddress(asset.address),
        endOfWarranty: asset?.end_of_warranty_date,
    };
};

export const mapAssets = (data: AssetsResponse, products: Products.Model.Product[]): Resources.Model.Assets => {
    return {
        data: data?.assets
            .map((asset) => {
                const product = products.find((p) => p.id === asset.product_variant.product_id);
                if (!product) {
                    return undefined;
                }
                return mapAsset(asset, product);
            })
            .filter((asset) => asset !== undefined),
        total: data.count,
    };
};

export const mapServices = (
    data: ServiceInstancesResponse,
    products: Products.Model.Product[],
    defaultCurrency: string,
): Resources.Model.Services => {
    const services = data?.serviceInstances
        .map((service) => {
            const product = products.find((p) => p.id === service.product_variant.product_id);
            if (!product) {
                return undefined;
            }
            return mapService(service, product, defaultCurrency);
        })
        .filter((service) => service !== undefined);

    return {
        data: services,
        total: data?.count ?? services.length,
    };
};

export const mapService = (
    serviceInstance: ServiceInstance,
    product: Products.Model.Product,
    defaultCurrency: string,
): Resources.Model.Service => {
    return {
        id: serviceInstance.id,
        __typename: 'Service',
        billingAccountId: '',
        product: product,
        contract: {
            id: serviceInstance.id,
            type: '',
            status: serviceInstance?.status as Resources.Model.ContractStatus,
            startDate: serviceInstance.start_date,
            endDate: serviceInstance?.end_date,
            paymentPeriod: serviceInstance.payment_type as Resources.Model.PaymentPeriod,
            price: {
                value: serviceInstance?.totals?.total_price?.value ?? 0,
                currency: mapCurrency(serviceInstance?.totals?.currency) || defaultCurrency,
            },
        },
        assets:
            serviceInstance?.assets.length > 0
                ? serviceInstance.assets.map((asset) => {
                      return mapAsset(asset, {} as Products.Model.Product);
                  })
                : [],
    };
};

const mapAddress = (address: AddressDTO): Models.Address.Address | undefined => {
    if (!address) return undefined;
    return {
        firstName: (address as unknown as { first_name?: string }).first_name,
        lastName: (address as unknown as { last_name?: string }).last_name,
        country: address.country_code || '',
        district: address.province || '',
        region: address.province || '',
        streetName: address.address_1 || '',
        streetNumber: address.address_2 || '',
        city: address.city || '',
        postalCode: address.postal_code || '',
        phone: address.phone || '',
    };
};

const mapCurrency = (currency: string): Models.Price.Currency => {
    switch (currency) {
        case 'pln':
            return 'PLN';
        case 'eur':
            return 'EUR';
        case 'usd':
            return 'USD';
        default:
            return currency as Models.Price.Currency;
    }
};
