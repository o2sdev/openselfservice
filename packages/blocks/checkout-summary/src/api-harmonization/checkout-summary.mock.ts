import type { CheckoutSummaryBlock } from './checkout-summary.model';

/**
 * Mock data for CheckoutSummary block until CMS/API integration provides full config.
 */
export function getCheckoutSummaryBlockMock(_id: string, locale: string): CheckoutSummaryBlock {
    const isPl = locale.startsWith('pl');

    return {
        __typename: 'CheckoutSummaryBlock',
        id: 'checkout-summary-mock',
        title: isPl ? 'Podsumowanie zamówienia' : 'Order summary',
        subtitle: isPl ? 'Sprawdź dane przed złożeniem zamówienia' : 'Review your order before submitting',
        sections: {
            products: {
                title: isPl ? 'Produkty' : 'Products',
                labels: {
                    quantity: isPl ? 'Ilość' : 'Quantity',
                    price: isPl ? 'Cena' : 'Price',
                    total: isPl ? 'Suma' : 'Total',
                },
            },
            company: {
                title: isPl ? 'Dane firmy' : 'Company details',
                addressLabel: isPl ? 'Adres siedziby:' : 'Registered address:',
                companyNameLabel: isPl ? 'Nazwa firmy' : 'Company name',
                nipLabel: 'NIP',
            },
            shipping: {
                title: isPl ? 'Adres dostawy' : 'Shipping address',
                methodLabel: isPl ? 'Metoda dostawy:' : 'Shipping method:',
            },
            billing: {
                title: isPl ? 'Adres rozliczeniowy' : 'Billing address',
                methodLabel: isPl ? 'Metoda płatności:' : 'Payment method:',
            },
            summary: {
                title: isPl ? 'Podsumowanie' : 'Summary',
                subtotalLabel: isPl ? 'Wartość netto' : 'Subtotal',
                taxLabel: isPl ? 'VAT (23%)' : 'VAT (23%)',
                shippingLabel: isPl ? 'Dostawa' : 'Shipping',
                totalLabel: isPl ? 'Razem' : 'Total',
            },
            notes: {
                title: isPl ? 'Uwagi' : 'Notes',
                comment: {
                    label: isPl ? 'Komentarz' : 'Comment',
                    placeholder: isPl ? 'Opcjonalny komentarz...' : 'Optional comment...',
                },
                specialInstructions: {
                    label: isPl ? 'Instrukcje specjalne' : 'Special instructions',
                    placeholder: isPl ? 'Instrukcje dostawy...' : 'Delivery instructions...',
                },
            },
        },
        buttons: {
            back: {
                label: isPl ? 'Wstecz' : 'Back',
                path: '/checkout/billing-payment',
            },
            confirm: isPl ? 'Złóż zamówienie' : 'Place order',
        },
        loading: {
            confirming: isPl ? 'Przetwarzanie...' : 'Processing...',
        },
        placeholders: {
            companyData: isPl ? 'Dane firmy zostaną wyświetlone tutaj' : 'Company data will be displayed here',
            shippingAddress: isPl
                ? 'Adres dostawy zostanie wyświetlony tutaj'
                : 'Shipping address will be displayed here',
            billingAddress: isPl
                ? 'Adres rozliczeniowy zostanie wyświetlony tutaj'
                : 'Billing address will be displayed here',
            sameAsCompanyAddress: isPl
                ? 'Adres dostawy jest taki sam jak adres siedziby firmy'
                : 'Shipping address is same as company address',
            sameAsShippingAddress: isPl
                ? 'Adres rozliczeniowy jest taki sam jak adres dostawy'
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
                    name: isPl ? 'Wkład CLARIS S' : 'CLARIS S Filter Cartridge',
                    subtitle: 'Filtry • JURA',
                    image: { url: '/images/products/filter-claris.jpg', alt: 'CLARIS S' },
                },
            },
            {
                id: 'cart-item-002',
                productId: 'PRIM-002',
                quantity: 1,
                price: { value: 24.99, currency: 'PLN' },
                total: { value: 24.99, currency: 'PLN' },
                product: {
                    name: isPl ? 'Środek do czyszczenia' : 'Cleaning solution',
                    subtitle: 'Konserwacja',
                },
            },
        ],
        totals: {
            subtotal: { value: 204.97, currency: 'PLN' },
            tax: { value: 47.14, currency: 'PLN' },
            shipping: { value: 0, currency: 'PLN' },
            total: { value: 252.11, currency: 'PLN' },
        },
        stepIndicator: {
            steps: isPl
                ? ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie']
                : ['Company details', 'Delivery', 'Payment', 'Summary'],
            currentStep: 4,
        },
    };
}
