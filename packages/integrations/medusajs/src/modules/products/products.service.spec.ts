import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ProductsService } from './products.service';

const BASE_URL = 'https://api.medusa.test';
const DEFAULT_CURRENCY = 'EUR';

const mockProductListResponse = {
    products: [
        {
            id: 'prod_1',
            title: 'Product 1',
            description: 'Desc 1',
            thumbnail: null,
            categories: [],
            type: null,
            variants: [
                {
                    id: 'var_1',
                    sku: 'SKU1',
                    product_id: 'prod_1',
                    calculated_price: { calculated_amount: 1999, currency_code: 'eur' },
                },
            ],
        },
    ],
    count: 1,
};

const mockProductResponse = {
    product: {
        id: 'prod_1',
        title: 'Product 1',
        description: 'Desc',
        subtitle: 'Sub',
        thumbnail: null,
        type: null,
        categories: [],
        variants: [
            {
                id: 'var_1',
                sku: 'SKU1',
                product_id: 'prod_1',
                calculated_price: { calculated_amount: 1999, currency_code: 'eur' },
            },
        ],
    },
};

describe('ProductsService', () => {
    let service: ProductsService;
    let mockSdk: { store: { product: { list: ReturnType<typeof vi.fn>; retrieve: ReturnType<typeof vi.fn> } } };
    let mockHttpClient: { get: ReturnType<typeof vi.fn> };
    let mockMedusaJsService: {
        getSdk: ReturnType<typeof vi.fn>;
        getBaseUrl: ReturnType<typeof vi.fn>;
        getMedusaAdminApiHeaders: ReturnType<typeof vi.fn>;
    };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSdk = {
            store: {
                product: {
                    list: vi.fn(),
                    retrieve: vi.fn(),
                },
            },
        };
        mockHttpClient = { get: vi.fn() };
        mockMedusaJsService = {
            getSdk: vi.fn(() => mockSdk),
            getBaseUrl: vi.fn(() => BASE_URL),
            getMedusaAdminApiHeaders: vi.fn(() => ({
                'x-publishable-api-key': 'pk',
                Authorization: 'Basic xxx',
            })),
        };
        mockConfig = {
            get: vi.fn((key: string) => (key === 'DEFAULT_CURRENCY' ? DEFAULT_CURRENCY : '')),
        };
        mockLogger = { debug: vi.fn() };

        service = new ProductsService(
            mockConfig as unknown as ConfigService,
            mockHttpClient as unknown as import('@nestjs/axios').HttpService,
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
        );
    });

    describe('constructor', () => {
        it('should throw when DEFAULT_CURRENCY is not defined', () => {
            vi.mocked(mockConfig.get).mockReturnValue('');

            expect(
                () =>
                    new ProductsService(
                        mockConfig as unknown as ConfigService,
                        mockHttpClient as unknown as import('@nestjs/axios').HttpService,
                        mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                        mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
                    ),
            ).toThrow('DEFAULT_CURRENCY is not defined');
        });
    });

    describe('getProductList', () => {
        it('should call sdk.store.product.list with params and return mapped products', async () => {
            mockSdk.store.product.list.mockResolvedValue(mockProductListResponse);

            const result = await firstValueFrom(service.getProductList({ limit: 10, offset: 0 }));

            expect(mockSdk.store.product.list).toHaveBeenCalledWith(
                expect.objectContaining({
                    limit: 10,
                    offset: 0,
                    fields: expect.any(String),
                }),
            );
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]?.id).toBe('prod_1');
            expect(result.data[0]?.name).toBe('Product 1');
        });

        it('should throw NotFoundException when SDK returns 404', async () => {
            mockSdk.store.product.list.mockRejectedValue({ status: 404 });

            await expect(firstValueFrom(service.getProductList({ limit: 10, offset: 0 }))).rejects.toThrow(
                NotFoundException,
            );
        });
    });

    describe('getProduct', () => {
        it('should call sdk.store.product.retrieve and return mapped product', async () => {
            mockSdk.store.product.retrieve.mockResolvedValue(mockProductResponse);

            const result = await firstValueFrom(service.getProduct({ id: 'prod_1', variantId: 'var_1' }));

            expect(mockSdk.store.product.retrieve).toHaveBeenCalledWith(
                'prod_1',
                expect.objectContaining({ fields: expect.any(String) }),
            );
            expect(result.id).toBe('prod_1');
            expect(result.variantId).toBe('var_1');
            expect(result.price?.value).toBe(1999);
        });

        it('should throw when product has no variants', async () => {
            mockSdk.store.product.retrieve.mockResolvedValue({
                product: { ...mockProductResponse.product, variants: [] },
            });

            await expect(
                firstValueFrom(
                    service.getProduct({
                        id: 'prod_1',
                    } as import('@o2s/framework/modules').Products.Request.GetProductParams),
                ),
            ).rejects.toThrow('No variants found for product prod_1');
        });

        it('should throw when variantId does not match any variant', async () => {
            mockSdk.store.product.retrieve.mockResolvedValue(mockProductResponse);

            await expect(
                firstValueFrom(
                    service.getProduct({
                        id: 'prod_1',
                        variantId: 'var_nonexistent',
                    } as import('@o2s/framework/modules').Products.Request.GetProductParams),
                ),
            ).rejects.toThrow('Variant var_nonexistent not found for product prod_1');
        });
    });

    describe('getRelatedProductList', () => {
        it('should call httpClient.get for references and return mapped products', async () => {
            mockHttpClient.get.mockReturnValue(
                of({
                    data: {
                        productReferences: [],
                        count: 0,
                    },
                }),
            );

            const result = await firstValueFrom(
                service.getRelatedProductList({
                    productId: 'p1',
                    productVariantId: 'v1',
                    type: 'COMPATIBLE_SERVICE',
                }),
            );

            expect(mockHttpClient.get).toHaveBeenCalledWith(
                `${BASE_URL}/admin/products/p1/variants/v1/references`,
                expect.objectContaining({
                    params: { referenceType: 'COMPATIBLE_SERVICE' },
                }),
            );
            expect(result.data).toHaveLength(0);
            expect(result.total).toBe(0);
        });
    });
});
