import { CMS, Orders } from '@o2s/configs.integrations';

import type { OrderConfirmationBlock } from './order-confirmation.model';

export const mapOrderConfirmation = (
    cms: CMS.Model.OrderConfirmationBlock.OrderConfirmationBlock,
    order: Orders.Model.Order,
    _locale: string,
): OrderConfirmationBlock => {
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
        totalLabel: cms.totalLabel,
        message: cms.message,
        buttons: cms.buttons,
        viewOrdersPath: cms.viewOrdersPath,
        continueShoppingPath: cms.continueShoppingPath,
        order: {
            id: order.id,
            items: {
                data: order.items.data.map((item) => ({
                    id: item.id,
                    productId: item.productId,
                    quantity: item.quantity,
                    price: item.price,
                    total: item.total || { value: 0, currency: order.currency },
                    productName: item.product.name,
                })),
                total: order.items.total,
            },
            subtotal: order.subtotal || { value: 0, currency: order.currency },
            tax: order.tax,
            total: order.total,
        },
    };
};
