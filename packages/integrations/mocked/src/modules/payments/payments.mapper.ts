import { Payments } from '@o2s/framework/modules';

export function mapPaymentProviders(providers: Payments.Model.PaymentProvider[]): Payments.Model.PaymentProviders {
    const total = providers.length;

    return {
        data: providers,
        total,
    };
}

export function mapPaymentSession(
    session: Payments.Model.PaymentSession | undefined,
): Payments.Model.PaymentSession | undefined {
    return session;
}

export function createPaymentSession(
    data: Payments.Request.CreateSessionBody,
    provider: Payments.Model.PaymentProvider,
): Payments.Model.PaymentSession {
    const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString(); // 30 minutes
    const id = `ps_${Date.now()}`;

    const redirectUrl = provider.requiresRedirect
        ? `https://checkout.example.com/payment/${id}?returnUrl=${encodeURIComponent(data.returnUrl)}`
        : undefined;

    return {
        id,
        cartId: data.cartId,
        providerId: data.providerId,
        status: 'PENDING',
        redirectUrl,
        expiresAt,
        metadata: data.metadata,
    };
}

export function updatePaymentSession(
    existing: Payments.Model.PaymentSession,
    data: Payments.Request.UpdateSessionBody,
): Payments.Model.PaymentSession {
    return {
        ...existing,
        redirectUrl: data.returnUrl
            ? `https://checkout.example.com/payment/${existing.id}?returnUrl=${encodeURIComponent(data.returnUrl)}`
            : existing.redirectUrl,
        metadata: data.metadata ?? existing.metadata,
    };
}
