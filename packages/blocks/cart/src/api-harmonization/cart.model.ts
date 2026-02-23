import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Carts, Models } from '@o2s/framework/modules';

/** Product info embedded in cart item for display */
export interface CartBlockItemProduct {
    name: string;
    subtitle?: string;
    image?: { url: string; alt?: string };
    link?: string;
}

/** Cart item with optional product info */
export interface CartBlockItem {
    id: string;
    productId: string;
    quantity: number;
    price: Models.Price.Price;
    total: Models.Price.Price;
    product?: CartBlockItemProduct;
}

/** Cart totals (subtotal, tax, total) */
export interface CartBlockTotals {
    subtotal: Models.Price.Price;
    tax: Models.Price.Price;
    total: Models.Price.Price;
}

/** Labels for summary section */
export interface CartBlockSummaryLabels {
    title: string;
    subtotalLabel: string;
    taxLabel: string;
    totalLabel: string;
    discountLabel?: string;
    shippingLabel?: string;
    freeLabel?: string;
}

/** Empty cart state labels */
export interface CartBlockEmpty {
    title: string;
    description: string;
    continueShopping?: { label: string; path: string };
}

export class CartBlock extends ApiModels.Block.Block {
    __typename!: 'CartBlock';
    title!: string;
    subtitle?: string;
    /** Tax rate (e.g. 0.23 for 23% VAT) - used when recalculating summary. Required for cart to function. */
    taxRate!: number;
    /** Default currency when cart is empty. Required for cart to function. */
    defaultCurrency!: Models.Price.Currency;
    labels!: {
        itemTotal: string;
        /** Label shown when product data is missing from cart item */
        unknownProductName: string;
    };
    actions!: {
        increaseQuantity: string;
        decreaseQuantity: string;
        quantity: string;
        remove: string;
    };
    summaryLabels!: CartBlockSummaryLabels;
    checkoutButton?: { label: string; path: string; icon?: string };
    continueShopping?: { label: string; path: string };
    empty!: CartBlockEmpty;
    items!: CartBlockItem[];
    totals!: CartBlockTotals;
    /** Applied promotions from the real cart */
    promotions?: Carts.Model.Promotion[];
    /** Total discount amount from promotions */
    discountTotal?: Models.Price.Price;
    /** Selected shipping method */
    shippingMethod?: { name: string; total: Models.Price.Price };
    promoCodeLabels?: {
        title: string;
        inputPlaceholder: string;
        applyButton: string;
        removeLabel: string;
        invalidCodeError: string;
    };
}
