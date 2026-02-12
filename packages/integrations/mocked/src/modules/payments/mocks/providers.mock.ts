import { Payments } from '@o2s/framework/modules';

const MOCK_PROVIDERS: Payments.Model.PaymentProvider[] = [
    {
        id: 'stripe',
        name: 'Stripe',
        type: 'STRIPE',
        isEnabled: true,
        requiresRedirect: true,
        config: {
            publishableKey: 'pk_test_mock',
        },
    },
    {
        id: 'paypal',
        name: 'PayPal',
        type: 'PAYPAL',
        isEnabled: true,
        requiresRedirect: true,
        config: {},
    },
    {
        id: 'system',
        name: 'System Payment',
        type: 'SYSTEM',
        isEnabled: true,
        requiresRedirect: false,
        config: {},
    },
];

export function getMockProviders(): Payments.Model.PaymentProvider[] {
    return MOCK_PROVIDERS;
}

export function getMockProviderById(id: string): Payments.Model.PaymentProvider | undefined {
    return MOCK_PROVIDERS.find((provider) => provider.id === id);
}
