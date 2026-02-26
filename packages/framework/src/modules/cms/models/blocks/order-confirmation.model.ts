import { Block } from '@/utils/models';

export class OrderConfirmationBlock extends Block.Block {
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
}
