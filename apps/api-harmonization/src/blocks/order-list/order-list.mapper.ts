import format from 'string-template';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';
import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Orders } from '../../models';

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
            label: formatDateRelative(order.createdAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
            value: order.createdAt,
        },
        paymentDueDate: {
            label: order.paymentDueDate
                ? formatDateRelative(order.paymentDueDate, locale, cms.labels.today, cms.labels.yesterday, timezone)
                : '-',
            value: order.paymentDueDate,
        },
        total: {
            label: checkNegativeValue(order.total).value.toString(),
            value: checkNegativeValue(order.total),
        },
        currency: order.currency,
        detailsUrl: format(cms.detailsUrl, {
            id: order.id,
        }),
    };
};
