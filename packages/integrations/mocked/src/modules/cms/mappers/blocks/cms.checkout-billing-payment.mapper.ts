import { CMS } from '@o2s/framework/modules';

const MOCK_CHECKOUT_BILLING_PAYMENT_EN: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock = {
    id: 'checkout-billing-payment-1',
    title: 'Payment',
    subtitle: 'Select your payment method',
    fields: {
        paymentMethod: {
            label: 'Payment method',
            placeholder: 'Select payment method',
            required: true,
        },
    },
    buttons: {
        back: { label: 'Back', path: '/checkout/shipping-address' },
        next: { label: 'Next', path: '/checkout/summary' },
    },
    errors: {
        required: 'This field is required',
        cartNotFound: 'Your cart is no longer available.',
        submitError: 'Something went wrong. Please try again.',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT',
        totalLabel: 'Total',
        discountLabel: 'Discount',
        shippingLabel: 'Shipping',
        freeLabel: 'Free',
    },
    stepIndicator: {
        steps: ['Company details', 'Delivery', 'Payment', 'Summary'],
        currentStep: 3,
    },
    cartPath: '/cart',
    orderConfirmationPath: '/order-confirmation',
};

const MOCK_CHECKOUT_BILLING_PAYMENT_DE: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock = {
    id: 'checkout-billing-payment-1',
    title: 'Zahlung',
    subtitle: 'Wählen Sie Ihre Zahlungsmethode',
    fields: {
        paymentMethod: {
            label: 'Zahlungsmethode',
            placeholder: 'Zahlungsmethode wählen',
            required: true,
        },
    },
    buttons: {
        back: { label: 'Zurück', path: '/kasse/lieferadresse' },
        next: { label: 'Weiter', path: '/kasse/zusammenfassung' },
    },
    errors: {
        required: 'Dieses Feld ist erforderlich',
        cartNotFound: 'Ihr Warenkorb ist nicht mehr verfügbar.',
        submitError: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    },
    summaryLabels: {
        title: 'Zusammenfassung',
        subtotalLabel: 'Nettosumme',
        taxLabel: 'MwSt.',
        totalLabel: 'Gesamt',
        discountLabel: 'Rabatt',
        shippingLabel: 'Versand',
        freeLabel: 'Kostenlos',
    },
    stepIndicator: {
        steps: ['Firmendaten', 'Lieferung', 'Zahlung', 'Zusammenfassung'],
        currentStep: 3,
    },
    cartPath: '/warenkorb',
    orderConfirmationPath: '/bestellbestaetigung',
};

const MOCK_CHECKOUT_BILLING_PAYMENT_PL: CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock = {
    id: 'checkout-billing-payment-1',
    title: 'Płatność',
    subtitle: 'Wybierz metodę płatności',
    fields: {
        paymentMethod: {
            label: 'Metoda płatności',
            placeholder: 'Wybierz metodę płatności',
            required: true,
        },
    },
    buttons: {
        back: { label: 'Wstecz', path: '/zamowienie/adres-dostawy' },
        next: { label: 'Dalej', path: '/zamowienie/podsumowanie' },
    },
    errors: {
        required: 'To pole jest wymagane',
        cartNotFound: 'Twój koszyk jest niedostępny.',
        submitError: 'Wystąpił błąd. Spróbuj ponownie.',
    },
    summaryLabels: {
        title: 'Podsumowanie',
        subtotalLabel: 'Wartość netto',
        taxLabel: 'VAT',
        totalLabel: 'Razem',
        discountLabel: 'Rabat',
        shippingLabel: 'Dostawa',
        freeLabel: 'Gratis',
    },
    stepIndicator: {
        steps: ['Dane firmy', 'Dostawa', 'Płatność', 'Podsumowanie'],
        currentStep: 3,
    },
    cartPath: '/koszyk',
    orderConfirmationPath: '/potwierdzenie-zamowienia',
};

export const mapCheckoutBillingPaymentBlock = (
    options: CMS.Request.GetCmsEntryParams,
): CMS.Model.CheckoutBillingPaymentBlock.CheckoutBillingPaymentBlock => {
    switch (options.locale) {
        case 'pl':
            return MOCK_CHECKOUT_BILLING_PAYMENT_PL;
        case 'de':
            return MOCK_CHECKOUT_BILLING_PAYMENT_DE;
        default:
            return MOCK_CHECKOUT_BILLING_PAYMENT_EN;
    }
};
