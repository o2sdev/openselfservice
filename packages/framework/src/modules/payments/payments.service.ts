import { Observable } from 'rxjs';

import * as Payments from './';

/**
 * Abstract payment service. Implementation is provided by API Harmonization. All methods return RxJS {@link Observable}.
 */
export abstract class PaymentService {
    protected constructor(..._services: unknown[]) {}

    abstract getProviders(
        params: Payments.Request.GetProvidersParams,
        authorization?: string,
    ): Observable<Payments.Model.PaymentProviders>;

    abstract createSession(
        data: Payments.Request.CreateSessionBody,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession>;

    abstract getSession(
        params: Payments.Request.GetSessionParams,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession | undefined>;

    abstract updateSession(
        params: Payments.Request.UpdateSessionParams,
        data: Payments.Request.UpdateSessionBody,
        authorization?: string,
    ): Observable<Payments.Model.PaymentSession>;

    abstract cancelSession(params: Payments.Request.CancelSessionParams, authorization?: string): Observable<void>;
}
