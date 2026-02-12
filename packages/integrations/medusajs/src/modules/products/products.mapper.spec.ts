import { HttpTypes } from '@medusajs/types';
import { describe, expect, it } from 'vitest';

import type { CompatibleServicesResponse, FeaturedServicesResponse } from '../resources/response.types';

import {
    mapCompatibleServices,
    mapFeaturedServices,
    mapProduct,
    mapProductType,
    mapProducts,
    mapRelatedProducts,
} from './products.mapper';
import type { RelatedProductsResponse } from './response.types';

const defaultCurrency = 'EUR';
const basePath = '/products';
const specFields = ['weight', 'height', 'width', 'length', 'material'];

describe('products.mapper', () => {
    describe('mapProduct', () => {
        it('should map variant with price in defaultCurrency', () => {
            const variant = {
                id: 'var_1',
                sku: 'SKU1',
                product_id: 'prod_1',
                product: {
                    id: 'prod_1',
                    title: 'Product 1',
                    description: 'Desc',
                    subtitle: 'Sub',
                    thumbnail: null,
                    type: undefined,
                    categories: [{ name: 'Category' }],
                },
                prices: [{ currency_code: 'eur', amount: 1999 }],
            };
            const result = mapProduct(
                variant as unknown as HttpTypes.AdminProductVariant,
                defaultCurrency,
                undefined,
                basePath,
                specFields,
            );
            expect(result.id).toBe('prod_1');
            expect(result.sku).toBe('SKU1');
            expect(result.variantId).toBe('var_1');
            expect(result.name).toBe('Product 1');
            expect(result.price.value).toBe(1999);
            expect(result.price.currency).toBe('EUR');
            expect(result.category).toBe('Category');
        });

        it('should use value 0 and defaultCurrency when no matching price', () => {
            const variant = {
                id: 'var_1',
                sku: '',
                product: {
                    id: 'p1',
                    title: 'P',
                    description: '',
                    subtitle: '',
                    thumbnail: null,
                    type: undefined,
                    categories: [],
                },
                prices: [{ currency_code: 'usd', amount: 100 }],
            };
            const result = mapProduct(
                variant as unknown as HttpTypes.AdminProductVariant,
                defaultCurrency,
                undefined,
                basePath,
                specFields,
            );
            expect(result.price.value).toBe(0);
            expect(result.price.currency).toBe(defaultCurrency);
        });
    });

    describe('mapProducts', () => {
        it('should map product list with total from count', () => {
            const data = {
                products: [
                    { id: 'p1', title: 'P1', description: '', thumbnail: null, categories: [], type: undefined },
                    { id: 'p2', title: 'P2', description: '', thumbnail: null, categories: [], type: undefined },
                ],
                count: 2,
                limit: 10,
                offset: 0,
            } as unknown as HttpTypes.AdminProductListResponse;
            const result = mapProducts(data, defaultCurrency, basePath);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(2);
            expect(result.data[0]?.id).toBe('p1');
            expect(result.data[0]?.price.value).toBe(0);
            expect(result.data[0]?.price.currency).toBe(defaultCurrency);
        });
    });

    describe('mapRelatedProducts', () => {
        it('should map productReferences to products with total', () => {
            const data = {
                productReferences: [
                    {
                        targetProduct: {
                            id: 'p1',
                            sku: '',
                            title: 'Related',
                            product: { description: '', thumbnail: '', categories: [], type: undefined },
                        },
                    },
                ],
                count: 1,
                offset: 0,
                limit: 10,
            } as unknown as RelatedProductsResponse;
            const result = mapRelatedProducts(data, defaultCurrency, basePath);
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.id).toBe('p1');
            expect(result.data[0]?.name).toBe('Related');
            expect(result.total).toBe(1);
        });
    });

    describe('mapCompatibleServices', () => {
        it('should delegate to mapProduct for each and set total to count', () => {
            const variant = {
                id: 'v1',
                sku: '',
                product: {
                    id: 'p1',
                    title: 'S',
                    description: '',
                    subtitle: '',
                    thumbnail: null,
                    type: undefined,
                    categories: [],
                },
                prices: [{ currency_code: 'eur', amount: 100 }],
            };
            const data = {
                compatibleServices: [variant],
                count: 1,
                offset: 0,
                limit: 10,
            } as unknown as CompatibleServicesResponse;
            const result = mapCompatibleServices(data, defaultCurrency, basePath, specFields);
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
        });
    });

    describe('mapFeaturedServices', () => {
        it('should delegate to mapProduct for each and set total to count', () => {
            const variant = {
                id: 'v1',
                sku: '',
                product: {
                    id: 'p1',
                    title: 'F',
                    description: '',
                    subtitle: '',
                    thumbnail: null,
                    type: undefined,
                    categories: [],
                },
                prices: [],
            };
            const data = {
                featuredServices: [variant],
                count: 1,
                offset: 0,
                limit: 10,
            } as unknown as FeaturedServicesResponse;
            const result = mapFeaturedServices(data, defaultCurrency, basePath, specFields);
            expect(result.data).toHaveLength(1);
            expect(result.total).toBe(1);
        });
    });

    describe('mapProductType', () => {
        it('should return PHYSICAL when type is undefined', () => {
            expect(mapProductType(undefined)).toBe('PHYSICAL');
        });

        it('should return PHYSICAL for value PHYSICAL', () => {
            expect(mapProductType({ value: 'PHYSICAL' } as HttpTypes.AdminProductType)).toBe('PHYSICAL');
        });

        it('should return VIRTUAL for value VIRTUAL', () => {
            expect(mapProductType({ value: 'VIRTUAL' } as HttpTypes.AdminProductType)).toBe('VIRTUAL');
        });

        it('should return PHYSICAL for unknown value', () => {
            expect(mapProductType({ value: 'OTHER' } as HttpTypes.AdminProductType)).toBe('PHYSICAL');
        });
    });
});
