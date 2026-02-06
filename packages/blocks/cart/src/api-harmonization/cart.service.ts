import { Injectable } from '@nestjs/common';

import { Models } from '@o2s/utils.api-harmonization';

import { CartBlock } from './cart.model';
import { GetCartBlockQuery } from './cart.request';

/**
 * CartService
 *
 * Minimal placeholder service for the cart block.
 * TODO: Implement real cart fetching logic (e.g. from an e-commerce backend)
 *       and map it to the CartBlock model.
 */
@Injectable()
export class CartService {
    // In the demo phase we return a static CartBlock-like structure.
    // This avoids wiring a real backend before the contracts are ready.
    getCartBlock(_query: GetCartBlockQuery, _headers: Models.Headers.AppHeaders): CartBlock {
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
    }
}
