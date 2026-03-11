import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { CMS, Models } from '@o2s/framework/modules';

export class CartBlock extends ApiModels.Block.Block {
    __typename!: 'CartBlock';
    title!: string;
    subtitle?: string;
    defaultCurrency!: Models.Price.Currency;
    labels!: CMS.Model.CartBlock.CartBlock['labels'];
    errors!: CMS.Model.CartBlock.CartBlock['errors'];
    actions!: CMS.Model.CartBlock.CartBlock['actions'];
    summaryLabels!: CMS.Model.CartBlock.CartBlock['summaryLabels'];
    checkoutButton?: CMS.Model.CartBlock.CartBlock['checkoutButton'];
    continueShopping?: CMS.Model.CartBlock.CartBlock['continueShopping'];
    empty!: CMS.Model.CartBlock.CartBlock['empty'];
}

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
