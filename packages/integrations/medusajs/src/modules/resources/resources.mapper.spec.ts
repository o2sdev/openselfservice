import { describe, expect, it } from 'vitest';

import { Products } from '@o2s/framework/modules';

import { mapAsset, mapAssets, mapService, mapServices } from './resources.mapper';
import type { Asset, AssetsResponse, ServiceInstance, ServiceInstancesResponse } from './response.types';

const defaultCurrency = 'EUR';

const minimalProduct: Products.Model.Product = {
    id: 'prod_1',
    sku: 'SKU1',
    name: 'Product',
    description: '',
    shortDescription: '',
    variantId: 'var_1',
    image: undefined,
    price: { value: 999, currency: 'EUR' },
    link: '',
    type: 'PHYSICAL',
    category: '',
    tags: [],
};

function minimalAsset(overrides: Record<string, unknown> = {}): Asset {
    return {
        id: 'asset_1',
        name: 'Model X',
        description: 'Desc',
        serial_number: 'SN1',
        end_of_warranty_date: '2025-12-31',
        address: null,
        product_variant: { product_id: 'prod_1' },
        thumbnail: '',
        service_item_id: '',
        created_at: '',
        updated_at: '',
        totals: { currency: 'eur', total_price: { value: 0, precision: 2 } },
        ...overrides,
    } as unknown as Asset;
}

function minimalServiceInstance(overrides: Record<string, unknown> = {}): ServiceInstance {
    return {
        id: 'svc_1',
        name: 'Service 1',
        start_date: '2024-01-01',
        end_date: '2024-12-31',
        purchase_date: '2024-01-01',
        payment_type: 'monthly',
        status: 'active',
        customer: { email: '' },
        assets: [],
        product_variant: { product_id: 'prod_1' },
        totals: { currency: 'eur', total_price: { value: 999, precision: 2 } },
        ...overrides,
    } as unknown as ServiceInstance;
}

describe('resources.mapper', () => {
    describe('mapAsset', () => {
        it('should map asset fields and product', () => {
            const asset = minimalAsset();
            const result = mapAsset(asset, minimalProduct);
            expect(result.id).toBe('asset_1');
            expect(result.model).toBe('Model X');
            expect(result.serialNo).toBe('SN1');
            expect(result.description).toBe('Desc');
            expect(result.product).toBe(minimalProduct);
            expect(result.endOfWarranty).toBe('2025-12-31');
        });

        it('should map address when present', () => {
            const asset = minimalAsset({
                address: {
                    country_code: 'PL',
                    province: 'Mazovia',
                    address_1: 'Street',
                    address_2: '1',
                    city: 'Warsaw',
                    postal_code: '00-001',
                    phone: '+48',
                },
            });
            const result = mapAsset(asset, minimalProduct);
            expect(result.address).toBeDefined();
            expect(result.address?.country).toBe('PL');
            expect(result.address?.city).toBe('Warsaw');
        });
    });

    describe('mapAssets', () => {
        it('should map assets when products match', () => {
            const data = {
                assets: [minimalAsset(), minimalAsset({ id: 'asset_2' })],
                count: 2,
                offset: 0,
                limit: 10,
            } as AssetsResponse;
            const products = [minimalProduct];
            const result = mapAssets(data, products);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(2);
        });

        it('should filter out assets without matching product', () => {
            const data = {
                assets: [
                    minimalAsset({ product_variant: { product_id: 'prod_1' } }),
                    minimalAsset({ id: 'asset_2', product_variant: { product_id: 'prod_2' } }),
                ],
                count: 2,
                offset: 0,
                limit: 10,
            } as AssetsResponse;
            const products = [minimalProduct];
            const result = mapAssets(data, products);
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.id).toBe('asset_1');
            expect(result.total).toBe(2);
        });
    });

    describe('mapService', () => {
        it('should map service with contract and product', () => {
            const service = minimalServiceInstance();
            const result = mapService(service, minimalProduct, defaultCurrency);
            expect(result.id).toBe('svc_1');
            expect(result.product).toBe(minimalProduct);
            expect(result.contract.status).toBe('ACTIVE');
            expect(result.contract.paymentPeriod).toBe('MONTHLY');
            expect(result.contract.price.value).toBe(999);
        });

        it('should map currency from totals', () => {
            const service = minimalServiceInstance({
                totals: { currency: 'pln', total_price: { value: 100, precision: 2 } },
            });
            const result = mapService(service, minimalProduct, defaultCurrency);
            expect(result.contract.price.currency).toBe('PLN');
        });
    });

    describe('mapServices', () => {
        it('should map services when products match', () => {
            const data = {
                serviceInstances: [minimalServiceInstance(), minimalServiceInstance({ id: 'svc_2' })],
                count: 2,
                offset: 0,
                limit: 10,
            } as ServiceInstancesResponse;
            const products = [minimalProduct];
            const result = mapServices(data, products, defaultCurrency);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(2);
        });

        it('should filter out services without matching product', () => {
            const data = {
                serviceInstances: [
                    minimalServiceInstance({ product_variant: { product_id: 'prod_1' } }),
                    minimalServiceInstance({ id: 'svc_2', product_variant: { product_id: 'prod_2' } }),
                ],
                count: 2,
                offset: 0,
                limit: 10,
            } as ServiceInstancesResponse;
            const products = [minimalProduct];
            const result = mapServices(data, products, defaultCurrency);
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(2);
        });
    });
});
