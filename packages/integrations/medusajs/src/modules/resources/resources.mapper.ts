import { AddressDTO } from '@medusajs/types';

import { Models, Resources } from '@o2s/framework/modules';

import { Asset, AssetsResponse, ServiceInstance, ServiceInstancesResponse } from './response.types';

export const mapAsset = (asset: Asset): Resources.Model.Asset => {
    return {
        id: asset.id,
        __typename: 'Asset',
        billingAccountId: '',
        model: asset.name,
        serialNo: asset.serial_number,
        description: asset.description,
        productId: asset?.product_variant?.product_id || '',
        productVariantId: asset?.product_variant?.id || '',
        address: mapAddress(asset.address),
    };
};

export const mapAssets = (data: AssetsResponse): Resources.Model.Assets => {
    return {
        data: data?.assets.map((asset) => {
            return mapAsset(asset);
        }),
        total: data.count,
    };
};

export const mapServices = (data: ServiceInstancesResponse, defaultCurrency: string): Resources.Model.Services => {
    return {
        data: data?.serviceInstances.map((service) => {
            return mapService(service, defaultCurrency);
        }),
        total: data.count,
    };
};

export const mapService = (serviceInstance: ServiceInstance, defaultCurrency: string): Resources.Model.Service => {
    return {
        id: serviceInstance.id,
        __typename: 'Service',
        billingAccountId: '',
        productId: serviceInstance?.product_variant?.product_id || '',
        productVariantId: serviceInstance?.product_variant?.id || '',
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
                      return mapAsset(asset);
                  })
                : [],
    };
};

const mapAddress = (address: AddressDTO): Models.Address.Address | undefined => {
    if (!address) return undefined;
    return {
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
