import Medusa from '@medusajs/js-sdk';
import { HttpTypes } from '@medusajs/types';
import { HttpService } from '@nestjs/axios';
import {
    BadRequestException,
    Inject,
    Injectable,
    InternalServerErrorException,
    NotFoundException,
    NotImplementedException,
} from '@nestjs/common';
import { Observable, catchError, from, map, of, switchMap, throwError } from 'rxjs';

import { LoggerService } from '@o2s/utils.logger';

import { Payments } from '@o2s/framework/modules';

import { Service as MedusaJsService } from '@/modules/medusajs';

import { handleHttpError } from '../../utils/handle-http-error';

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
 * - ❌ `getSession` - Not implemented (SDK method not available)
 * - ❌ `updateSession` - Not implemented (SDK method not available)
 * - ❌ `cancelSession` - Not implemented (SDK method not available)
 *
 * The `getSession`, `updateSession`, and `cancelSession` methods throw `NotImplementedException`
 * because the Medusa.js SDK does not currently expose methods for these operations.
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
            return throwError(() => new BadRequestException('regionId is required to list payment providers'));
        }
        return from(
            this.sdk.store.payment.listPaymentProviders(
                { region_id: params.regionId },
                this.medusaJsService.getStoreApiHeaders(authorization),
            ),
        ).pipe(
            map((response: HttpTypes.StorePaymentProviderListResponse) => {
                const providers = response.payment_providers || [];
                return mapPaymentProviders(providers);
            }),
            catchError((error) => {
                // If endpoint doesn't exist or fails, return empty list
                this.logger.warn('Failed to fetch payment providers from Medusa', error);
                return of(mapPaymentProviders([]));
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
                            throw new InternalServerErrorException('Failed to create payment session');
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

    /**
     * Retrieves a payment session.
     *
     * @note Not implemented - The Medusa.js SDK does not provide methods for fetching payment sessions.
     */
    getSession(
        _params: Payments.Request.GetSessionParams,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession | undefined> {
        throw new NotImplementedException();
    }

    /**
     * Updates a payment session.
     *
     * @note Not implemented - The Medusa.js SDK does not provide methods for updating payment sessions.
     */
    updateSession(
        _params: Payments.Request.UpdateSessionParams,
        _data: Payments.Request.UpdateSessionBody,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        throw new NotImplementedException();
    }

    /**
     * Cancels (deletes) a payment session.
     *
     * @note Not implemented - The Medusa.js SDK does not provide methods for deleting payment sessions.
     */
    cancelSession(_params: Payments.Request.CancelSessionParams, _authorization: string | undefined): Observable<void> {
        throw new NotImplementedException();
    }
}
