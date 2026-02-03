import { UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Auth } from '@o2s/framework/modules';
import { Products } from '@o2s/framework/modules';

import { ResourcesService } from './resources.service';

const BASE_URL = 'https://api.medusa.test';
const DEFAULT_CURRENCY = 'EUR';

const minimalServiceInstance = {
    id: 'svc_1',
    name: 'Service 1',
    start_date: '2024-01-01',
    end_date: '2024-12-31',
    purchase_date: '2024-01-01',
    payment_type: 'monthly',
    status: 'active',
    customer: { email: 'c@test.com' },
    assets: [],
    product_variant: { id: 'var_1', product_id: 'prod_1' },
    totals: { currency: 'eur', total_price: { value: 999, precision: 2 } },
};

const minimalProduct = {
    id: 'prod_1',
    sku: 'SKU1',
    name: 'Product 1',
    description: '',
    shortDescription: '',
    variantId: 'var_1',
    image: undefined,
    price: { value: 999, currency: 'EUR' as const },
    link: '',
    type: 'PHYSICAL' as const,
    category: '',
    tags: [],
};

describe('ResourcesService', () => {
    let service: ResourcesService;
    let mockHttpClient: { get: ReturnType<typeof vi.fn> };
    let mockMedusaJsService: {
        getSdk: ReturnType<typeof vi.fn>;
        getBaseUrl: ReturnType<typeof vi.fn>;
        getMedusaAdminApiHeaders: ReturnType<typeof vi.fn>;
    };
    let mockAuthService: { getCustomerId: ReturnType<typeof vi.fn> };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };
    let mockProductService: { getProduct: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockHttpClient = { get: vi.fn() };
        mockMedusaJsService = {
            getSdk: vi.fn(() => ({})),
            getBaseUrl: vi.fn(() => BASE_URL),
            getMedusaAdminApiHeaders: vi.fn(() => ({ Authorization: 'Basic xxx' })),
        };
        mockAuthService = { getCustomerId: vi.fn() };
        mockConfig = {
            get: vi.fn((key: string) => (key === 'DEFAULT_CURRENCY' ? DEFAULT_CURRENCY : '')),
        };
        mockLogger = { debug: vi.fn() };
        mockProductService = { getProduct: vi.fn().mockReturnValue(of(minimalProduct)) };

        service = new ResourcesService(
            mockHttpClient as unknown as import('@nestjs/axios').HttpService,
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
            mockAuthService as unknown as Auth.Service,
            mockConfig as unknown as ConfigService,
            mockProductService as unknown as Products.Service,
        );
    });

    describe('purchaseOrActivateResource', () => {
        it('should throw Method not implemented', () => {
            expect(() => service.purchaseOrActivateResource({ id: 'x' })).toThrow('Method not implemented');
        });
    });

    describe('purchaseOrActivateService', () => {
        it('should throw Method not implemented', () => {
            expect(() => service.purchaseOrActivateService({ id: 'x' })).toThrow('Method not implemented.');
        });
    });

    describe('getServiceList', () => {
        it('should throw UnauthorizedException when getCustomerId returns undefined', () => {
            mockAuthService.getCustomerId.mockReturnValue(undefined);
            expect(() => service.getServiceList({ limit: 10, offset: 0, locale: 'en' }, 'Bearer token')).toThrow(
                UnauthorizedException,
            );
            expect(mockLogger.debug).toHaveBeenCalledWith('Customer ID not found in authorization token');
        });

        it('should call httpClient.get and productService.getProduct and return mapped services', async () => {
            mockAuthService.getCustomerId.mockReturnValue('cust_1');
            mockHttpClient.get.mockReturnValue(
                of({
                    data: {
                        serviceInstances: [minimalServiceInstance],
                        count: 1,
                        offset: 0,
                        limit: 10,
                    },
                }),
            );

            const result = await firstValueFrom(
                service.getServiceList({ limit: 10, offset: 0, locale: 'en' }, 'Bearer token'),
            );

            expect(mockHttpClient.get).toHaveBeenCalledWith(
                `${BASE_URL}/admin/service-instances`,
                expect.objectContaining({
                    params: { customerId: 'cust_1', limit: 10, offset: 0 },
                }),
            );
            expect(mockProductService.getProduct).toHaveBeenCalledWith({
                id: 'prod_1',
                variantId: 'var_1',
                locale: 'en',
            });
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.id).toBe('svc_1');
        });
    });

    describe('getService', () => {
        it('should call httpClient.get and productService.getProduct and return mapped service', async () => {
            mockHttpClient.get.mockReturnValue(of({ data: { serviceInstance: minimalServiceInstance } }));

            const result = await firstValueFrom(service.getService({ id: 'svc_1', locale: 'en' }));

            expect(mockHttpClient.get).toHaveBeenCalledWith(
                `${BASE_URL}/admin/service-instances/svc_1`,
                expect.any(Object),
            );
            expect(mockProductService.getProduct).toHaveBeenCalledWith({
                id: 'prod_1',
                variantId: 'var_1',
                locale: 'en',
            });
            expect(result.id).toBe('svc_1');
        });

        it('should throw when serviceInstance has no product_variant.product_id', async () => {
            const instanceWithoutProduct = {
                ...minimalServiceInstance,
                product_variant: { id: 'var_1', product_id: undefined },
            };
            mockHttpClient.get.mockReturnValue(of({ data: { serviceInstance: instanceWithoutProduct } }));

            await expect(firstValueFrom(service.getService({ id: 'svc_1', locale: 'en' }))).rejects.toThrow(
                'Product ID not found',
            );
        });
    });
});
