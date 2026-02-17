import { HttpTypes } from '@medusajs/types';
import { describe, expect, it } from 'vitest';

import { mapPaymentProvider, mapPaymentProviders, mapPaymentSession } from './payments.mapper';

describe('payments.mapper', () => {
    describe('mapPaymentProvider', () => {
        it('should map id and type from provider id', () => {
            const provider = { id: 'pp_stripe_123' } as HttpTypes.StorePaymentProvider;
            const result = mapPaymentProvider(provider);
            expect(result.id).toBe('pp_stripe_123');
            expect(result.type).toBe('STRIPE');
            expect(result.name).toBe('pp_stripe_123');
        });

        it('should map type STRIPE when id includes stripe', () => {
            const result = mapPaymentProvider({ id: 'pp_stripe_default' } as HttpTypes.StorePaymentProvider);
            expect(result.type).toBe('STRIPE');
        });

        it('should map type PAYPAL when id includes paypal', () => {
            const result = mapPaymentProvider({ id: 'pp_paypal_express' } as HttpTypes.StorePaymentProvider);
            expect(result.type).toBe('PAYPAL');
        });

        it('should map type ADYEN when id includes adyen', () => {
            const result = mapPaymentProvider({ id: 'pp_adyen_checkout' } as HttpTypes.StorePaymentProvider);
            expect(result.type).toBe('ADYEN');
        });

        it('should map type SYSTEM when id includes system or manual', () => {
            expect(mapPaymentProvider({ id: 'pp_system' } as HttpTypes.StorePaymentProvider).type).toBe('SYSTEM');
            expect(mapPaymentProvider({ id: 'pp_manual' } as HttpTypes.StorePaymentProvider).type).toBe('SYSTEM');
        });

        it('should map type OTHER for unknown provider', () => {
            const result = mapPaymentProvider({ id: 'pp_custom_gateway' } as HttpTypes.StorePaymentProvider);
            expect(result.type).toBe('OTHER');
        });

        it('should set requiresRedirect for stripe and paypal', () => {
            expect(mapPaymentProvider({ id: 'pp_stripe' } as HttpTypes.StorePaymentProvider).requiresRedirect).toBe(
                true,
            );
            expect(mapPaymentProvider({ id: 'pp_paypal' } as HttpTypes.StorePaymentProvider).requiresRedirect).toBe(
                true,
            );
        });

        it('should set requiresRedirect false for other providers', () => {
            const result = mapPaymentProvider({ id: 'pp_manual' } as HttpTypes.StorePaymentProvider);
            expect(result.requiresRedirect).toBe(false);
        });
    });

    describe('mapPaymentProviders', () => {
        it('should return mapper providers', () => {
            const providers = [
                { id: 'pp_1' } as HttpTypes.StorePaymentProvider,
                { id: 'pp_2' } as HttpTypes.StorePaymentProvider,
                { id: 'pp_3' } as HttpTypes.StorePaymentProvider,
            ];
            const result = mapPaymentProviders(providers);
            expect(result.data).toHaveLength(3);
            expect(result.total).toBe(3);
            expect(result.data[0]?.id).toBe('pp_1');
            expect(result.data[1]?.id).toBe('pp_2');
            expect(result.data[2]?.id).toBe('pp_3');
        });
    });

    describe('mapPaymentSession', () => {
        it('should map id, cartId, providerId, status, redirectUrl, clientSecret', () => {
            const session = {
                id: 'ps_1',
                provider_id: 'pp_stripe',
                status: 'authorized',
                data: {
                    redirect_url: 'https://example.com/redirect',
                    client_secret: 'secret_123',
                },
            } as unknown as HttpTypes.StorePaymentSession;
            const result = mapPaymentSession(session, 'cart_1');
            expect(result.id).toBe('ps_1');
            expect(result.cartId).toBe('cart_1');
            expect(result.providerId).toBe('pp_stripe');
            expect(result.status).toBe('AUTHORIZED');
            expect(result.redirectUrl).toBe('https://example.com/redirect');
            expect(result.clientSecret).toBe('secret_123');
        });

        it('should map status captured', () => {
            const session = {
                id: 'ps_1',
                provider_id: 'pp_1',
                status: 'captured',
                data: {},
            } as HttpTypes.StorePaymentSession;
            const result = mapPaymentSession(session, 'cart_1');
            expect(result.status).toBe('CAPTURED');
        });

        it('should map status cancelled', () => {
            const session = {
                id: 'ps_1',
                provider_id: 'pp_1',
                status: 'cancelled',
                data: {},
            } as unknown as HttpTypes.StorePaymentSession;
            const result = mapPaymentSession(session, 'cart_1');
            expect(result.status).toBe('CANCELLED');
        });

        it('should map status failed', () => {
            const session = {
                id: 'ps_1',
                provider_id: 'pp_1',
                status: 'failed',
                data: {},
            } as unknown as HttpTypes.StorePaymentSession;
            const result = mapPaymentSession(session, 'cart_1');
            expect(result.status).toBe('FAILED');
        });

        it('should map unknown status to PENDING', () => {
            const session = {
                id: 'ps_1',
                provider_id: 'pp_1',
                status: 'unknown',
                data: {},
            } as unknown as HttpTypes.StorePaymentSession;
            const result = mapPaymentSession(session, 'cart_1');
            expect(result.status).toBe('PENDING');
        });
    });
});
