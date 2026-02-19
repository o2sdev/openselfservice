import { Payments } from '@o2s/framework/modules';

type Locale = 'en' | 'de' | 'pl';

const PROVIDERS_BY_LOCALE: Record<Locale, Array<Payments.Model.PaymentProvider>> = {
    en: [
        {
            id: 'stripe',
            name: 'Stripe',
            type: 'STRIPE',
            isEnabled: true,
            requiresRedirect: true,
            config: { publishableKey: 'pk_test_mock' },
        },
        { id: 'paypal', name: 'PayPal', type: 'PAYPAL', isEnabled: true, requiresRedirect: true, config: {} },
        { id: 'system', name: 'System Payment', type: 'SYSTEM', isEnabled: true, requiresRedirect: false, config: {} },
    ],
    de: [
        {
            id: 'stripe',
            name: 'Stripe',
            type: 'STRIPE',
            isEnabled: true,
            requiresRedirect: true,
            config: { publishableKey: 'pk_test_mock' },
        },
        { id: 'paypal', name: 'PayPal', type: 'PAYPAL', isEnabled: true, requiresRedirect: true, config: {} },
        { id: 'system', name: 'Systemzahlung', type: 'SYSTEM', isEnabled: true, requiresRedirect: false, config: {} },
    ],
    pl: [
        {
            id: 'stripe',
            name: 'Stripe',
            type: 'STRIPE',
            isEnabled: true,
            requiresRedirect: true,
            config: { publishableKey: 'pk_test_mock' },
        },
        { id: 'paypal', name: 'PayPal', type: 'PAYPAL', isEnabled: true, requiresRedirect: true, config: {} },
        {
            id: 'system',
            name: 'Płatność systemowa',
            type: 'SYSTEM',
            isEnabled: true,
            requiresRedirect: false,
            config: {},
        },
    ],
};

const normalizeLocale = (locale?: string): Locale => {
    const lower = (locale ?? 'en').toLowerCase();
    if (lower.startsWith('de')) return 'de';
    if (lower.startsWith('pl')) return 'pl';
    return 'en';
};

export function getMockProviders(locale?: string): Payments.Model.PaymentProvider[] {
    return (PROVIDERS_BY_LOCALE[normalizeLocale(locale)] ?? PROVIDERS_BY_LOCALE.en) as Payments.Model.PaymentProvider[];
}

export function getMockProviderById(id: string, locale?: string): Payments.Model.PaymentProvider | undefined {
    return getMockProviders(locale).find((provider) => provider.id === id);
}

/** Map provider type to cart PaymentMethodType. */
const providerTypeToPaymentMethodType = (t: string): 'CREDIT_CARD' | 'PAYPAL' | 'BANK_TRANSFER' | 'OTHER' => {
    if (t === 'PAYPAL') return 'PAYPAL';
    if (t === 'STRIPE') return 'CREDIT_CARD';
    return 'OTHER';
};

/** Return display info for payment method by provider id (for checkout summary localization). */
export function getPaymentMethodDisplay(
    providerId: string,
    locale?: string,
): { id: string; name: string; type: 'CREDIT_CARD' | 'PAYPAL' | 'BANK_TRANSFER' | 'OTHER' } | undefined {
    const provider = getMockProviderById(providerId, locale);
    if (!provider) return undefined;
    return {
        id: provider.id,
        name: provider.name,
        type: providerTypeToPaymentMethodType(provider.type),
    };
}
