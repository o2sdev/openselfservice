import dayjs from 'dayjs';
import format from 'string-template';

import { formatDateRelative, formatTime } from '@o2s/api-harmonization/utils/date';
import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Orders } from '../../models';

import { OrderDetailsBlock } from './order-details.model';

export const mapOrderDetails = (
    cms: CMS.Model.OrderDetailsBlock.OrderDetailsBlock,
    order: Orders.Model.Order,
    locale: string,
    timezone: string,
    defaultProductUnit: string,
): OrderDetailsBlock => {
    const currency = order.currency;

    const notPaid =
        order.paymentStatus === 'NOT_PAID' ||
        order.paymentStatus === 'FAILED' ||
        order.paymentStatus === 'REQUIRES_ACTION';

    const overdueDays = dayjs(order.paymentDueDate).diff(dayjs(), 'days');
    const isOverdue = notPaid && overdueDays > 0;
    const overdueAmount = isOverdue ? order.subtotal?.value || 0 : 0;

    return {
        __typename: 'OrderDetailsBlock',
        id: cms.id,
        title: cms.title,
        order: {
            id: {
                value: order.id,
            },
            subtotal: {
                title: cms.totalValue.title,
                icon: cms.totalValue.icon,
                label: checkNegativeValue(order.subtotal || { value: 0, currency }).value.toString(),
                description: format(cms.totalValue.message || '', {
                    value: order.items.total,
                }),
                value: order.subtotal,
            },
            createdAt: {
                title: cms.createdOrderAt.title,
                label: formatDateRelative(order.createdAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
                icon: cms.createdOrderAt.icon,
                description: formatTime(order.createdAt, locale, timezone),
                value: order.createdAt,
            },
            paymentDueDate: {
                title: cms.paymentDueDate.title,
                label: order.paymentDueDate
                    ? formatDateRelative(order.paymentDueDate, locale, cms.labels.today, cms.labels.yesterday, timezone)
                    : '-',
                icon: cms.paymentDueDate.icon,
                description: order.documents?.[0]?.id
                    ? format(cms.paymentDueDate.message || '', {
                          value: order.documents?.[0]?.id,
                      })
                    : cms.paymentDueDate.altMessage,
                value: order.paymentDueDate,
            },
            overdue: {
                title: cms.overdue.title,
                icon: cms.overdue.icon,
                label: checkNegativeValue({ value: overdueAmount, currency }).value.toString(),
                description: isOverdue
                    ? format(cms.overdue.message || '', {
                          days: overdueDays,
                      })
                    : cms.overdue.altMessage,
                value: { value: checkNegativeValue({ value: overdueAmount, currency }).value, currency },
                isOverdue,
            },
            status: {
                title: cms.orderStatus.title,
                icon: cms.orderStatus.icon,
                label: cms.fieldMapping.status?.[order.status] || order.status,
                value: order.status,
                statusLadder: cms.statusLadder,
            },
            customerComment: {
                title: cms.customerComment.title,
                icon: cms.customerComment.icon,
                value: order.customerComment,
                link: {
                    label: cms.customerComment.link?.label,
                    icon: cms.customerComment.link?.icon,
                    url: cms.customerComment.link?.url,
                },
            },
        },
        productList: {
            title: cms.productsTitle,
            products: {
                data: mapOrderItems(order.items.data, cms.fieldMapping, defaultProductUnit),
                total: order.items.total,
            },
            table: cms.table,
            pagination: cms.pagination,
            filters: cms.filters,
            noResults: cms.noResults,
        },
        labels: cms.labels,
        reorderLabel: cms.reorderLabel,
        trackOrderLabel: cms.trackOrderLabel,
        payOnlineLabel: cms.payOnlineLabel,
    };
};

const mapOrderItems = (
    items: Orders.Model.OrderItem[],
    fieldMapping: CMS.Model.OrderDetailsBlock.OrderDetailsBlock['fieldMapping'],
    defaultProductUnit: string,
): Orders.Model.OrderItem[] => {
    return items.map((item) => {
        return {
            ...item,
            unit: fieldMapping?.unit?.[item.unit || defaultProductUnit] as Orders.Model.OrderItem['unit'],
        };
    });
};
