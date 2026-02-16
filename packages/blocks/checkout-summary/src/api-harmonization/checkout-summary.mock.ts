import type { CheckoutSummaryBlock } from './checkout-summary.model';

/**
 * Mock data for CheckoutSummary block until CMS/API integration provides full config.
 */
export function getCheckoutSummaryBlockMock(_id: string, locale: string): CheckoutSummaryBlock {
    const isPl = locale.startsWith('pl');
    const isDe = locale.startsWith('de');

    return {
        __typename: 'CheckoutSummaryBlock',
        id: 'checkout-summary-mock',
        title: isPl ? 'Podsumowanie zamówienia' : isDe ? 'Bestellübersicht' : 'Order summary',
        subtitle: isPl
            ? 'Sprawdź dane przed złożeniem zamówienia'
            : isDe
              ? 'Überprüfen Sie Ihre Bestellung vor dem Absenden'
              : 'Review your order before submitting',
        sections: {
            products: {
                title: isPl ? 'Produkty' : isDe ? 'Produkte' : 'Products',
                labels: {
                    quantity: isPl ? 'Ilość' : isDe ? 'Menge' : 'Quantity',
                    price: isPl ? 'Cena' : isDe ? 'Preis' : 'Price',
                    total: isPl ? 'Suma' : isDe ? 'Summe' : 'Total',
                },
            },
            company: {
                title: isPl ? 'Dane firmy' : isDe ? 'Firmendaten' : 'Company details',
                addressLabel: isPl ? 'Adres siedziby:' : isDe ? 'Firmensitz:' : 'Registered address:',
                companyNameLabel: isPl ? 'Nazwa firmy' : isDe ? 'Firmenname' : 'Company name',
                nipLabel: 'NIP',
            },
            shipping: {
                title: isPl ? 'Dostawa' : isDe ? 'Lieferung' : 'Delivery',
                addressLabel: isPl ? 'Adres dostawy:' : isDe ? 'Lieferadresse:' : 'Shipping address:',
                methodLabel: isPl ? 'Metoda dostawy:' : isDe ? 'Versandart:' : 'Shipping method:',
            },
            billing: {
                title: isPl ? 'Płatność' : isDe ? 'Zahlung' : 'Payment',
                addressLabel: isPl ? 'Adres rozliczeniowy:' : isDe ? 'Rechnungsadresse:' : 'Billing address:',
                methodLabel: isPl ? 'Metoda płatności:' : isDe ? 'Zahlungsmethode:' : 'Payment method:',
            },
            summary: {
                title: isPl ? 'Podsumowanie' : isDe ? 'Zusammenfassung' : 'Summary',
                subtotalLabel: isPl ? 'Wartość netto' : isDe ? 'Nettosumme' : 'Subtotal',
                taxLabel: isPl ? 'VAT (23%)' : isDe ? 'MwSt. (23%)' : 'VAT (23%)',
                shippingLabel: isPl ? 'Dostawa' : isDe ? 'Versand' : 'Shipping',
                totalLabel: isPl ? 'Razem' : isDe ? 'Gesamt' : 'Total',
            },
            notes: {
                title: isPl ? 'Uwagi' : isDe ? 'Anmerkungen' : 'Notes',
                comment: {
                    label: isPl ? 'Komentarz' : isDe ? 'Kommentar' : 'Comment',
                    placeholder: isPl
                        ? 'Opcjonalny komentarz...'
                        : isDe
                          ? 'Optionaler Kommentar...'
                          : 'Optional comment...',
                },
                specialInstructions: {
                    label: isPl ? 'Instrukcje specjalne' : isDe ? 'Sonderanweisungen' : 'Special instructions',
                    placeholder: isPl
                        ? 'Instrukcje dostawy...'
                        : isDe
                          ? 'Lieferanweisungen...'
                          : 'Delivery instructions...',
                },
            },
        },
        buttons: {
            back: {
                label: isPl ? 'Wstecz' : isDe ? 'Zurück' : 'Back',
                path: isPl ? '/zamowienie/platnosc' : isDe ? '/kasse/rechnung-zahlung' : '/checkout/billing-payment',
            },
            confirm: isPl ? 'Złóż zamówienie' : isDe ? 'Bestellung aufgeben' : 'Place order',
        },
        loading: {
            confirming: isPl ? 'Przetwarzanie...' : isDe ? 'Verarbeitung...' : 'Processing...',
        },
        placeholders: {
            companyData: isPl
                ? 'Dane firmy zostaną wyświetlone tutaj'
                : isDe
                  ? 'Firmendaten werden hier angezeigt'
                  : 'Company data will be displayed here',
            shippingAddress: isPl
                ? 'Adres dostawy zostanie wyświetlony tutaj'
                : isDe
                  ? 'Lieferadresse wird hier angezeigt'
                  : 'Shipping address will be displayed here',
            billingAddress: isPl
                ? 'Adres rozliczeniowy zostanie wyświetlony tutaj'
                : isDe
                  ? 'Rechnungsadresse wird hier angezeigt'
                  : 'Billing address will be displayed here',
            sameAsCompanyAddress: isPl
                ? 'Adres dostawy jest taki sam jak adres siedziby firmy'
                : isDe
                  ? 'Lieferadresse entspricht Firmensitz'
                  : 'Shipping address is same as company address',
            sameAsShippingAddress: isPl
                ? 'Adres rozliczeniowy jest taki sam jak adres dostawy'
                : isDe
                  ? 'Rechnungsadresse entspricht Lieferadresse'
                  : 'Billing address is same as shipping address',
        },
        items: [
            {
                id: 'cart-item-001',
                productId: 'PRIM-001',
                quantity: 2,
                price: { value: 89.99, currency: 'PLN' },
                total: { value: 179.98, currency: 'PLN' },
                product: {
                    name: isPl ? 'Wkład CLARIS S' : isDe ? 'CLARIS S Filterpatrone' : 'CLARIS S Filter Cartridge',
                    subtitle: isPl ? 'Filtry • JURA' : isDe ? 'Filter • JURA' : 'Filters • JURA',
                    image: { url: 'https://picsum.photos/200/200', alt: 'CLARIS S' },
                },
            },
            {
                id: 'cart-item-002',
                productId: 'PRIM-002',
                quantity: 1,
                price: { value: 24.99, currency: 'PLN' },
                total: { value: 24.99, currency: 'PLN' },
                product: {
                    name: isPl ? 'Środek do czyszczenia' : isDe ? 'Reinigungsmittel' : 'Cleaning solution',
                    subtitle: isPl ? 'Konserwacja' : isDe ? 'Wartung' : 'Maintenance',
                    image: {
                        url: 'https://picsum.photos/200/201',
                        alt: isPl ? 'Środek do czyszczenia' : isDe ? 'Reinigungsmittel' : 'Cleaning solution',
                    },
                },
            },
        ],
        totals: {
            subtotal: { value: 204.97, currency: 'PLN' },
            tax: { value: 47.14, currency: 'PLN' },
            shipping: { value: 0, currency: 'PLN' },
            total: { value: 252.11, currency: 'PLN' },
        },
        checkoutData: {
            companyData: {
                companyName: isPl ? 'Przykładowa Firma Sp. z o.o.' : isDe ? 'Beispielfirma GmbH' : 'Test Company Inc.',
                nip: '5272960923',
                street: isPl ? 'ul. Przykładowa 1' : isDe ? 'Musterstraße 1' : '123 Sample Street',
                city: isPl ? 'Warszawa' : isDe ? 'Berlin' : 'Warsaw',
                postalCode: '00-001',
                country: isPl ? 'Polska' : isDe ? 'Deutschland' : 'Poland',
            },
            shippingAddress: {
                street: isPl ? 'ul. Przykładowa 1' : isDe ? 'Musterstraße 1' : '123 Sample Street',
                city: isPl ? 'Warszawa' : isDe ? 'Berlin' : 'Warsaw',
                postalCode: '00-001',
                country: isPl ? 'Polska' : isDe ? 'Deutschland' : 'Poland',
                sameAsCompanyAddress: false,
                shippingMethod: 'courier',
                shippingMethodLabel: isPl ? 'Kurier DPD' : isDe ? 'DPD-Kurier' : 'DPD Courier',
            },
            billingPayment: {
                street: isPl ? 'ul. Przykładowa 1' : isDe ? 'Musterstraße 1' : '123 Sample Street',
                city: isPl ? 'Warszawa' : isDe ? 'Berlin' : 'Warsaw',
                postalCode: '00-001',
                country: isPl ? 'Polska' : isDe ? 'Deutschland' : 'Poland',
                sameAsShippingAddress: false,
                paymentMethod: 'transfer',
                paymentMethodLabel: isPl ? 'Przelew bankowy' : isDe ? 'Banküberweisung' : 'Bank transfer',
            },
        },
        stepIndicator: {
            steps: isPl
                ? ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie']
                : isDe
                  ? ['Firmendaten', 'Lieferung', 'Zahlung', 'Zusammenfassung']
                  : ['Company details', 'Delivery', 'Payment', 'Summary'],
            currentStep: 4,
        },
    };
}
