import { CartBlock } from './cart.model';

/**
 * Temporary mock data for Cart block until API/service integration is available.
 * Replace with real data from CMS/Medusa when getCart, updateCart etc. are implemented.
 */
export function getCartBlockMock(_id: string, locale: string): CartBlock {
    const isPl = locale.startsWith('pl');
    const isDe = locale.startsWith('de');

    return {
        __typename: 'CartBlock',
        id: 'cart-block-mock',
        title: isPl ? 'Koszyk' : isDe ? 'Warenkorb' : 'Cart',
        subtitle: isPl
            ? 'Przejrzyj i edytuj swoje zamówienie'
            : isDe
              ? 'Überprüfen und bearbeiten Sie Ihre Bestellung'
              : 'Review and edit your order',
        taxRate: 0.23,
        defaultCurrency: 'PLN',
        labels: {
            itemTotal: isPl ? 'Suma' : isDe ? 'Summe' : 'Total',
            unknownProductName: isPl ? 'Produkt' : isDe ? 'Produkt' : 'Product',
        },
        actions: {
            increaseQuantity: isPl ? 'Zwiększ ilość' : isDe ? 'Menge erhöhen' : 'Increase quantity',
            decreaseQuantity: isPl ? 'Zmniejsz ilość' : isDe ? 'Menge verringern' : 'Decrease quantity',
            quantity: isPl ? 'Ilość' : isDe ? 'Menge' : 'Quantity',
            remove: isPl ? 'Usuń' : isDe ? 'Entfernen' : 'Remove',
        },
        summaryLabels: {
            title: isPl ? 'Podsumowanie' : isDe ? 'Zusammenfassung' : 'Summary',
            subtotalLabel: isPl ? 'Suma netto' : isDe ? 'Nettosumme' : 'Subtotal',
            taxLabel: isPl ? 'VAT (23%)' : isDe ? 'MwSt. (23%)' : 'VAT (23%)',
            totalLabel: isPl ? 'Suma brutto' : isDe ? 'Bruttosumme' : 'Total',
        },
        checkoutButton: {
            label: isPl ? 'Przejdź do kasy' : isDe ? 'Zur Kasse' : 'Proceed to checkout',
            path: '/checkout',
            icon: 'ShoppingCart',
        },
        continueShopping: {
            label: isPl ? 'Kontynuuj zakupy' : isDe ? 'Weiter einkaufen' : 'Continue shopping',
            path: '/products',
        },
        previewButtons: {
            viewPDF: {
                label: isPl ? 'Zobacz PDF' : isDe ? 'PDF anzeigen' : 'View PDF',
                icon: 'FileText',
                dialog: {
                    title: isPl ? 'Podgląd dokumentu' : isDe ? 'Dokumentvorschau' : 'Document preview',
                    description: isPl
                        ? 'Otwórz dokument w nowej karcie'
                        : isDe
                          ? 'Dokument in neuem Tab öffnen'
                          : 'Open document in new tab',
                    closeLabel: isPl ? 'Zamknij' : isDe ? 'Schließen' : 'Close',
                    fallbackMessage: isPl
                        ? 'Nie można wyświetlić podglądu'
                        : isDe
                          ? 'Vorschau kann nicht angezeigt werden'
                          : 'Preview cannot be displayed',
                    openInNewTabLabel: isPl
                        ? 'Otwórz w nowej karcie'
                        : isDe
                          ? 'In neuem Tab öffnen'
                          : 'Open in new tab',
                    pdfUrl: '/mock/document.pdf',
                },
            },
        },
        empty: {
            title: isPl ? 'Twój koszyk jest pusty' : isDe ? 'Ihr Warenkorb ist leer' : 'Your cart is empty',
            description: isPl
                ? 'Dodaj produkty, aby złożyć zamówienie'
                : isDe
                  ? 'Fügen Sie Produkte hinzu, um eine Bestellung aufzugeben'
                  : 'Add products to place an order',
            continueShopping: {
                label: isPl ? 'Przejdź do sklepu' : isDe ? 'Zum Shop' : 'Go to shop',
                path: '/products',
            },
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
                    image: {
                        url: 'https://picsum.photos/200/200',
                        alt: 'CLARIS S',
                    },
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
                    image: {
                        url: 'https://picsum.photos/200/201',
                        alt: isPl ? 'Środek do czyszczenia' : 'Cleaning solution',
                    },
                },
            },
        ],
        totals: {
            subtotal: { value: 204.97, currency: 'PLN' },
            tax: { value: 47.14, currency: 'PLN' },
            total: { value: 252.11, currency: 'PLN' },
        },
    };
}
