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

/** Address for order confirmation display */
export interface OrderConfirmationAddress {
    streetName: string;
    streetNumber?: string;
    apartment?: string;
    postalCode: string;
    city: string;
    country: string;
    companyName?: string;
    taxId?: string;
}

/** Shipping method for order confirmation display */
export interface OrderConfirmationShippingMethod {
    name: string;
    total?: Models.Price.Price;
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
    discountLabel?: string;
    shippingLabel?: string;
    totalLabel!: string;
    shippingSection?: {
        title: string;
        addressLabel?: string;
        methodLabel?: string;
    };
    billingSection?: {
        title: string;
        addressLabel?: string;
    };
    message?: string;
    buttons!: {
        viewOrders: string;
        continueShopping: string;
    };
    viewOrdersPath!: string;
    continueShoppingPath!: string;
    errors!: {
        loadError: string;
        orderNotFound: string;
    };
    /** Order data - from API by orderId */
    order!: {
        id: string;
        createdAt?: string;
        status?: string;
        paymentStatus?: string;
        items: {
            data: OrderConfirmationItem[];
            total: number;
        };
        subtotal: Models.Price.Price;
        tax?: Models.Price.Price;
        discountTotal?: Models.Price.Price;
        shippingTotal?: Models.Price.Price;
        total: Models.Price.Price;
        shippingAddress?: OrderConfirmationAddress;
        billingAddress?: OrderConfirmationAddress;
        shippingMethods?: OrderConfirmationShippingMethod[];
    };
}
