import { CMS } from '@o2s/framework/modules';

const MOCK_ORDER_CONFIRMATION_EN: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock = {
    id: 'order-confirmation-1',
    title: 'Order placed successfully!',
    subtitle: 'Thank you for your order',
    orderNumberLabel: 'Order number:',
    productsTitle: 'Products',
    productsCountLabel: 'pcs',
    summaryTitle: 'Order summary',
    subtotalLabel: 'Subtotal:',
    taxLabel: 'VAT:',
    discountLabel: 'Discount:',
    shippingLabel: 'Shipping:',
    totalLabel: 'Total:',
    shippingSection: {
        title: 'Shipping address',
        addressLabel: 'Address',
        methodLabel: 'Method',
    },
    billingSection: {
        title: 'Billing address',
        addressLabel: 'Address',
    },
    message: 'Order confirmation has been sent to your email address.',
    buttons: {
        viewOrders: 'View orders',
        continueShopping: 'Continue shopping',
    },
    viewOrdersPath: '/orders',
    continueShoppingPath: '/products',
    errors: {
        loadError: 'Failed to load order. Please try again.',
        orderNotFound: 'Order not found or unavailable.',
    },
};

const MOCK_ORDER_CONFIRMATION_DE: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock = {
    id: 'order-confirmation-1',
    title: 'Bestellung wurde aufgegeben!',
    subtitle: 'Vielen Dank für Ihren Einkauf',
    orderNumberLabel: 'Bestellnummer:',
    productsTitle: 'Produkte',
    productsCountLabel: 'Stk.',
    summaryTitle: 'Bestellübersicht',
    subtotalLabel: 'Nettosumme:',
    taxLabel: 'MwSt.:',
    discountLabel: 'Rabatt:',
    shippingLabel: 'Versand:',
    totalLabel: 'Bruttosumme:',
    shippingSection: {
        title: 'Lieferadresse',
        addressLabel: 'Adresse',
        methodLabel: 'Methode',
    },
    billingSection: {
        title: 'Rechnungsadresse',
        addressLabel: 'Adresse',
    },
    message: 'Die Bestellbestätigung wurde an Ihre E-Mail-Adresse gesendet.',
    buttons: {
        viewOrders: 'Bestellungen',
        continueShopping: 'Weiter einkaufen',
    },
    viewOrdersPath: '/bestellungen',
    continueShoppingPath: '/produkte',
    errors: {
        loadError: 'Bestellung konnte nicht geladen werden. Bitte versuchen Sie es erneut.',
        orderNotFound: 'Bestellung nicht gefunden oder nicht verfügbar.',
    },
};

const MOCK_ORDER_CONFIRMATION_PL: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock = {
    id: 'order-confirmation-1',
    title: 'Zamówienie zostało złożone!',
    subtitle: 'Dziękujemy za zakupy',
    orderNumberLabel: 'Numer zamówienia:',
    productsTitle: 'Produkty',
    productsCountLabel: 'szt.',
    summaryTitle: 'Podsumowanie zamówienia',
    subtotalLabel: 'Wartość netto:',
    taxLabel: 'VAT:',
    discountLabel: 'Rabat:',
    shippingLabel: 'Dostawa:',
    totalLabel: 'Wartość brutto:',
    shippingSection: {
        title: 'Adres dostawy',
        addressLabel: 'Adres',
        methodLabel: 'Metoda',
    },
    billingSection: {
        title: 'Adres rozliczeniowy',
        addressLabel: 'Adres',
    },
    message: 'Potwierdzenie zamówienia zostało wysłane na Twój adres email.',
    buttons: {
        viewOrders: 'Lista zamówień',
        continueShopping: 'Kontynuuj zakupy',
    },
    viewOrdersPath: '/zamowienia',
    continueShoppingPath: '/produkty',
    errors: {
        loadError: 'Nie udało się załadować zamówienia. Spróbuj ponownie.',
        orderNotFound: 'Zamówienie nie zostało znalezione lub jest niedostępne.',
    },
};

export const mapOrderConfirmationBlock = (
    options: CMS.Request.GetCmsEntryParams,
): CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock => {
    switch (options.locale) {
        case 'pl':
            return MOCK_ORDER_CONFIRMATION_PL;
        case 'de':
            return MOCK_ORDER_CONFIRMATION_DE;
        default:
            return MOCK_ORDER_CONFIRMATION_EN;
    }
};
