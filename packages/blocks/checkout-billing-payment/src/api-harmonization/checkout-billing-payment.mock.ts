import type { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';

/**
 * Mock data for CheckoutBillingPayment block until CMS/API integration provides full config.
 */
export function getCheckoutBillingPaymentBlockMock(_id: string, locale: string): CheckoutBillingPaymentBlock {
    const isPl = locale.startsWith('pl');

    return {
        __typename: 'CheckoutBillingPaymentBlock',
        id: 'checkout-billing-payment-mock',
        title: isPl ? 'Płatność i faktura' : 'Billing and payment',
        subtitle: isPl ? 'Wybierz metodę płatności' : 'Select payment method',
        fields: {
            billingAddressSectionTitle: isPl ? 'Adres rozliczeniowy' : 'Billing address',
            sameAsShippingAddress: {
                label: isPl ? 'Ten sam adres co adres dostawy' : 'Same as shipping address',
            },
            billingAddress: {
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
            paymentMethod: {
                label: isPl ? 'Metoda płatności' : 'Payment method',
                placeholder: isPl ? 'Wybierz metodę' : 'Select method',
                required: true,
                options: [
                    { value: 'transfer', label: isPl ? 'Przelew bankowy' : 'Bank transfer' },
                    { value: 'card', label: isPl ? 'Karta płatnicza' : 'Credit card' },
                    { value: 'blik', label: 'BLIK' },
                    { value: 'invoice', label: isPl ? 'Faktura z odroczonym terminem' : 'Invoice (pay later)' },
                ],
            },
        },
        buttons: {
            back: {
                label: isPl ? 'Wstecz' : 'Back',
                path: '/checkout/shipping-address',
            },
            next: {
                label: isPl ? 'Dalej' : 'Next',
                path: '/checkout/summary',
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
            path: '/checkout/summary',
            icon: 'ArrowRight',
        },
        stepIndicator: {
            steps: isPl
                ? ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie']
                : ['Company details', 'Delivery', 'Payment', 'Summary'],
            currentStep: 3,
        },
    };
}
