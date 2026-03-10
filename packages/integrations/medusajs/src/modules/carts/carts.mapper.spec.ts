import { HttpTypes } from '@medusajs/types';
import { describe, expect, it } from 'vitest';

import { mapCart, mapCarts } from './carts.mapper';

const defaultCurrency = 'EUR';

function minimalCart(overrides: Record<string, unknown> = {}): HttpTypes.StoreCart {
    return {
        id: 'cart_1',
        currency_code: 'eur',
        created_at: new Date('2024-01-01'),
        updated_at: new Date('2024-01-02'),
        items: [],
        subtotal: 9000,
        total: 10000,
        discount_total: 0,
        tax_total: 1000,
        shipping_total: 0,
        shipping_address: null,
        billing_address: null,
        shipping_methods: [],
        metadata: {},
        ...overrides,
    } as unknown as HttpTypes.StoreCart;
}

describe('carts.mapper', () => {
    describe('mapCart', () => {
        it('should map id, customerId, currency, items, subtotal, total', () => {
            const cart = minimalCart();
            const result = mapCart(cart, defaultCurrency);
            expect(result.id).toBe('cart_1');
            expect(result.customerId).toBeUndefined();
            expect(result.currency).toBe('EUR');
            expect(result.items.data).toHaveLength(0);
            expect(result.items.total).toBe(0);
            expect(result.subtotal?.value).toBe(9000);
            expect(result.total?.value).toBe(10000);
            expect(result.createdAt).toBe(cart.created_at?.toString());
            expect(result.updatedAt).toBe(cart.updated_at?.toString());
        });

        it('should map customerId when present', () => {
            const cart = minimalCart({ customer_id: 'cust_1' });
            const result = mapCart(cart, defaultCurrency);
            expect(result.customerId).toBe('cust_1');
        });

        it('should throw when currency_code is missing', () => {
            const cart = minimalCart({ currency_code: undefined });
            expect(() => mapCart(cart, defaultCurrency)).toThrow('Cart cart_1 has no currency code');
        });

        it('should map shipping and billing address', () => {
            const cart = minimalCart({
                shipping_address: {
                    first_name: 'John',
                    last_name: 'Doe',
                    country_code: 'PL',
                    province: 'Mazovia',
                    address_1: 'Street',
                    address_2: '1',
                    city: 'Warsaw',
                    postal_code: '00-001',
                    phone: '+48',
                },
                billing_address: {
                    first_name: 'Jane',
                    last_name: 'Doe',
                    country_code: 'PL',
                    province: '',
                    address_1: 'Billing St',
                    address_2: '',
                    city: 'Warsaw',
                    postal_code: '00-002',
                    phone: '',
                },
            });
            const result = mapCart(cart, defaultCurrency);
            expect(result.shippingAddress).toBeDefined();
            expect(result.shippingAddress?.country).toBe('PL');
            expect(result.shippingAddress?.city).toBe('Warsaw');
            expect(result.shippingAddress?.streetName).toBe('Street');
            expect(result.billingAddress).toBeDefined();
            expect(result.billingAddress?.country).toBe('PL');
            expect(result.billingAddress?.city).toBe('Warsaw');
            expect(result.billingAddress?.streetName).toBe('Billing St');
        });

        it('should map line items with sku from variant_sku, quantity, unit_price', () => {
            const cart = minimalCart({
                items: [
                    {
                        id: 'item_1',
                        product_id: 'prod_1',
                        variant_id: 'var_1',
                        quantity: 2,
                        unit_price: 500,
                        subtotal: 1000,
                        total: 1000,
                        discount_total: 0,
                        product_title: 'Product',
                        title: 'Product',
                        variant_sku: 'SKU1',
                        product_description: '',
                        product_subtitle: '',
                        thumbnail: null,
                    },
                ] as unknown as HttpTypes.StoreCartLineItem[],
            });
            const result = mapCart(cart, defaultCurrency);
            expect(result.items.data).toHaveLength(1);
            expect(result.items.data[0]?.sku).toBe('SKU1');
            expect(result.items.data[0]?.quantity).toBe(2);
            expect(result.items.data[0]?.price?.value).toBe(500);
        });

        it('should map shipping_methods[0] when present', () => {
            const cart = minimalCart({
                shipping_methods: [
                    {
                        id: 'sm_1',
                        name: 'Express',
                        description: 'Fast delivery',
                        total: 500,
                        subtotal: 500,
                    },
                ] as HttpTypes.StoreCartShippingMethod[],
            });
            const result = mapCart(cart, defaultCurrency);
            expect(result.shippingMethod).toBeDefined();
            expect(result.shippingMethod?.id).toBe('sm_1');
            expect(result.shippingMethod?.name).toBe('Express');
        });

        it('should map metadata.paymentMethod when present', () => {
            const cart = minimalCart({
                metadata: {
                    paymentMethod: {
                        id: 'pm_1',
                        name: 'Credit Card',
                        description: 'Pay with card',
                    },
                },
            });
            const result = mapCart(cart, defaultCurrency);
            expect(result.paymentMethod).toBeDefined();
            expect(result.paymentMethod?.id).toBe('pm_1');
            expect(result.paymentMethod?.name).toBe('Credit Card');
            expect(result.paymentMethod?.description).toBe('Pay with card');
        });

        it('should map promotions when present', () => {
            const cart = minimalCart({
                promotions: [{ id: 'promo_1', code: 'SAVE10' }] as HttpTypes.StoreCart['promotions'],
            });
            const result = mapCart(cart, defaultCurrency);
            expect(result.promotions).toHaveLength(1);
            expect(result.promotions?.[0]?.id).toBe('promo_1');
            expect(result.promotions?.[0]?.code).toBe('SAVE10');
        });
    });

    describe('mapCarts', () => {
        it('should map data and total from count', () => {
            const response = { carts: [minimalCart(), minimalCart({ id: 'cart_2' })], count: 2 };
            const result = mapCarts(response, defaultCurrency);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(2);
            expect(result.data[0]?.id).toBe('cart_1');
            expect(result.data[1]?.id).toBe('cart_2');
        });

        it('should map data and total from carts.length when count missing', () => {
            const response = { carts: [minimalCart(), minimalCart({ id: 'cart_2' })] };
            const result = mapCarts(response, defaultCurrency);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(2);
        });
    });
});
