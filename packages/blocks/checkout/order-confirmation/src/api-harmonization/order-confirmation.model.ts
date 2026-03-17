import { CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models, Orders } from '@o2s/framework/modules';

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
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
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
    orderNumberLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['orderNumberLabel'];
    productsTitle!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['productsTitle'];
    productsCountLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['productsCountLabel'];
    summaryTitle!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['summaryTitle'];
    subtotalLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['subtotalLabel'];
    taxLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['taxLabel'];
    discountLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['discountLabel'];
    shippingLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['shippingLabel'];
    totalLabel!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['totalLabel'];
    shippingSection!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['shippingSection'];
    billingSection!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['billingSection'];
    message?: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['message'];
    buttons!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['buttons'];
    viewOrdersPath!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['viewOrdersPath'];
    continueShoppingPath!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['continueShoppingPath'];
    statusLabels!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['statusLabels'];
    errors!: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock['errors'];
    /** Order data - from API by orderId */
    order!: {
        id: string;
        createdAt?: string;
        status?: Orders.Model.OrderStatus;
        paymentStatus?: Orders.Model.PaymentStatus;
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
        email?: string;
    };
}
