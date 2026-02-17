import type { CheckoutCompanyDataBlock } from './checkout-company-data.model';

/**
 * Mock data for CheckoutCompanyData block until CMS/API integration provides full config.
 */
export function getCheckoutCompanyDataBlockMock(_id: string, locale: string): CheckoutCompanyDataBlock {
    const isPl = locale.startsWith('pl');
    const isDe = locale.startsWith('de');

    return {
        __typename: 'CheckoutCompanyDataBlock',
        id: 'checkout-company-data-mock',
        title: isPl ? 'Dane firmy' : isDe ? 'Firmendaten' : 'Company details',
        subtitle: isPl
            ? 'Wypełnij dane firmowe'
            : isDe
              ? 'Geben Sie Ihre Firmendaten ein'
              : 'Fill in your company details',
        fields: {
            companyName: {
                label: isPl ? 'Nazwa firmy' : isDe ? 'Firmenname' : 'Company name',
                placeholder: isPl ? 'np. ACME Sp. z o.o.' : isDe ? 'z.B. ACME GmbH' : 'e.g. ACME Inc.',
                required: true,
            },
            nip: {
                label: isPl ? 'NIP' : isDe ? 'USt-IdNr. / Steuer-ID' : 'Tax ID (NIP)',
                placeholder: 'XXXXXXXXXX',
                required: true,
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
        },
        buttons: {
            back: {
                label: isPl ? 'Wróć do koszyka' : isDe ? 'Zurück zum Warenkorb' : 'Back to cart',
                path: isPl ? '/koszyk' : isDe ? '/warenkorb' : '/cart',
            },
            next: {
                label: isPl ? 'Dalej' : isDe ? 'Weiter' : 'Next',
                path: isPl ? '/zamowienie/adres-dostawy' : isDe ? '/kasse/lieferadresse' : '/checkout/shipping-address',
            },
        },
        errors: {
            required: isPl ? 'To pole jest wymagane' : isDe ? 'Dieses Feld ist erforderlich' : 'This field is required',
            invalidNip: isPl ? 'Nieprawidłowy NIP' : isDe ? 'Ungültige Steuer-ID' : 'Invalid tax ID',
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
            currentStep: 1,
        },
    };
}
