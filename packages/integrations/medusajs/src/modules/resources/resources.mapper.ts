import { Products, Resources } from '@o2s/framework/modules';

import { Asset, AssetsResponse, ServiceInstance, ServiceInstancesResponse } from './response.types';
import { mapAddress } from '@/utils/address';
import { parseCurrency } from '@/utils/currency';

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
            status: mapContractStatus(serviceInstance?.status),
            startDate: serviceInstance.start_date,
            endDate: serviceInstance?.end_date,
            paymentPeriod: mapPaymentPeriod(serviceInstance.payment_type),
            price: {
                value: serviceInstance?.totals?.total_price?.value ?? 0,
                currency: parseCurrency(serviceInstance?.totals?.currency ?? defaultCurrency),
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

const VALID_CONTRACT_STATUSES: Resources.Model.ContractStatus[] = ['ACTIVE', 'EXPIRED', 'INACTIVE'];

function mapContractStatus(status: string | undefined): Resources.Model.ContractStatus {
    const normalized = (status ?? '').toUpperCase();
    if (VALID_CONTRACT_STATUSES.includes(normalized as Resources.Model.ContractStatus)) {
        return normalized as Resources.Model.ContractStatus;
    }
    return 'ACTIVE';
}

const VALID_PAYMENT_PERIODS: Resources.Model.PaymentPeriod[] = ['ONE_TIME', 'MONTHLY', 'YEARLY', 'WEEKLY'];

function mapPaymentPeriod(paymentType: string | undefined): Resources.Model.PaymentPeriod {
    const normalized = (paymentType ?? '').toUpperCase().replace(/-/g, '_');
    if (VALID_PAYMENT_PERIODS.includes(normalized as Resources.Model.PaymentPeriod)) {
        return normalized as Resources.Model.PaymentPeriod;
    }
    return 'ONE_TIME';
}
