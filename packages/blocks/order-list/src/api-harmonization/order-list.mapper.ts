import { CMS, Orders } from '@o2s/configs.integrations';
import format from 'string-template';

import { Utils } from '@o2s/utils.api-harmonization';

import { Order, OrderListBlock } from './order-list.model';

export const mapOrderList = (
    orders: Orders.Model.Orders,
    cms: CMS.Model.OrderListBlock.OrderListBlock,
    locale: string,
    timezone: string,
): OrderListBlock => {
    return {
        __typename: 'OrderListBlock',
        id: cms.id,
        title: cms.title,
        filters: cms.filters,
        subtitle: cms.subtitle,
        table: cms.table,
        noResults: cms.noResults,
        orders: {
            total: orders.total,
            data: orders.data.map((order) => mapOrder(order, cms, locale, timezone)),
        },
        pagination: cms.pagination,
        labels: cms.labels,
        reorderLabel: cms.reorderLabel,
        initialFilters: cms.initialFilters,
    };
};

export const mapOrder = (
    order: Orders.Model.Order,
    cms: CMS.Model.OrderListBlock.OrderListBlock,
    locale: string,
    timezone: string,
): Order => {
    return {
        id: {
            label: cms.fieldMapping.id?.[order.id] || order.id,
            value: order.id,
        },
        status: {
            label: cms.fieldMapping.status?.[order.status] || order.status,
            value: order.status,
        },
        createdAt: {
            label: Utils.Date.formatDateRelative(
                order.createdAt,
                locale,
                cms.labels.today,
                cms.labels.yesterday,
                timezone,
            ),
            value: order.createdAt,
        },
        paymentDueDate: {
            label: order.paymentDueDate
                ? Utils.Date.formatDateRelative(
                      order.paymentDueDate,
                      locale,
                      cms.labels.today,
                      cms.labels.yesterday,
                      timezone,
                  )
                : '-',
            value: order.paymentDueDate,
        },
        subtotal: {
            label: Utils.Price.checkNegativeValue(
                order.subtotal || { value: 0, currency: order.currency },
            ).value.toString(),
            value: Utils.Price.checkNegativeValue(order.subtotal || { value: 0, currency: order.currency }),
        },
        currency: order.currency,
        detailsUrl: format(cms.detailsUrl, {
            id: order.id,
        }),
    };
};
