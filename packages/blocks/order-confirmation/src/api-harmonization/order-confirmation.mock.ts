import type { OrderConfirmationBlock } from './order-confirmation.model';

/**
 * Mock data for OrderConfirmation block until API integration provides order by orderId.
 */
export function getOrderConfirmationBlockMock(
    blockId: string,
    orderId: string,
    locale: string,
): OrderConfirmationBlock {
    const isPl = locale.startsWith('pl');
    const isDe = locale.startsWith('de');

    // Mock order data - in production would come from API by orderId
    const subtotal = 204.97;
    const tax = 47.14;
    const total = 252.11;

    return {
        __typename: 'OrderConfirmationBlock',
        id: blockId,
        title: isPl
            ? 'Zamówienie zostało złożone!'
            : isDe
              ? 'Bestellung wurde aufgegeben!'
              : 'Order placed successfully!',
        subtitle: isPl ? 'Dziękujemy za zakupy' : isDe ? 'Vielen Dank für Ihren Einkauf' : 'Thank you for your order',
        orderNumberLabel: isPl ? 'Numer zamówienia:' : isDe ? 'Bestellnummer:' : 'Order number:',
        productsTitle: isPl ? 'Produkty' : isDe ? 'Produkte' : 'Products',
        productsCountLabel: isPl ? 'szt.' : isDe ? 'Stk.' : 'pcs',
        summaryTitle: isPl ? 'Podsumowanie zamówienia' : isDe ? 'Bestellübersicht' : 'Order summary',
        subtotalLabel: isPl ? 'Wartość netto:' : isDe ? 'Nettosumme:' : 'Subtotal:',
        taxLabel: isPl ? 'VAT:' : isDe ? 'MwSt.:' : 'VAT:',
        totalLabel: isPl ? 'Wartość brutto:' : isDe ? 'Bruttosumme:' : 'Total:',
        message: isPl
            ? 'Potwierdzenie zamówienia zostało wysłane na Twój adres email.'
            : isDe
              ? 'Die Bestellbestätigung wurde an Ihre E-Mail-Adresse gesendet.'
              : 'Order confirmation has been sent to your email address.',
        buttons: {
            viewOrders: isPl ? 'Lista zamówień' : isDe ? 'Bestellungen' : 'View orders',
            continueShopping: isPl ? 'Kontynuuj zakupy' : isDe ? 'Weiter einkaufen' : 'Continue shopping',
        },
        viewOrdersPath: isPl ? '/zamowienia' : isDe ? '/bestellungen' : '/orders',
        continueShoppingPath: isPl ? '/produkty' : isDe ? '/produkte' : '/products',
        order: {
            id: orderId,
            items: {
                data: [
                    {
                        id: 'item-1',
                        productId: 'PRIM-001',
                        quantity: 2,
                        price: { value: 89.99, currency: 'PLN' },
                        total: { value: 179.98, currency: 'PLN' },
                        productName: isPl
                            ? 'Wkład CLARIS S'
                            : isDe
                              ? 'CLARIS S Filterpatrone'
                              : 'CLARIS S Filter Cartridge',
                    },
                    {
                        id: 'item-2',
                        productId: 'PRIM-002',
                        quantity: 1,
                        price: { value: 24.99, currency: 'PLN' },
                        total: { value: 24.99, currency: 'PLN' },
                        productName: isPl ? 'Środek do czyszczenia' : isDe ? 'Reinigungsmittel' : 'Cleaning solution',
                    },
                ],
                total: 3,
            },
            subtotal: { value: subtotal, currency: 'PLN' },
            tax: { value: tax, currency: 'PLN' },
            total: { value: total, currency: 'PLN' },
        },
    };
}
