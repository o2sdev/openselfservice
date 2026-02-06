import { CartBlock } from './cart.model';

/**
 * mapCart
 *
 * Placeholder mapper for the cart block.
 * TODO: Implement real mapping from backend cart response to CartBlock once
 *       cart APIs and contracts are available.
 */
export const mapCart = (): CartBlock => {
    const block = new CartBlock();
    block.title = 'Cart';
    block.subtitle = undefined;
    block.labels = {
        itemTotal: 'Item total',
    };
    block.summary = {
        title: 'Summary',
        subtotalLabel: 'Subtotal',
        taxLabel: 'Tax',
        totalLabel: 'Total',
    };
    block.empty = {
        title: 'Your cart is empty',
        description: 'Add some products to your cart to see them here.',
    };

    return block;
};
