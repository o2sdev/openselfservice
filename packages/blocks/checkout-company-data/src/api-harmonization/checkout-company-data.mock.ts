import type { CheckoutCompanyDataBlock } from './checkout-company-data.model';

/**
 * Mock data for CheckoutCompanyData block until CMS/API integration provides full config.
 */
export function getCheckoutCompanyDataBlockMock(_id: string, locale: string): CheckoutCompanyDataBlock {
    const isPl = locale.startsWith('pl');

    return {
        __typename: 'CheckoutCompanyDataBlock',
        id: 'checkout-company-data-mock',
        title: isPl ? 'Dane firmy' : 'Company details',
        subtitle: isPl ? 'Wypełnij dane firmowe' : 'Fill in your company details',
        fields: {
            companyName: {
                label: isPl ? 'Nazwa firmy' : 'Company name',
                placeholder: isPl ? 'np. ACME Sp. z o.o.' : 'e.g. ACME Inc.',
                required: true,
            },
            nip: {
                label: isPl ? 'NIP' : 'Tax ID (NIP)',
                placeholder: 'XXXXXXXXXX',
                required: true,
            },
            addressSectionTitle: isPl ? 'Adres siedziby' : 'Registered office address',
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
        },
        buttons: {
            back: {
                label: isPl ? 'Wróć do koszyka' : 'Back to cart',
                path: '/shop/cart',
            },
            next: {
                label: isPl ? 'Dalej' : 'Next',
                path: '/checkout/shipping-address',
            },
        },
        errors: {
            required: isPl ? 'To pole jest wymagane' : 'This field is required',
            invalidNip: isPl ? 'Nieprawidłowy NIP' : 'Invalid tax ID',
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
            path: '/checkout/shipping-address',
            icon: 'ArrowRight',
        },
    };
}
