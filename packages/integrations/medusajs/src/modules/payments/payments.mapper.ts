import { HttpTypes } from '@medusajs/types';

import { Payments } from '@o2s/framework/modules';

export function mapPaymentProvider(provider: HttpTypes.StorePaymentProvider): Payments.Model.PaymentProvider {
    return {
        id: provider.id,
        name: provider.id, // Medusa doesn't provide a name or type, use ID
        type: provider.id,
        isEnabled: true, // Assume enabled if returned by API
        requiresRedirect: provider.id.includes('stripe') || provider.id.includes('paypal'),
        config: {},
    };
}

export function mapPaymentProviders(
    medusaProviders: HttpTypes.StorePaymentProvider[],
): Payments.Model.PaymentProviders {
    const providers = medusaProviders.map(mapPaymentProvider);

    return {
        data: providers,
        total: providers.length,
    };
}

export function mapPaymentSession(
    session: HttpTypes.StorePaymentSession,
    cartId: string,
): Payments.Model.PaymentSession {
    return {
        id: session.id,
        cartId,
        providerId: session.provider_id,
        status: mapPaymentSessionStatus(session.status),
        redirectUrl: session.data?.redirect_url as string | undefined,
        clientSecret: session.data?.client_secret as string | undefined,
        expiresAt: undefined, // Medusa Store API does not expose expires_at on payment sessions
        metadata: session.data as Record<string, unknown> | undefined,
    };
}

function mapPaymentSessionStatus(status: string): Payments.Model.PaymentSessionStatus {
    switch (status.toUpperCase()) {
        case 'AUTHORIZED':
            return 'AUTHORIZED';
        case 'CAPTURED':
            return 'CAPTURED';
        case 'CANCELLED':
            return 'CANCELLED';
        case 'FAILED':
            return 'FAILED';
        default:
            return 'PENDING';
    }
}
