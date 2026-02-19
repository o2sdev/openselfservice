import { BadRequestException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ProductsService } from './products.service';

const BASE_URL = 'https://api.medusa.test';
const DEFAULT_CURRENCY = 'EUR';
const TEST_BASE_PATH = '/products';

const mockProductListResponse = {
    products: [
        {
            id: 'prod_1',
            title: 'Product 1',
            description: 'Desc 1',
            thumbnail: null,
            categories: [],
            type: null,
            variants: [{ id: 'var_1', sku: 'SKU1', prices: [] }],
        },
    ],
    count: 1,
};

const mockRetrieveResponse = {
    product: {
        id: 'prod_1',
        title: 'Product 1',
        description: 'Desc',
        variants: [{ id: 'var_1', title: 'Default' }],
    },
};

const mockVariantResponse = {
    variant: {
        id: 'var_1',
        sku: 'SKU1',
        product_id: 'prod_1',
        product: {
            id: 'prod_1',
            title: 'Product 1',
            description: 'Desc',
            subtitle: 'Sub',
            thumbnail: null,
            type: null,
            categories: [],
        },
        prices: [{ currency_code: 'eur', amount: 1999 }],
    },
};

describe('ProductsService', () => {
    let service: ProductsService;
    let mockHttpClient: { get: ReturnType<typeof vi.fn> };
    let mockMedusaJsService: {
        getSdk: ReturnType<typeof vi.fn>;
        getBaseUrl: ReturnType<typeof vi.fn>;
        getMedusaAdminApiHeaders: ReturnType<typeof vi.fn>;
        getStoreApiHeaders: ReturnType<typeof vi.fn>;
    };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };
    let mockSdkStoreProductList: ReturnType<typeof vi.fn>;
    let mockSdkStoreProductRetrieve: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.restoreAllMocks();
        mockHttpClient = { get: vi.fn() };
        mockSdkStoreProductList = vi.fn();
        mockSdkStoreProductRetrieve = vi.fn();
        mockMedusaJsService = {
            getSdk: vi.fn(() => ({
                store: {
                    product: {
                        list: mockSdkStoreProductList,
                        retrieve: mockSdkStoreProductRetrieve,
                    },
                },
            })),
            getBaseUrl: vi.fn(() => BASE_URL),
            getMedusaAdminApiHeaders: vi.fn(() => ({
                'x-publishable-api-key': 'pk',
                Authorization: 'Basic xxx',
            })),
            getStoreApiHeaders: vi.fn(() => ({
                'x-publishable-api-key': 'pk',
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
        it('should throw BadRequestException when DEFAULT_CURRENCY is not defined', () => {
            vi.mocked(mockConfig.get).mockReturnValue('');

            expect(
                () =>
                    new ProductsService(
                        mockConfig as unknown as ConfigService,
                        mockHttpClient as unknown as import('@nestjs/axios').HttpService,
                        mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
                        mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
                    ),
            ).toThrow(BadRequestException);
        });
    });

    describe('getProductList', () => {
        it('should call sdk.store.product.list and return mapped products', async () => {
            mockSdkStoreProductList.mockResolvedValue(mockProductListResponse);

            const result = await firstValueFrom(
                service.getProductList({ limit: 10, offset: 0, basePath: TEST_BASE_PATH }),
            );

            expect(mockSdkStoreProductList).toHaveBeenCalledWith(
                expect.objectContaining({
                    limit: 10,
                    offset: 0,
                }),
                expect.any(Object),
            );
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]?.id).toBe('prod_1');
            expect(result.data[0]?.name).toBe('Product 1');
        });

        it('should throw NotFoundException when SDK returns 404', async () => {
            mockSdkStoreProductList.mockRejectedValue({ status: 404 });

            await expect(
                firstValueFrom(service.getProductList({ limit: 10, offset: 0, basePath: TEST_BASE_PATH })),
            ).rejects.toThrow(NotFoundException);
        });

        it('should use empty string as default basePath when not provided', async () => {
            mockSdkStoreProductList.mockResolvedValue(mockProductListResponse);

            const result = await firstValueFrom(service.getProductList({ limit: 10, offset: 0 }));

            // Link includes variant SKU slug: /prod_1/sku1
            expect(result.data[0]?.link).toBe('/prod_1/sku1');
        });
    });

    describe('getProduct', () => {
        it('should call sdk.store.product.retrieve to get product and variant and return mapped product', async () => {
            // First call: retrieve product to get variants list
            mockSdkStoreProductRetrieve
                .mockResolvedValueOnce(mockRetrieveResponse)
                // Second call: retrieve product with variant details
                .mockResolvedValueOnce({
                    product: {
                        ...mockRetrieveResponse.product,
                        variants: [
                            {
                                ...mockVariantResponse.variant,
                                id: 'var_1',
                                sku: 'SKU1',
                                prices: [{ currency_code: 'eur', amount: 1999 }],
                            },
                        ],
                    },
                });

            const result = await firstValueFrom(
                service.getProduct({
                    id: 'prod_1',
                    variantId: 'var_1',
                    basePath: TEST_BASE_PATH,
                }),
            );

            expect(mockSdkStoreProductRetrieve).toHaveBeenCalledWith('prod_1', expect.any(Object), expect.any(Object));
            expect(result.id).toBe('prod_1');
            expect(result.variantId).toBe('var_1');
            expect(result.price.value).toBe(1999);
        });

        it('should throw NotFoundException when product has no variants', async () => {
            mockSdkStoreProductRetrieve.mockResolvedValue({ product: { id: 'prod_1', variants: [] } });

            await expect(
                firstValueFrom(
                    service.getProduct({
                        id: 'prod_1',
                        basePath: TEST_BASE_PATH,
                    }),
                ),
            ).rejects.toThrow(NotFoundException);
        });

        it('should throw NotFoundException when variant not found', async () => {
            mockSdkStoreProductRetrieve.mockResolvedValueOnce(mockRetrieveResponse).mockResolvedValueOnce({
                product: {
                    ...mockRetrieveResponse.product,
                    variants: [{ id: 'var_2', sku: 'SKU2' }],
                },
            });

            await expect(
                firstValueFrom(
                    service.getProduct({
                        id: 'prod_1',
                        variantId: 'var_1',
                        basePath: TEST_BASE_PATH,
                    }),
                ),
            ).rejects.toThrow(NotFoundException);
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
                    basePath: TEST_BASE_PATH,
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
