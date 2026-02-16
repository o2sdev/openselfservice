import { Models } from '@o2s/framework/modules';

import { Models as FrontendModels } from '@o2s/utils.frontend';

export interface CartSummaryProps {
    subtotal: Models.Price.Price;
    tax: Models.Price.Price;
    total: Models.Price.Price;
    labels: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
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
