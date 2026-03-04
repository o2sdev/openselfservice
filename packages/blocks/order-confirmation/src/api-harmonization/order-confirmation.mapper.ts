import { CMS, Orders } from '@o2s/configs.integrations';

import type {
    OrderConfirmationAddress,
    OrderConfirmationBlock,
    OrderConfirmationShippingMethod,
} from './order-confirmation.model';

const mapAddress = (addr: Orders.Model.Order['shippingAddress']): OrderConfirmationAddress | undefined => {
    if (!addr) return undefined;
    return {
        streetName: addr.streetName,
        streetNumber: addr.streetNumber,
        apartment: addr.apartment,
        postalCode: addr.postalCode,
        city: addr.city,
        country: addr.country,
        companyName: addr.companyName,
        taxId: addr.taxId,
    };
};

const mapShippingMethod = (method: Orders.Model.ShippingMethod): OrderConfirmationShippingMethod => ({
    name: method.name,
    total: method.total,
});

export const mapOrderConfirmation = (
    cms: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock,
    order: Orders.Model.Order,
    _locale: string,
): OrderConfirmationBlock => {
    const currency = order.currency;
    const zeroPrice = { value: 0, currency };

    return {
        __typename: 'OrderConfirmationBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        orderNumberLabel: cms.orderNumberLabel,
        productsTitle: cms.productsTitle,
        productsCountLabel: cms.productsCountLabel,
        summaryTitle: cms.summaryTitle,
        subtotalLabel: cms.subtotalLabel,
        taxLabel: cms.taxLabel,
        discountLabel: cms.discountLabel,
        shippingLabel: cms.shippingLabel,
        totalLabel: cms.totalLabel,
        shippingSection: cms.shippingSection,
        billingSection: cms.billingSection,
        message: cms.message,
        buttons: cms.buttons,
        viewOrdersPath: cms.viewOrdersPath,
        continueShoppingPath: cms.continueShoppingPath,
        statusLabels: cms.statusLabels,
        errors: cms.errors ?? { loadError: '', orderNotFound: '' },
        order: {
            id: order.id,
            createdAt: order.createdAt,
            status: order.status,
            paymentStatus: order.paymentStatus,
            items: {
                data: order.items.data.map((item) => ({
                    id: item.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                    total: item.total || zeroPrice,
                    productName: item.product.name,
                })),
                total: order.items.total,
            },
            subtotal: order.subtotal || zeroPrice,
            tax: order.tax,
            discountTotal: order.discountTotal,
            shippingTotal: order.shippingTotal,
            total: order.total,
            shippingAddress: mapAddress(order.shippingAddress),
            billingAddress: mapAddress(order.billingAddress),
            shippingMethods: order.shippingMethods?.map(mapShippingMethod),
        },
    };
};
