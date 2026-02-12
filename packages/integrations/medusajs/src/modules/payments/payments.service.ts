import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Payments } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../utils/handle-http-error';

import { mapPaymentProviders, mapPaymentSession } from './payments.mapper';

/**
 * Medusa.js implementation of the Payments service.
 *
 * Uses Medusa Store API for payment operations.
 * Requires a custom Medusa auth plugin to validate SSO tokens passed via the authorization header.
 *
 * ## SDK Usage Status
 *
 * - ✅ `getProviders` - Uses SDK: `sdk.store.payment.listPaymentProviders()`
 * - ✅ `createSession` - Uses SDK: `sdk.store.payment.initiatePaymentSession()`
 * - ⚠️ `updateSession` - Uses raw HTTP (SDK method not available)
 * - ⚠️ `cancelSession` - Uses raw HTTP (SDK method not available)
 *
 * The `updateSession` and `cancelSession` methods use direct HTTP requests because
 * the Medusa.js SDK does not currently expose methods for these operations.
 */
@Injectable()
export class PaymentsService extends Payments.Service {
    private readonly sdk: Medusa;

    constructor(
        protected httpClient: HttpService,
        @Inject(LoggerService) protected readonly logger: LoggerService,
        private readonly medusaJsService: MedusaJsService,
    ) {
        super();
        this.sdk = this.medusaJsService.getSdk();
    }

    getProviders(
        params: Payments.Request.GetProvidersParams,
        authorization: string | undefined,
    ): Observable<Payments.Model.PaymentProviders> {
        if (!params.regionId) {
            throw new BadRequestException('regionId is required to list payment providers');
        }
        return from(
            this.sdk.store.payment.listPaymentProviders(
                { region_id: params.regionId },
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StorePaymentProviderListResponse) => {
                const providers = response.payment_providers || [];
                return mapPaymentProviders(providers, 10, 0);
            }),
            catchError((error) => {
                // If endpoint doesn't exist or fails, return empty list
                this.logger.warn('Failed to fetch payment providers from Medusa', error);
                return of(mapPaymentProviders([], 10, 0));
            }),
        );
    }

    createSession(
        data: Payments.Request.CreateSessionBody,
        authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        // Use SDK's initiatePaymentSession which handles both payment collection creation
        // and payment session creation in a single call
        return from(
            this.sdk.store.cart.retrieve(data.cartId, {}, this.medusaJsService.getStoreApiHeaders(authorization)),
        ).pipe(
            switchMap((cartResponse: HttpTypes.StoreCartResponse) => {
                const cart = cartResponse.cart;
                if (!cart) {
                    return throwError(() => new NotFoundException(`Cart with ID ${data.cartId} not found`));
                }

                return from(
                    this.sdk.store.payment.initiatePaymentSession(
                        cart,
                        { provider_id: data.providerId },
                        {},
                        this.medusaJsService.getStoreApiHeaders(authorization),
                    ),
                ).pipe(
                    map((response: HttpTypes.StorePaymentCollectionResponse) => {
                        const paymentCollection = response.payment_collection;
                        const sessions = paymentCollection?.payment_sessions || [];
                        // Find the session for the requested provider
                        const session =
                            sessions.find((s) => s.provider_id === data.providerId) || sessions[sessions.length - 1];
                        if (!session) {
                            throw new Error('Failed to create payment session');
                        }
                        return mapPaymentSession(session, data.cartId);
                    }),
                );
            }),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return throwError(() => new NotFoundException(`Cart with ID ${data.cartId} not found`));
                }
                return handleHttpError(error);
            }),
        );
    }

    getSession(
        _params: Payments.Request.GetSessionParams,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession | undefined> {
        // Medusa Store API doesn't have a direct endpoint to get payment session by ID
        // Payment sessions are accessed through payment collections
        // Since we don't have the collection ID or cart ID, we return undefined
        // In practice, payment sessions should be retrieved via the cart's payment collection
        // This method is primarily used when we have the session ID from cart metadata
        // For a complete implementation, we would need to:
        // 1. Store payment_collection_id in cart metadata when creating session
        // 2. Retrieve collection by ID and find session within it
        // For now, return undefined as Medusa doesn't provide a direct lookup
        return of(undefined);
    }

    /**
     * Updates a payment session using raw HTTP request.
     *
     * @note The Medusa.js SDK does not provide methods for updating payment sessions.
     * This method uses a direct HTTP POST request to `/store/payment-sessions/{id}`.
     * Once the SDK adds support for this operation, this should be migrated to use the SDK method.
     *
     * @see {@link https://docs.medusajs.com/api/store#payment-sessions_postpayment-sessionsid Medusa Store API - Update Payment Session}
     */
    updateSession(
        params: Payments.Request.UpdateSessionParams,
        data: Payments.Request.UpdateSessionBody,
        authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        const updatePayload: Record<string, unknown> = {};
        if (data.returnUrl) {
            updatePayload['return_url'] = data.returnUrl;
        }
        if (data.metadata) {
            updatePayload['metadata'] = data.metadata;
        }

        return from(
            this.httpClient
                .post<{
                    payment_session: {
                        id: string;
                        status: string;
                        provider_id: string;
                        data: unknown;
                        expires_at?: string;
                    };
                }>(`${this.medusaJsService.getBaseUrl()}/store/payment-sessions/${params.id}`, updatePayload, {
                    headers: this.medusaJsService.getStoreApiHeaders(authorization),
                })
                .toPromise(),
        ).pipe(
            map((response) => {
                if (!response?.data) {
                    throw new Error('Failed to update payment session');
                }
                // We don't have cart ID here, so we'll use empty string
                // In practice, this should be retrieved from the session or stored context
                const cartId = '';
                return mapPaymentSession(
                    response.data.payment_session as unknown as HttpTypes.StorePaymentSession,
                    cartId,
                );
            }),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return throwError(() => new NotFoundException(`Payment session with ID ${params.id} not found`));
                }
                return handleHttpError(error);
            }),
        );
    }

    /**
     * Cancels (deletes) a payment session using raw HTTP request.
     *
     * @note The Medusa.js SDK does not provide methods for deleting payment sessions.
     * This method uses a direct HTTP DELETE request to `/store/payment-sessions/{id}`.
     * Once the SDK adds support for this operation, this should be migrated to use the SDK method.
     *
     * @see {@link https://docs.medusajs.com/api/store#payment-sessions_deletepayment-sessionsid Medusa Store API - Delete Payment Session}
     */
    cancelSession(params: Payments.Request.CancelSessionParams, authorization: string | undefined): Observable<void> {
        return from(
            this.httpClient
                .delete(`${this.medusaJsService.getBaseUrl()}/store/payment-sessions/${params.id}`, {
                    headers: this.medusaJsService.getStoreApiHeaders(authorization),
                })
                .toPromise(),
        ).pipe(
            map(() => undefined),
            catchError((error) => {
                if (error.response?.status === 404) {
                    return throwError(() => new NotFoundException(`Payment session with ID ${params.id} not found`));
                }
                return handleHttpError(error);
            }),
        );
    }
}
