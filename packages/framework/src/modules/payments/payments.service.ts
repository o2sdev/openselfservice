import { Observable } from 'rxjs';

import * as Payments from './';

/**
 * Abstract payment service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class PaymentService {
    protected constructor(..._services: unknown[]) {}

    /** Returns available payment providers for the given context. */
    abstract getProviders(
        params: Payments.Request.GetProvidersParams,
        authorization?: string,
    ): Observable<Payments.Model.PaymentProviders>;

    /** Creates a new payment session. */
    abstract createSession(
        data: Payments.Request.CreateSessionBody,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession>;

    /** Returns a payment session by id. Returns undefined if not found. */
    abstract getSession(
        params: Payments.Request.GetSessionParams,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession | undefined>;

    /** Updates an existing payment session. */
    abstract updateSession(
        params: Payments.Request.UpdateSessionParams,
        data: Payments.Request.UpdateSessionBody,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession>;

    /** Cancels a payment session. */
    abstract cancelSession(params: Payments.Request.CancelSessionParams, authorization?: string): Observable<void>;
}
