import { BadRequestException } from '@nestjs/common';
import { describe, expect, it } from 'vitest';

import { Carts, Orders, Payments } from '@o2s/framework/modules';

import { mapCheckoutSummary, mapPlaceOrderResponse, mapShippingOptions } from './checkout.mapper';

function minimalCartWithAllFields(): Carts.Model.Cart {
    const address = {
        firstName: 'John',
        lastName: 'Doe',
        country: 'PL',
        district: 'Mazovia',
        region: 'Mazovia',
        streetName: 'Street',
        streetNumber: '1',
        apartment: undefined,
        city: 'Warsaw',
        postalCode: '00-001',
        phone: '+48',
    };
    const price = { value: 10000, currency: 'EUR' as const };
    const shippingMethod: Orders.Model.ShippingMethod = {
        id: 'sm_1',
        name: 'Express',
        description: 'Fast',
        total: price,
        subtotal: price,
    };
    const paymentMethod: Carts.Model.PaymentMethod = {
        id: 'pm_1',
        name: 'Card',
        type: 'OTHER',
    };
    return {
        id: 'cart_1',
        currency: 'EUR',
        items: { data: [], total: 0 },
        subtotal: price,
        shippingTotal: price,
        taxTotal: price,
        discountTotal: price,
        total: price,
        shippingAddress: address,
        billingAddress: address,
        shippingMethod,
        paymentMethod,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        metadata: {},
        type: 'ACTIVE',
    } as unknown as Carts.Model.Cart;
}

describe('checkout.mapper', () => {
    describe('mapCheckoutSummary', () => {
        it('should return summary when cart has all required fields', () => {
            const cart = minimalCartWithAllFields();
            const result = mapCheckoutSummary(cart);
            expect(result.cart).toBe(cart);
            expect(result.shippingAddress).toBe(cart.shippingAddress);
            expect(result.billingAddress).toBe(cart.billingAddress);
            expect(result.shippingMethod).toBe(cart.shippingMethod);
            expect(result.paymentMethod).toBe(cart.paymentMethod);
            expect(result.totals.subtotal).toBe(cart.subtotal);
            expect(result.totals.shipping).toBe(cart.shippingTotal);
            expect(result.totals.tax).toBe(cart.taxTotal);
            expect(result.totals.discount).toBe(cart.discountTotal);
            expect(result.totals.total).toBe(cart.total);
        });

        it('should throw BadRequestException when shippingAddress is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.shippingAddress = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Shipping address is required');
        });

        it('should throw BadRequestException when billingAddress is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.billingAddress = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Billing address is required');
        });

        it('should throw BadRequestException when shippingMethod is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.shippingMethod = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Shipping method is required');
        });

        it('should throw BadRequestException when paymentMethod is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.paymentMethod = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Payment method is required');
        });

        it('should throw BadRequestException when subtotal is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.subtotal = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Cart subtotal is required');
        });

        it('should throw BadRequestException when shippingTotal is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.shippingTotal = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Shipping total is required');
        });

        it('should throw BadRequestException when taxTotal is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.taxTotal = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Tax total is required');
        });

        it('should throw BadRequestException when discountTotal is missing', () => {
            const cart = minimalCartWithAllFields();
            cart.discountTotal = undefined;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Discount total is required');
        });

        it('should throw BadRequestException when total is missing', () => {
            const cart = { ...minimalCartWithAllFields(), total: undefined } as unknown as Carts.Model.Cart;
            expect(() => mapCheckoutSummary(cart)).toThrow(BadRequestException);
            expect(() => mapCheckoutSummary(cart)).toThrow('Cart total is required');
        });
    });

    describe('mapPlaceOrderResponse', () => {
        it('should return order and paymentRedirectUrl from paymentSession', () => {
            const order = { id: 'order_1', status: 'COMPLETED' } as Orders.Model.Order;
            const paymentSession = {
                id: 'ps_1',
                redirectUrl: 'https://example.com/redirect',
            } as Payments.Model.PaymentSession;
            const result = mapPlaceOrderResponse(order, paymentSession);
            expect(result.order).toBe(order);
            expect(result.paymentRedirectUrl).toBe('https://example.com/redirect');
        });

        it('should return order without paymentRedirectUrl when paymentSession is undefined', () => {
            const order = { id: 'order_1', status: 'COMPLETED' } as Orders.Model.Order;
            const result = mapPlaceOrderResponse(order);
            expect(result.order).toBe(order);
            expect(result.paymentRedirectUrl).toBeUndefined();
        });
    });

    describe('mapShippingOptions', () => {
        it('should map shipping options', () => {
            const options = [
                {
                    id: 'opt_1',
                    name: 'Standard',
                    amount: 500,
                    calculated_price: {
                        calculated_amount: 500,
                        currency_code: 'eur',
                        calculated_amount_without_tax: 450,
                    },
                    type: { label: 'Standard shipping' },
                },
            ];
            const result = mapShippingOptions(options as never, 'EUR');
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.id).toBe('opt_1');
            expect(result.data[0]?.name).toBe('Standard');
            expect(result.total).toBe(1);
        });

        it('should throw when option has no price', () => {
            const options = [
                {
                    id: 'opt_1',
                    name: 'Broken',
                    amount: undefined,
                    calculated_price: undefined,
                },
            ] as unknown as Parameters<typeof mapShippingOptions>[0];
            expect(() => mapShippingOptions(options, 'EUR')).toThrow(BadRequestException);
            expect(() => mapShippingOptions(options, 'EUR')).toThrow('no price information');
        });

        it('should throw when option has no currency', () => {
            const options = [
                {
                    id: 'opt_1',
                    name: 'Broken',
                    amount: 500,
                    calculated_price: { calculated_amount: 500, currency_code: undefined },
                },
            ] as unknown as Parameters<typeof mapShippingOptions>[0];
            expect(() => mapShippingOptions(options, 'EUR')).toThrow(BadRequestException);
            expect(() => mapShippingOptions(options, 'EUR')).toThrow('no currency information');
        });
    });
});
