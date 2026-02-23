import { CMS } from '@o2s/framework/modules';

const MOCK_CART_BLOCK_EN: CMS.Model.CartBlock.CartBlock = {
    id: 'cart-1',
    title: 'Cart',
    subtitle: 'Review and edit your order',
    taxRate: 0.23,
    defaultCurrency: 'PLN',
    labels: {
        itemTotal: 'Total',
        unknownProductName: 'Product',
    },
    actions: {
        increaseQuantity: 'Increase quantity',
        decreaseQuantity: 'Decrease quantity',
        quantity: 'Quantity',
        remove: 'Remove',
    },
    summaryLabels: {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Total',
        discountLabel: 'Discount',
        shippingLabel: 'Shipping',
        freeLabel: 'Free',
    },
    checkoutButton: {
        label: 'Proceed to checkout',
        path: '/checkout/company-data',
        icon: 'ShoppingCart',
    },
    continueShopping: {
        label: 'Continue shopping',
        path: '/products',
    },
    empty: {
        title: 'Your cart is empty',
        description: 'Add products to place an order',
        continueShopping: {
            label: 'Go to shop',
            path: '/products',
        },
    },
};

const MOCK_CART_BLOCK_DE: CMS.Model.CartBlock.CartBlock = {
    id: 'cart-1',
    title: 'Warenkorb',
    subtitle: 'Überprüfen und bearbeiten Sie Ihre Bestellung',
    taxRate: 0.23,
    defaultCurrency: 'PLN',
    labels: {
        itemTotal: 'Summe',
        unknownProductName: 'Produkt',
    },
    actions: {
        increaseQuantity: 'Menge erhöhen',
        decreaseQuantity: 'Menge verringern',
        quantity: 'Menge',
        remove: 'Entfernen',
    },
    summaryLabels: {
        title: 'Zusammenfassung',
        subtotalLabel: 'Nettosumme',
        taxLabel: 'MwSt. (23%)',
        totalLabel: 'Bruttosumme',
        discountLabel: 'Rabatt',
        shippingLabel: 'Versand',
        freeLabel: 'Kostenlos',
    },
    checkoutButton: {
        label: 'Zur Kasse',
        path: '/kasse/firmendaten',
        icon: 'ShoppingCart',
    },
    continueShopping: {
        label: 'Weiter einkaufen',
        path: '/produkte',
    },
    empty: {
        title: 'Ihr Warenkorb ist leer',
        description: 'Fügen Sie Produkte hinzu, um eine Bestellung aufzugeben',
        continueShopping: {
            label: 'Zum Shop',
            path: '/produkte',
        },
    },
};

const MOCK_CART_BLOCK_PL: CMS.Model.CartBlock.CartBlock = {
    id: 'cart-1',
    title: 'Koszyk',
    subtitle: 'Przejrzyj i edytuj swoje zamówienie',
    taxRate: 0.23,
    defaultCurrency: 'PLN',
    labels: {
        itemTotal: 'Suma',
        unknownProductName: 'Produkt',
    },
    actions: {
        increaseQuantity: 'Zwiększ ilość',
        decreaseQuantity: 'Zmniejsz ilość',
        quantity: 'Ilość',
        remove: 'Usuń',
    },
    summaryLabels: {
        title: 'Podsumowanie',
        subtotalLabel: 'Suma netto',
        taxLabel: 'VAT (23%)',
        totalLabel: 'Suma brutto',
        discountLabel: 'Rabat',
        shippingLabel: 'Dostawa',
        freeLabel: 'Gratis',
    },
    checkoutButton: {
        label: 'Przejdź do kasy',
        path: '/zamowienie/dane-firmy',
        icon: 'ShoppingCart',
    },
    continueShopping: {
        label: 'Kontynuuj zakupy',
        path: '/produkty',
    },
    empty: {
        title: 'Twój koszyk jest pusty',
        description: 'Dodaj produkty, aby złożyć zamówienie',
        continueShopping: {
            label: 'Przejdź do sklepu',
            path: '/produkty',
        },
    },
};

export const mapCartBlock = (options: CMS.Request.GetCmsEntryParams): CMS.Model.CartBlock.CartBlock => {
    switch (options.locale) {
        case 'pl':
            return MOCK_CART_BLOCK_PL;
        case 'de':
            return MOCK_CART_BLOCK_DE;
        default:
            return MOCK_CART_BLOCK_EN;
    }
};
