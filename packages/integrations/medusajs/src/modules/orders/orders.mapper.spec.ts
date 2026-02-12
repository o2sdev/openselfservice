import { HttpTypes } from '@medusajs/types';
import { describe, expect, it } from 'vitest';

import { mapOrder, mapOrders } from './orders.mapper';

const defaultCurrency = 'EUR';

function minimalOrder(overrides: Record<string, unknown> = {}): HttpTypes.StoreOrder {
    return {
        id: 'order_1',
        customer_id: 'cust_1',
        currency_code: 'eur',
        total: 10000,
        subtotal: 9000,
        tax_total: 1000,
        discount_total: 0,
        shipping_total: 0,
        payment_status: 'captured',
        status: 'completed',
        created_at: new Date('2024-01-01'),
        updated_at: new Date('2024-01-02'),
        items: [],
        shipping_address: null,
        billing_address: null,
        shipping_methods: [],
        ...overrides,
    } as unknown as HttpTypes.StoreOrder;
}

describe('orders.mapper', () => {
    describe('mapOrders', () => {
        it('should map list response with data and total from count', () => {
            const response = {
                orders: [minimalOrder(), minimalOrder({ id: 'order_2' })],
                count: 2,
                limit: 10,
                offset: 0,
            } as HttpTypes.StoreOrderListResponse;
            const result = mapOrders(response, defaultCurrency);
            expect(result.data).toHaveLength(2);
            expect(result.total).toBe(2);
            expect(result.data[0]?.id).toBe('order_1');
            expect(result.data[1]?.id).toBe('order_2');
        });
    });

    describe('mapOrder', () => {
        it('should map order id, dates, customerId, currency and status', () => {
            const order = minimalOrder();
            const result = mapOrder(order, defaultCurrency);
            expect(result.id).toBe('order_1');
            expect(result.customerId).toBe('cust_1');
            expect(result.currency).toBe('eur');
            expect(result.status).toBe('COMPLETED');
            expect(result.paymentStatus).toBe('CAPTURED');
            expect(result.createdAt).toBe(order.created_at.toString());
            expect(result.updatedAt).toBe(order.updated_at.toString());
        });

        it('should map price fields with currency', () => {
            const order = minimalOrder();
            const result = mapOrder(order, defaultCurrency);
            expect(result.total?.value).toBe(10000);
            expect(result.subtotal?.value).toBe(9000);
            expect(result.tax?.value).toBe(1000);
        });

        it('should map pending status to PENDING', () => {
            const result = mapOrder(minimalOrder({ status: 'pending' }), defaultCurrency);
            expect(result.status).toBe('PENDING');
        });

        it('should map unknown status to UNKNOWN', () => {
            const result = mapOrder(minimalOrder({ status: 'unknown' }), defaultCurrency);
            expect(result.status).toBe('UNKNOWN');
        });

        it('should map payment_status awaiting to PENDING', () => {
            const result = mapOrder(minimalOrder({ payment_status: 'awaiting' }), defaultCurrency);
            expect(result.paymentStatus).toBe('PENDING');
        });

        it('should set customerId undefined when customer_id is empty', () => {
            const result = mapOrder(minimalOrder({ customer_id: '' }), defaultCurrency);
            expect(result.customerId).toBeUndefined();
        });

        it('should map items and shipping methods', () => {
            const order = minimalOrder({
                items: [
                    {
                        id: 'item_1',
                        variant_id: 'var_1',
                        quantity: 2,
                        unit_price: 500,
                        total: 1000,
                        subtotal: 1000,
                        product_id: 'prod_1',
                        product_title: 'Product',
                        title: 'Product',
                        variant_sku: 'SKU1',
                        product_description: '',
                        product_subtitle: '',
                        thumbnail: null,
                        product: { categories: [{ name: 'Cat' }] },
                    },
                ],
                shipping_methods: [{ id: 'sm_1', name: 'Express', description: '', total: 500, subtotal: 500 }],
            });
            const result = mapOrder(order, defaultCurrency);
            expect(result.items.data).toHaveLength(1);
            expect(result.items.data[0]?.id).toBe('item_1');
            expect(result.items.data[0]?.quantity).toBe(2);
            expect(result.shippingMethods).toHaveLength(1);
            expect(result.shippingMethods[0]?.id).toBe('sm_1');
        });

        it('should set shippingAddress and billingAddress undefined when null', () => {
            const result = mapOrder(minimalOrder(), defaultCurrency);
            expect(result.shippingAddress).toBeUndefined();
            expect(result.billingAddress).toBeUndefined();
        });

        it('should map address when present', () => {
            const order = minimalOrder({
                shipping_address: {
                    country_code: 'PL',
                    province: 'Mazovia',
                    address_1: 'Street',
                    address_2: '1',
                    city: 'Warsaw',
                    postal_code: '00-001',
                    phone: '+48',
                },
            });
            const result = mapOrder(order, defaultCurrency);
            expect(result.shippingAddress).toBeDefined();
            expect(result.shippingAddress?.country).toBe('PL');
            expect(result.shippingAddress?.city).toBe('Warsaw');
        });
    });
});
