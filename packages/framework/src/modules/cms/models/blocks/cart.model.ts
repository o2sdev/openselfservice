import { Block } from '@/utils/models';

export class CartBlock extends Block.Block {
    title?: string;
    subtitle?: string;
    taxRate?: number;
    defaultCurrency?: string;
    labels?: {
        itemTotal: string;
        unknownProductName: string;
    };
    actions?: {
        increaseQuantity: string;
        decreaseQuantity: string;
        quantity: string;
        remove: string;
    };
    summaryLabels?: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
        discountLabel?: string;
        shippingLabel?: string;
        freeLabel?: string;
    };
    checkoutButton?: {
        label: string;
        path: string;
        icon?: string;
    };
    continueShopping?: {
        label: string;
        path: string;
    };
    empty?: {
        title: string;
        description: string;
        continueShopping?: {
            label: string;
            path: string;
        };
    };
    promoCodeLabels?: {
        title: string;
        inputPlaceholder: string;
        applyButton: string;
        removeLabel: string;
        invalidCodeError: string;
    };
}
