import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

export interface CartSummaryPromotion {
    code: string;
    name?: string;
    type?: 'PERCENTAGE' | 'FIXED_AMOUNT' | 'FREE_SHIPPING';
    value?: string;
}

export interface CartSummaryProps {
    subtotal: Models.Price.Price;
    tax: Models.Price.Price;
    total: Models.Price.Price;
    discountTotal?: Models.Price.Price;
    shippingMethod?: { name: string; total: Models.Price.Price };
    promotions?: CartSummaryPromotion[];
    labels: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
        discountLabel?: string;
        shippingLabel?: string;
        freeLabel?: string;
    };
    LinkComponent?: FrontendModels.Link.LinkComponent;
    checkoutButton?: Models.Link.Link;
    continueShopping?: Models.Link.Link;
    /** When true, renders checkout as button with loading state instead of link */
    isCheckoutLoading?: boolean;
    onCheckoutClick?: () => void;
    /** Label shown when checkout button is in loading state */
    loadingLabel?: string;
}
