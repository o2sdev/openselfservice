import type { CheckoutShippingAddressBlock } from './checkout-shipping-address.model';

/**
 * Mock data for CheckoutShippingAddress block until CMS/API integration provides full config.
 */
export function getCheckoutShippingAddressBlockMock(_id: string, locale: string): CheckoutShippingAddressBlock {
    const isPl = locale.startsWith('pl');
    const isDe = locale.startsWith('de');

    return {
        __typename: 'CheckoutShippingAddressBlock',
        id: 'checkout-shipping-address-mock',
        title: isPl ? 'Adres dostawy' : isDe ? 'Lieferadresse' : 'Shipping address',
        subtitle: isPl ? 'Wybierz metodę dostawy' : isDe ? 'Wählen Sie die Versandart' : 'Select shipping method',
        fields: {
            sameAsCompanyAddress: {
                label: isPl
                    ? 'Ten sam adres co adres siedziby firmy'
                    : isDe
                      ? 'Gleich wie Firmensitz'
                      : 'Same as company registered address',
            },
            address: {
                street: {
                    label: isPl ? 'Ulica i numer' : isDe ? 'Straße und Hausnummer' : 'Street and number',
                    placeholder: isPl ? 'ul. Przykładowa 1' : isDe ? 'z.B. Musterstraße 1' : 'e.g. 123 Main St',
                    required: true,
                },
                city: {
                    label: isPl ? 'Miasto' : isDe ? 'Stadt' : 'City',
                    placeholder: isPl ? 'Warszawa' : isDe ? 'Berlin' : 'City',
                    required: true,
                },
                postalCode: {
                    label: isPl ? 'Kod pocztowy' : isDe ? 'Postleitzahl' : 'Postal code',
                    placeholder: 'XX-XXX',
                    required: true,
                },
                country: {
                    label: isPl ? 'Kraj' : isDe ? 'Land' : 'Country',
                    placeholder: isPl ? 'Polska' : isDe ? 'Deutschland' : 'Country',
                    required: true,
                },
            },
            shippingMethod: {
                label: isPl ? 'Metoda dostawy' : isDe ? 'Versandart' : 'Shipping method',
                placeholder: isPl ? 'Wybierz metodę' : isDe ? 'Methode wählen' : 'Select method',
                required: true,
                options: [
                    {
                        value: 'courier',
                        label: isPl ? 'Kurier (24-48h)' : isDe ? 'Kurier (24-48h)' : 'Courier (24-48h)',
                        price: { value: 0, currency: 'PLN' as const },
                    },
                    {
                        value: 'express',
                        label: isPl ? 'Kurier ekspres (24h)' : isDe ? 'Express (24h)' : 'Express (24h)',
                        price: { value: 19.99, currency: 'PLN' as const },
                    },
                    {
                        value: 'pickup',
                        label: isPl ? 'Odbiór w punkcie' : isDe ? 'Abholung' : 'Pickup point',
                        price: { value: 0, currency: 'PLN' as const },
                    },
                ],
            },
        },
        buttons: {
            back: {
                label: isPl ? 'Wstecz' : isDe ? 'Zurück' : 'Back',
                path: isPl ? '/zamowienie/dane-firmy' : isDe ? '/kasse/firmendaten' : '/checkout/company-data',
            },
            next: {
                label: isPl ? 'Dalej' : isDe ? 'Weiter' : 'Next',
                path: isPl
                    ? '/zamowienie/platnosc-rozliczenie'
                    : isDe
                      ? '/kasse/rechnung-zahlung'
                      : '/checkout/billing-payment',
            },
        },
        errors: {
            required: isPl ? 'To pole jest wymagane' : isDe ? 'Dieses Feld ist erforderlich' : 'This field is required',
            invalidPostalCode: isPl
                ? 'Nieprawidłowy kod pocztowy'
                : isDe
                  ? 'Ungültige Postleitzahl'
                  : 'Invalid postal code',
        },
        summaryLabels: {
            title: isPl ? 'Podsumowanie' : isDe ? 'Zusammenfassung' : 'Summary',
            subtotalLabel: isPl ? 'Wartość netto' : isDe ? 'Nettosumme' : 'Subtotal',
            taxLabel: isPl ? 'VAT (23%)' : isDe ? 'MwSt. (23%)' : 'VAT (23%)',
            totalLabel: isPl ? 'Razem' : isDe ? 'Gesamt' : 'Total',
        },
        totals: {
            subtotal: { value: 204.97, currency: 'PLN' },
            tax: { value: 47.14, currency: 'PLN' },
            total: { value: 252.11, currency: 'PLN' },
        },
        stepIndicator: {
            steps: isPl
                ? ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie']
                : isDe
                  ? ['Firmendaten', 'Lieferung', 'Zahlung', 'Zusammenfassung']
                  : ['Company details', 'Delivery', 'Payment', 'Summary'],
            currentStep: 2,
        },
    };
}
