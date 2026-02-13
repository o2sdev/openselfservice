import { NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom, of } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { ProductsService } from './products.service';

const BASE_URL = 'https://api.medusa.test';
const DEFAULT_CURRENCY = 'EUR';
const TEST_BASE_PATH = '/products';
const TEST_SPEC_FIELDS_MAPPING = {
    weight: { label: 'Weight', showInKeySpecs: true, icon: 'Weight' },
    height: { label: 'Height', showInKeySpecs: false },
    width: { label: 'Width', showInKeySpecs: false },
    length: { label: 'Length', showInKeySpecs: false },
    material: { label: 'Material', showInKeySpecs: true, icon: 'Package' },
};

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
    };
    let mockConfig: { get: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn> };
    let mockSdkProductList: ReturnType<typeof vi.fn>;
    let mockSdkProductRetrieve: ReturnType<typeof vi.fn>;
    let mockSdkProductRetrieveVariant: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        vi.restoreAllMocks();
        mockHttpClient = { get: vi.fn() };
        mockSdkProductList = vi.fn();
        mockSdkProductRetrieve = vi.fn();
        mockSdkProductRetrieveVariant = vi.fn();
        mockMedusaJsService = {
            getSdk: vi.fn(() => ({
                admin: {
                    product: {
                        list: mockSdkProductList,
                        retrieve: mockSdkProductRetrieve,
                        retrieveVariant: mockSdkProductRetrieveVariant,
                    },
                },
            })),
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
        it('should call sdk.admin.product.list and return mapped products', async () => {
            mockSdkProductList.mockResolvedValue(mockProductListResponse);

            const result = await firstValueFrom(
                service.getProductList({ limit: 10, offset: 0, basePath: TEST_BASE_PATH }),
            );

            expect(mockSdkProductList).toHaveBeenCalledWith(
                expect.objectContaining({
                    limit: 10,
                    offset: 0,
                }),
            );
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
            expect(result.data[0]?.id).toBe('prod_1');
            expect(result.data[0]?.name).toBe('Product 1');
        });

        it('should throw NotFoundException when SDK returns 404', async () => {
            mockSdkProductList.mockRejectedValue({ status: 404 });

            await expect(
                firstValueFrom(service.getProductList({ limit: 10, offset: 0, basePath: TEST_BASE_PATH })),
            ).rejects.toThrow(NotFoundException);
        });
    });

    describe('getProduct', () => {
        it('should call sdk to retrieve product and variant and return mapped product', async () => {
            mockSdkProductRetrieve.mockResolvedValue(mockRetrieveResponse);
            mockSdkProductRetrieveVariant.mockResolvedValue(mockVariantResponse);

            const result = await firstValueFrom(
                service.getProduct({
                    id: 'prod_1',
                    variantId: 'var_1',
                    basePath: TEST_BASE_PATH,
                    specFieldsMapping: TEST_SPEC_FIELDS_MAPPING,
                }),
            );

            expect(mockSdkProductRetrieve).toHaveBeenCalledWith('prod_1', expect.any(Object));
            expect(mockSdkProductRetrieveVariant).toHaveBeenCalledWith('prod_1', 'var_1', expect.any(Object));
            expect(result.id).toBe('prod_1');
            expect(result.variantId).toBe('var_1');
            expect(result.price.value).toBe(1999);
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
