import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, of, throwError } from 'rxjs';

import { Payments } from '@o2s/framework/modules';

import { getMockProviderById, getMockProviders } from './mocks/providers.mock';
import { createPaymentSession, mapPaymentProviders, mapPaymentSession, updatePaymentSession } from './payments.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class PaymentsService implements Payments.Service {
    private sessions: Payments.Model.PaymentSession[] = [];

    getProviders(
        params: Payments.Request.GetProvidersParams,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentProviders> {
        const providers = getMockProviders(params.locale);
        return of(mapPaymentProviders(providers)).pipe(responseDelay());
    }

    createSession(
        data: Payments.Request.CreateSessionBody,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        const provider = getMockProviderById(data.providerId, 'en');

        if (!provider) {
            return throwError(() => new NotFoundException(`Payment provider with ID ${data.providerId} not found`));
        }

        // Cancel any existing sessions for this cart
        this.sessions = this.sessions.filter((s) => s.cartId !== data.cartId || s.status !== 'PENDING');

        const session = createPaymentSession(data, provider);
        this.sessions.push(session);

        return of(session).pipe(responseDelay());
    }

    getSession(
        params: Payments.Request.GetSessionParams,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession | undefined> {
        const session = this.sessions.find((s) => s.id === params.id);
        return of(mapPaymentSession(session)).pipe(responseDelay());
    }

    updateSession(
        params: Payments.Request.UpdateSessionParams,
        data: Payments.Request.UpdateSessionBody,
        _authorization: string | undefined,
    ): Observable<Payments.Model.PaymentSession> {
        const index = this.sessions.findIndex((s) => s.id === params.id);

        if (index === -1) {
            return throwError(() => new NotFoundException(`Payment session with ID ${params.id} not found`));
        }

        const existingSession = this.sessions[index];
        if (!existingSession) {
            return throwError(() => new NotFoundException(`Payment session with ID ${params.id} not found`));
        }

        const updatedSession = updatePaymentSession(existingSession, data);
        this.sessions[index] = updatedSession;

        return of(updatedSession).pipe(responseDelay());
    }

    cancelSession(params: Payments.Request.CancelSessionParams, _authorization: string | undefined): Observable<void> {
        const index = this.sessions.findIndex((s) => s.id === params.id);

        if (index === -1) {
            return throwError(() => new NotFoundException(`Payment session with ID ${params.id} not found`));
        }

        const existingSession = this.sessions[index];
        if (!existingSession) {
            return throwError(() => new NotFoundException(`Payment session with ID ${params.id} not found`));
        }

        const cancelledSession: Payments.Model.PaymentSession = { ...existingSession, status: 'CANCELLED' };
        this.sessions[index] = cancelledSession;

        return of(undefined).pipe(responseDelay());
    }
}
