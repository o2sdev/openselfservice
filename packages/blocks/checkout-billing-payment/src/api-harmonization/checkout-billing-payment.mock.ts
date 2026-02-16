import type { CheckoutBillingPaymentBlock } from './checkout-billing-payment.model';

/**
 * Mock data for CheckoutBillingPayment block until CMS/API integration provides full config.
 */
export function getCheckoutBillingPaymentBlockMock(_id: string, locale: string): CheckoutBillingPaymentBlock {
    const isPl = locale.startsWith('pl');
    const isDe = locale.startsWith('de');

    return {
        __typename: 'CheckoutBillingPaymentBlock',
        id: 'checkout-billing-payment-mock',
        title: isPl ? 'Płatność i faktura' : isDe ? 'Rechnung & Zahlung' : 'Billing and payment',
        subtitle: isPl ? 'Wybierz metodę płatności' : isDe ? 'Zahlungsmethode wählen' : 'Select payment method',
        fields: {
            billingAddressSectionTitle: isPl ? 'Adres rozliczeniowy' : isDe ? 'Rechnungsadresse' : 'Billing address',
            sameAsShippingAddress: {
                label: isPl
                    ? 'Ten sam adres co adres dostawy'
                    : isDe
                      ? 'Gleich wie Lieferadresse'
                      : 'Same as shipping address',
            },
            billingAddress: {
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
            paymentMethod: {
                label: isPl ? 'Metoda płatności' : isDe ? 'Zahlungsmethode' : 'Payment method',
                placeholder: isPl ? 'Wybierz metodę' : isDe ? 'Methode wählen' : 'Select method',
                required: true,
                options: [
                    { value: 'transfer', label: isPl ? 'Przelew bankowy' : isDe ? 'Banküberweisung' : 'Bank transfer' },
                    { value: 'card', label: isPl ? 'Karta płatnicza' : isDe ? 'Kreditkarte' : 'Credit card' },
                    { value: 'blik', label: 'BLIK' },
                    {
                        value: 'invoice',
                        label: isPl
                            ? 'Faktura z odroczonym terminem'
                            : isDe
                              ? 'Rechnung (später bezahlen)'
                              : 'Invoice (pay later)',
                    },
                ],
            },
        },
        buttons: {
            back: {
                label: isPl ? 'Wstecz' : isDe ? 'Zurück' : 'Back',
                path: isPl ? '/zamowienie/adres-dostawy' : isDe ? '/kasse/lieferadresse' : '/checkout/shipping-address',
            },
            next: {
                label: isPl ? 'Dalej' : isDe ? 'Weiter' : 'Next',
                path: isPl ? '/zamowienie/podsumowanie' : isDe ? '/kasse/zusammenfassung' : '/checkout/summary',
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
            currentStep: 3,
        },
    };
}
