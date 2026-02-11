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

    // Mock order data - in production would come from API by orderId
    const subtotal = 204.97;
    const tax = 47.14;
    const total = 252.11;

    return {
        __typename: 'OrderConfirmationBlock',
        id: blockId,
        title: isPl ? 'Zamówienie zostało złożone!' : 'Order placed successfully!',
        subtitle: isPl ? 'Dziękujemy za zakupy' : 'Thank you for your order',
        orderNumberLabel: isPl ? 'Numer zamówienia:' : 'Order number:',
        productsTitle: isPl ? 'Produkty' : 'Products',
        productsCountLabel: isPl ? 'szt.' : 'pcs',
        summaryTitle: isPl ? 'Podsumowanie zamówienia' : 'Order summary',
        subtotalLabel: isPl ? 'Wartość netto:' : 'Subtotal:',
        taxLabel: isPl ? 'VAT:' : 'VAT:',
        totalLabel: isPl ? 'Wartość brutto:' : 'Total:',
        message: isPl
            ? 'Potwierdzenie zamówienia zostało wysłane na Twój adres email.'
            : 'Order confirmation has been sent to your email address.',
        buttons: {
            viewOrders: isPl ? 'Lista zamówień' : 'View orders',
            continueShopping: isPl ? 'Kontynuuj zakupy' : 'Continue shopping',
        },
        viewOrdersPath: '/orders',
        continueShoppingPath: '/shop',
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
                        productName: isPl ? 'Wkład CLARIS S' : 'CLARIS S Filter Cartridge',
                    },
                    {
                        id: 'item-2',
                        productId: 'PRIM-002',
                        quantity: 1,
                        price: { value: 24.99, currency: 'PLN' },
                        total: { value: 24.99, currency: 'PLN' },
                        productName: isPl ? 'Środek do czyszczenia' : 'Cleaning solution',
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
