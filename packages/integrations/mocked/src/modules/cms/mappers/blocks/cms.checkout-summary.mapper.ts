import { CMS } from '@o2s/framework/modules';

const MOCK_CHECKOUT_SUMMARY_EN: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock = {
    id: 'checkout-summary-1',
    title: 'Order summary',
    subtitle: 'Review and place your order',
    sections: {
        products: {
            title: 'Products',
            labels: { quantity: 'Quantity', price: 'Unit price', total: 'Total' },
        },
        company: {
            title: 'Company details',
            companyNameLabel: 'Company name',
            taxIdLabel: 'Tax ID',
            addressLabel: 'Billing address',
        },
        shipping: {
            title: 'Shipping address',
            addressLabel: 'Address',
            methodLabel: 'Shipping method:',
        },
        billing: {
            title: 'Payment',
            methodLabel: 'Payment method:',
        },
        summary: {
            title: 'Summary',
            subtotalLabel: 'Subtotal',
            taxLabel: 'VAT (23%)',
            shippingLabel: 'Shipping',
            totalLabel: 'Total',
        },
        notes: {
            title: 'Notes',
            comment: { label: 'Comment', placeholder: 'Add a comment to your order...' },
            specialInstructions: {
                label: 'Special instructions',
                placeholder: 'Any special delivery instructions?',
            },
        },
    },
    buttons: {
        confirm: { label: 'Place order', path: '/order-confirmation' },
        back: { label: 'Back', path: '/checkout/billing-payment' },
    },
    loading: {
        confirming: 'Placing order...',
    },
    placeholders: {
        companyData: 'Company details not provided',
        shippingAddress: 'Shipping address not provided',
        sameAsBillingAddress: 'Same as billing address',
        billingAddress: 'Billing address not provided',
    },
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 4,
    },
};

const MOCK_CHECKOUT_SUMMARY_DE: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock = {
    id: 'checkout-summary-1',
    title: 'Bestellübersicht',
    subtitle: 'Überprüfen und bestellen',
    sections: {
        products: {
            title: 'Produkte',
            labels: { quantity: 'Menge', price: 'Stückpreis', total: 'Gesamt' },
        },
        company: {
            title: 'Firmendaten',
            companyNameLabel: 'Firmenname',
            taxIdLabel: 'Steuer-ID',
            addressLabel: 'Rechnungsadresse',
        },
        shipping: {
            title: 'Lieferadresse',
            addressLabel: 'Adresse',
            methodLabel: 'Versandart:',
        },
        billing: {
            title: 'Zahlung',
            methodLabel: 'Zahlungsmethode:',
        },
        summary: {
            title: 'Zusammenfassung',
            subtotalLabel: 'Nettosumme',
            taxLabel: 'MwSt. (23%)',
            shippingLabel: 'Versand',
            totalLabel: 'Gesamt',
        },
        notes: {
            title: 'Anmerkungen',
            comment: { label: 'Kommentar', placeholder: 'Kommentar zur Bestellung...' },
            specialInstructions: {
                label: 'Sonderanweisungen',
                placeholder: 'Besondere Lieferhinweise?',
            },
        },
    },
    buttons: {
        confirm: { label: 'Bestellung aufgeben', path: '/bestellbestaetigung' },
        back: { label: 'Zurück', path: '/kasse/rechnung-zahlung' },
    },
    loading: {
        confirming: 'Bestellung wird aufgegeben...',
    },
    placeholders: {
        companyData: 'Firmendaten nicht angegeben',
        shippingAddress: 'Lieferadresse nicht angegeben',
        sameAsBillingAddress: 'Gleich wie Rechnungsadresse',
        billingAddress: 'Rechnungsadresse nicht angegeben',
    },
    stepIndicator: {
        steps: ['Firmendaten', 'Lieferung', 'Zahlung', 'Zusammenfassung'],
        currentStep: 4,
    },
};

const MOCK_CHECKOUT_SUMMARY_PL: CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock = {
    id: 'checkout-summary-1',
    title: 'Podsumowanie zamówienia',
    subtitle: 'Sprawdź i złóż zamówienie',
    sections: {
        products: {
            title: 'Produkty',
            labels: { quantity: 'Ilość', price: 'Cena jedn.', total: 'Razem' },
        },
        company: {
            title: 'Dane firmy',
            companyNameLabel: 'Nazwa firmy',
            taxIdLabel: 'NIP',
            addressLabel: 'Adres rozliczeniowy',
        },
        shipping: {
            title: 'Adres dostawy',
            addressLabel: 'Adres',
            methodLabel: 'Metoda dostawy:',
        },
        billing: {
            title: 'Płatność',
            methodLabel: 'Metoda płatności:',
        },
        summary: {
            title: 'Podsumowanie',
            subtotalLabel: 'Wartość netto',
            taxLabel: 'VAT (23%)',
            shippingLabel: 'Dostawa',
            totalLabel: 'Razem',
        },
        notes: {
            title: 'Uwagi',
            comment: { label: 'Komentarz', placeholder: 'Dodaj komentarz do zamówienia...' },
            specialInstructions: {
                label: 'Specjalne instrukcje',
                placeholder: 'Szczególne instrukcje dostawy?',
            },
        },
    },
    buttons: {
        confirm: { label: 'Złóż zamówienie', path: '/potwierdzenie-zamowienia' },
        back: { label: 'Wstecz', path: '/zamowienie/platnosc' },
    },
    loading: {
        confirming: 'Składanie zamówienia...',
    },
    placeholders: {
        companyData: 'Dane firmy nie zostały podane',
        shippingAddress: 'Adres dostawy nie został podany',
        sameAsBillingAddress: 'Ten sam adres co rozliczeniowy',
        billingAddress: 'Adres rozliczeniowy nie został podany',
    },
    stepIndicator: {
        steps: ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie'],
        currentStep: 4,
    },
};

export const mapCheckoutSummaryBlock = (
    options: CMS.Request.GetCmsEntryParams,
): CMS.Model.CheckoutSummaryBlock.CheckoutSummaryBlock => {
    switch (options.locale) {
        case 'pl':
            return MOCK_CHECKOUT_SUMMARY_PL;
        case 'de':
            return MOCK_CHECKOUT_SUMMARY_DE;
        default:
            return MOCK_CHECKOUT_SUMMARY_EN;
    }
};
