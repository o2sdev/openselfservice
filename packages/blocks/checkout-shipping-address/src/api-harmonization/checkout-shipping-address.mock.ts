import type { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';

/**
 * Mock data for CheckoutShippingAddress block until CMS/API integration provides full config.
 */
export function getCheckoutShippingAddressBlockMock(_id: string, locale: string): CheckoutShippingAddressBlock {
    const isPl = locale.startsWith('pl');

    return {
        __typename: 'CheckoutShippingAddressBlock',
        id: 'checkout-shipping-address-mock',
        title: isPl ? 'Adres dostawy' : 'Shipping address',
        subtitle: isPl ? 'Wybierz metodę dostawy' : 'Select shipping method',
        fields: {
            sameAsCompanyAddress: {
                label: isPl ? 'Ten sam adres co adres siedziby firmy' : 'Same as company registered address',
            },
            address: {
                street: {
                    label: isPl ? 'Ulica i numer' : 'Street and number',
                    placeholder: isPl ? 'ul. Przykładowa 1' : 'e.g. 123 Main St',
                    required: true,
                },
                city: {
                    label: isPl ? 'Miasto' : 'City',
                    placeholder: isPl ? 'Warszawa' : 'City',
                    required: true,
                },
                postalCode: {
                    label: isPl ? 'Kod pocztowy' : 'Postal code',
                    placeholder: 'XX-XXX',
                    required: true,
                },
                country: {
                    label: isPl ? 'Kraj' : 'Country',
                    placeholder: isPl ? 'Polska' : 'Country',
                    required: true,
                },
            },
            shippingMethod: {
                label: isPl ? 'Metoda dostawy' : 'Shipping method',
                placeholder: isPl ? 'Wybierz metodę' : 'Select method',
                required: true,
                options: [
                    {
                        value: 'courier',
                        label: isPl ? 'Kurier (24-48h)' : 'Courier (24-48h)',
                        price: { value: 0, currency: 'PLN' as const },
                    },
                    {
                        value: 'express',
                        label: isPl ? 'Kurier ekspres (24h)' : 'Express (24h)',
                        price: { value: 19.99, currency: 'PLN' as const },
                    },
                    {
                        value: 'pickup',
                        label: isPl ? 'Odbiór w punkcie' : 'Pickup point',
                        price: { value: 0, currency: 'PLN' as const },
                    },
                ],
            },
        },
        buttons: {
            back: {
                label: isPl ? 'Wstecz' : 'Back',
                path: '/checkout/company-data',
            },
            next: {
                label: isPl ? 'Dalej' : 'Next',
                path: '/checkout/billing-payment',
            },
        },
        errors: {
            required: isPl ? 'To pole jest wymagane' : 'This field is required',
            invalidPostalCode: isPl ? 'Nieprawidłowy kod pocztowy' : 'Invalid postal code',
        },
        summaryLabels: {
            title: isPl ? 'Podsumowanie' : 'Summary',
            subtotalLabel: isPl ? 'Wartość netto' : 'Subtotal',
            taxLabel: isPl ? 'VAT (23%)' : 'VAT (23%)',
            totalLabel: isPl ? 'Razem' : 'Total',
        },
        totals: {
            subtotal: { value: 204.97, currency: 'PLN' },
            tax: { value: 47.14, currency: 'PLN' },
            total: { value: 252.11, currency: 'PLN' },
        },
        continueShopping: {
            label: isPl ? 'Wróć do koszyka' : 'Back to cart',
            path: '/shop/cart',
        },
        checkoutButton: {
            label: isPl ? 'Dalej' : 'Next',
            path: '/checkout/billing-payment',
            icon: 'ArrowRight',
        },
    };
}
