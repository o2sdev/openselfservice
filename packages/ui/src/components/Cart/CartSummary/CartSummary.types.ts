import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

export interface CartSummaryPromotion {
    code: string;
    name?: string;
    type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';
    value?: string;
}

export type CartSummaryButtonAction =
    | { type: 'link'; url: string }
    | { type: 'submit'; form?: string }
    | { type: 'click'; onClick: () => void };

export interface CartSummaryButton {
    label: string;
    icon?: string;
    disabled?: boolean;
    action: CartSummaryButtonAction;
}

export interface CartSummaryProps {
    subtotal: Models.Price.Price;
    tax: Models.Price.Price;
    total: Models.Price.Price;
    discountTotal?: Models.Price.Price;
    shippingTotal?: Models.Price.Price;
    promotions?: CartSummaryPromotion[];
    notes?: {
        title: string;
        content: string;
    };
    labels: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
        discountLabel?: string;
        shippingLabel?: string;
        freeLabel?: string;
        activePromoCodesTitle?: string;
    };
    LinkComponent?: FrontendModels.Link.LinkComponent;
    primaryButton?: CartSummaryButton;
    secondaryButton?: CartSummaryButton;
}
