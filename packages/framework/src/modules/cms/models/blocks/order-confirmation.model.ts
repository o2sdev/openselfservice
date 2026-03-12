import { Block } from '@/utils/models';

export class OrderConfirmationBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    orderNumberLabel!: string;
    productsTitle!: string;
    productsCountLabel!: string;
    summaryTitle!: string;
    subtotalLabel!: string;
    taxLabel!: string;
    discountLabel!: string;
    shippingLabel!: string;
    totalLabel!: string;
    shippingSection!: {
        title: string;
        addressLabel: string;
        methodLabel: string;
    };
    billingSection!: {
        title: string;
        addressLabel: string;
        taxIdLabel: string;
    };
    message?: string;
    buttons!: {
        viewOrders: string;
        continueShopping: string;
    };
    viewOrdersPath!: string;
    continueShoppingPath!: string;
    statusLabels!: Record<string, string>;
    errors!: {
        loadError: string;
        orderNotFound: string;
    };
}
