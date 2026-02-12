import { HttpTypes } from '@medusajs/types';

import { Payments } from '@o2s/framework/modules';

export function mapPaymentProvider(medusaProvider: HttpTypes.StorePaymentProvider): Payments.Model.PaymentProvider {
    return {
        id: medusaProvider.id,
        name: medusaProvider.id, // Medusa doesn't provide a name, use ID
        type: mapProviderType(medusaProvider.id),
        isEnabled: true, // Assume enabled if returned by API
        requiresRedirect: medusaProvider.id.includes('stripe') || medusaProvider.id.includes('paypal'),
        config: {},
    };
}

export function mapPaymentProviders(
    medusaProviders: HttpTypes.StorePaymentProvider[],
    limit = 10,
    offset = 0,
): Payments.Model.PaymentProviders {
    const providers = medusaProviders.map(mapPaymentProvider);

    return {
        data: providers.slice(offset, offset + limit),
        total: providers.length,
    };
}

export function mapPaymentSession(
    medusaSession: HttpTypes.StorePaymentSession,
    cartId: string,
): Payments.Model.PaymentSession {
    return {
        id: medusaSession.id,
        cartId,
        providerId: medusaSession.provider_id,
        status: mapPaymentSessionStatus(medusaSession.status),
        redirectUrl: medusaSession.data?.redirect_url as string | undefined,
        clientSecret: medusaSession.data?.client_secret as string | undefined,
        expiresAt: (medusaSession as unknown as Record<string, unknown>).expires_at as string | undefined,
        metadata: medusaSession.data as Record<string, unknown> | undefined,
    };
}

function mapProviderType(providerId: string): Payments.Model.PaymentProviderType {
    const id = providerId.toLowerCase();
    if (id.includes('stripe')) return 'STRIPE';
    if (id.includes('paypal')) return 'PAYPAL';
    if (id.includes('adyen')) return 'ADYEN';
    if (id.includes('system') || id.includes('manual')) return 'SYSTEM';
    return 'OTHER';
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
