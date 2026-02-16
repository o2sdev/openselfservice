import { HttpTypes } from '@medusajs/types';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { firstValueFrom, of, throwError } from 'rxjs';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import { Payments } from '@o2s/framework/modules';

import { PaymentsService } from './payments.service';

const BASE_URL = 'https://api.medusa.test';

const minimalCart = {
    id: 'cart_1',
    currency_code: 'eur',
    items: [],
};

const minimalPaymentSession = {
    id: 'ps_1',
    provider_id: 'pp_stripe',
    status: 'pending',
    data: { redirect_url: 'https://example.com', client_secret: 'secret' },
};

describe('PaymentsService', () => {
    let service: PaymentsService;
    let mockSdk: {
        store: {
            payment: {
                listPaymentProviders: ReturnType<typeof vi.fn>;
                initiatePaymentSession: ReturnType<typeof vi.fn>;
            };
            cart: { retrieve: ReturnType<typeof vi.fn> };
        };
    };
    let mockMedusaJsService: {
        getSdk: ReturnType<typeof vi.fn>;
        getStoreApiHeaders: ReturnType<typeof vi.fn>;
        getBaseUrl: ReturnType<typeof vi.fn>;
    };
    let mockHttpService: { post: ReturnType<typeof vi.fn>; delete: ReturnType<typeof vi.fn> };
    let mockLogger: { debug: ReturnType<typeof vi.fn>; warn: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        vi.restoreAllMocks();
        mockSdk = {
            store: {
                payment: {
                    listPaymentProviders: vi.fn(),
                    initiatePaymentSession: vi.fn(),
                },
                cart: {
                    retrieve: vi.fn(),
                },
            },
        };
        mockMedusaJsService = {
            getSdk: vi.fn(() => mockSdk),
            getStoreApiHeaders: vi.fn(() => ({})),
            getBaseUrl: vi.fn(() => BASE_URL),
        };
        mockHttpService = {
            post: vi.fn(),
            delete: vi.fn(),
        };
        mockLogger = { debug: vi.fn(), warn: vi.fn() };

        service = new PaymentsService(
            mockHttpService as never,
            mockLogger as unknown as import('@o2s/utils.logger').LoggerService,
            mockMedusaJsService as unknown as import('@/modules/medusajs').Service,
        );
    });

    describe('getProviders', () => {
        it('should throw BadRequestException when regionId is missing', () => {
            expect(() => service.getProviders({} as Payments.Request.GetProvidersParams, 'Bearer token')).toThrow(
                BadRequestException,
            );
            expect(() => service.getProviders({} as Payments.Request.GetProvidersParams, 'Bearer token')).toThrow(
                'regionId is required',
            );
        });

        it('should call listPaymentProviders and return mapped providers', async () => {
            mockSdk.store.payment.listPaymentProviders.mockResolvedValue({
                payment_providers: [{ id: 'pp_stripe' }],
            } as HttpTypes.StorePaymentProviderListResponse);

            const result = await firstValueFrom(
                service.getProviders({ regionId: 'reg_1' } as Payments.Request.GetProvidersParams, 'Bearer token'),
            );

            expect(mockSdk.store.payment.listPaymentProviders).toHaveBeenCalledWith(
                { region_id: 'reg_1' },
                expect.any(Object),
            );
            expect(result.data).toHaveLength(1);
            expect(result.data[0]?.id).toBe('pp_stripe');
            expect(result.total).toBe(1);
        });

        it('should return empty list on error without throwing', async () => {
            mockSdk.store.payment.listPaymentProviders.mockRejectedValue(new Error('Network error'));

            const result = await firstValueFrom(
                service.getProviders({ regionId: 'reg_1' } as Payments.Request.GetProvidersParams, 'Bearer token'),
            );

            expect(result.data).toHaveLength(0);
            expect(result.total).toBe(0);
            expect(mockLogger.warn).toHaveBeenCalledWith(
                'Failed to fetch payment providers from Medusa',
                expect.any(Error),
            );
        });
    });

    describe('createSession', () => {
        it('should retrieve cart then initiatePaymentSession and return mapPaymentSession', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });
            mockSdk.store.payment.initiatePaymentSession.mockResolvedValue({
                payment_collection: {
                    payment_sessions: [minimalPaymentSession],
                },
            } as unknown as HttpTypes.StorePaymentCollectionResponse);

            const result = await firstValueFrom(
                service.createSession(
                    { cartId: 'cart_1', providerId: 'pp_stripe' } as Payments.Request.CreateSessionBody,
                    'Bearer token',
                ),
            );

            expect(mockSdk.store.cart.retrieve).toHaveBeenCalledWith('cart_1', {}, expect.any(Object));
            expect(mockSdk.store.payment.initiatePaymentSession).toHaveBeenCalledWith(
                minimalCart,
                { provider_id: 'pp_stripe' },
                {},
                expect.any(Object),
            );
            expect(result.id).toBe('ps_1');
            expect(result.cartId).toBe('cart_1');
            expect(result.providerId).toBe('pp_stripe');
        });

        it('should use session fallback when no exact provider match', async () => {
            const otherSession = {
                id: 'ps_other',
                provider_id: 'pp_manual',
                status: 'pending',
                data: {},
            };
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });
            mockSdk.store.payment.initiatePaymentSession.mockResolvedValue({
                payment_collection: {
                    payment_sessions: [otherSession],
                },
            } as unknown as HttpTypes.StorePaymentCollectionResponse);

            const result = await firstValueFrom(
                service.createSession(
                    { cartId: 'cart_1', providerId: 'pp_stripe' } as Payments.Request.CreateSessionBody,
                    'Bearer token',
                ),
            );

            expect(result.id).toBe('ps_other');
            expect(result.providerId).toBe('pp_manual');
        });

        it('should throw when sessions array is empty', async () => {
            mockSdk.store.cart.retrieve.mockResolvedValue({ cart: minimalCart });
            mockSdk.store.payment.initiatePaymentSession.mockResolvedValue({
                payment_collection: { payment_sessions: [] },
            } as unknown as HttpTypes.StorePaymentCollectionResponse);

            await expect(
                firstValueFrom(
                    service.createSession(
                        { cartId: 'cart_1', providerId: 'pp_stripe' } as Payments.Request.CreateSessionBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow('Failed to create payment session');
        });

        it('should throw NotFoundException when cart is 404', async () => {
            mockSdk.store.cart.retrieve.mockRejectedValue({ response: { status: 404 } });

            await expect(
                firstValueFrom(
                    service.createSession(
                        { cartId: 'missing' as string, providerId: 'pp_stripe' } as Payments.Request.CreateSessionBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow(NotFoundException);
        });
    });

    describe('getSession', () => {
        it('should return of(undefined)', async () => {
            const result = await firstValueFrom(
                service.getSession({ id: 'ps_1' } as Payments.Request.GetSessionParams, 'Bearer token'),
            );
            expect(result).toBeUndefined();
        });
    });

    describe('updateSession', () => {
        it('should post to payment-sessions and return mapped session', async () => {
            mockHttpService.post.mockReturnValue(
                of({ data: { payment_session: { ...minimalPaymentSession, id: 'ps_updated' } } }),
            );

            const result = await firstValueFrom(
                service.updateSession(
                    { id: 'ps_1' } as Payments.Request.UpdateSessionParams,
                    { returnUrl: 'https://example.com/return' } as Payments.Request.UpdateSessionBody,
                    'Bearer token',
                ),
            );

            expect(mockHttpService.post).toHaveBeenCalledWith(
                `${BASE_URL}/store/payment-sessions/ps_1`,
                { return_url: 'https://example.com/return' },
                expect.objectContaining({ headers: expect.any(Object) }),
            );
            expect(result.id).toBe('ps_updated');
        });

        it('should throw NotFoundException on 404', async () => {
            mockHttpService.post.mockReturnValue(throwError(() => ({ response: { status: 404 } })));

            await expect(
                firstValueFrom(
                    service.updateSession(
                        { id: 'missing' } as Payments.Request.UpdateSessionParams,
                        {} as Payments.Request.UpdateSessionBody,
                        'Bearer token',
                    ),
                ),
            ).rejects.toThrow(NotFoundException);
        });
    });

    describe('cancelSession', () => {
        it('should delete payment-sessions and return void', async () => {
            mockHttpService.delete.mockReturnValue(of({}));

            await firstValueFrom(
                service.cancelSession({ id: 'ps_1' } as Payments.Request.CancelSessionParams, 'Bearer token'),
            );

            expect(mockHttpService.delete).toHaveBeenCalledWith(
                `${BASE_URL}/store/payment-sessions/ps_1`,
                expect.objectContaining({ headers: expect.any(Object) }),
            );
        });

        it('should throw NotFoundException on 404', async () => {
            mockHttpService.delete.mockReturnValue(throwError(() => ({ response: { status: 404 } })));

            await expect(
                firstValueFrom(
                    service.cancelSession({ id: 'missing' } as Payments.Request.CancelSessionParams, 'Bearer token'),
                ),
            ).rejects.toThrow(NotFoundException);
        });
    });
});
