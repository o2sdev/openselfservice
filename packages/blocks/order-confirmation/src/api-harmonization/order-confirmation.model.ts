import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

/** Order item for confirmation display */
export interface OrderConfirmationItem {
    id: string;
    productId: string;
    quantity: number;
    price: Models.Price.Price;
    total: Models.Price.Price;
    productName?: string;
}

export class OrderConfirmationBlock extends ApiModels.Block.Block {
    __typename!: 'OrderConfirmationBlock';
    title!: string;
    subtitle?: string;
    orderNumberLabel!: string;
    productsTitle!: string;
    productsCountLabel?: string;
    summaryTitle!: string;
    subtotalLabel!: string;
    taxLabel!: string;
    totalLabel!: string;
    message?: string;
    buttons!: {
        viewOrders: string;
        continueShopping: string;
    };
    viewOrdersPath!: string;
    continueShoppingPath!: string;
    /** Order data - from API by orderId, mock for now */
    order!: {
        id: string;
        items: {
            data: OrderConfirmationItem[];
            total: number;
        };
        subtotal: Models.Price.Price;
        tax?: Models.Price.Price;
        total: Models.Price.Price;
    };
}
