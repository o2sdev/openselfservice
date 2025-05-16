import { formatDateRelative, formatTime } from '@o2s/api-harmonization/utils/date';
import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Orders } from '../../models';

import { OrderDetailsBlock } from './order-details.model';

export const mapOrderDetails = (
    cms: CMS.Model.OrderDetailsBlock.OrderDetailsBlock,
    order: Orders.Model.Order & { totalItems: number },
    locale: string,
    timezone: string,
): OrderDetailsBlock => {
    const currency = order.currency;

    const isOverdue = order.paymentStatus === 'FAILED' || order.paymentStatus === 'NOT_PAID';
    const overdueAmount = isOverdue ? order.total.value : 0;

    const overdueDays = order.paymentDueDate
        ? Math.floor((Date.now() - new Date(order.paymentDueDate).getTime()) / (1000 * 60 * 60 * 24))
        : 0;

    return {
        __typename: 'OrderDetailsBlock',
        id: cms.id,
        title: cms.title,
        order: {
            id: {
                title: cms.properties?.id as string,
                value: order.id,
            },
            total: {
                title: cms.cards.total?.title || '',
                icon: cms.cards.total?.icon || '',
                label: checkNegativeValue(order.total).value.toString(),
                description: cms.cards.total?.message?.replace(/{value}/g, order.totalItems.toString()) || '',
                value: order.total,
            },
            createdAt: {
                title: cms.cards.createdAt?.title || '',
                label: formatDateRelative(order.createdAt, locale, cms.labels.today, cms.labels.yesterday, timezone),
                icon: cms.cards.createdAt?.icon || '',
                description: formatTime(order.createdAt, locale, timezone),
                value: order.createdAt,
            },
            paymentDueDate: {
                title: cms.cards?.paymentDueDate?.title || '',
                label: order.paymentDueDate
                    ? formatDateRelative(order.paymentDueDate, locale, cms.labels.today, cms.labels.yesterday, timezone)
                    : '-',
                icon: cms.cards?.paymentDueDate?.icon || '',
                description: cms.cards?.paymentDueDate?.message?.replace(/{value}/g, order.documents?.[0]?.id || ''),
                value: order.paymentDueDate,
            },
            overdue: {
                title: cms.cards?.overdue?.title || '',
                icon: cms.cards?.overdue?.icon || '',
                label: checkNegativeValue({ value: overdueAmount, currency }).value.toString(),
                description:
                    overdueDays > 0
                        ? cms.cards?.overdue?.message?.replace(/{days}/g, overdueDays.toString()) || ''
                        : cms.cards?.overdue?.altMessage || '',
                value: { value: checkNegativeValue({ value: overdueAmount, currency }).value, currency },
            },
            status: {
                title: cms.cards?.status?.title || '',
                icon: cms.cards?.status?.icon || '',
                label: cms.fieldMapping?.status?.[order.status] || order.status,
                value: order.status,
                statusLadder: cms.statusLadder,
            },
            customerComment: {
                title: cms.cards?.customerComment?.title || '',
                icon: cms.cards?.customerComment?.icon || '',
                value: order.customerComment,
                link: {
                    label: cms.cards?.customerComment?.link?.label || '',
                    icon: cms.cards?.customerComment?.link?.icon || '',
                    url: cms.cards?.customerComment?.link?.url || '',
                },
            },
        },
        productList: {
            title: cms.productsTitle,
            products: {
                data: mapOrderItems(order.items, cms.fieldMapping),
                total: order.totalItems,
            },
            table: cms.table,
            pagination: cms.pagination,
            filters: cms.filters,
            noResults: cms.noResults,
        },
        labels: cms.labels,
    };
};

const mapOrderItems = (
    items: Orders.Model.OrderItem[],
    fieldMapping: CMS.Model.OrderDetailsBlock.OrderDetailsBlock['fieldMapping'],
): Orders.Model.OrderItem[] => {
    return items.map((item) => {
        return {
            ...item,
            unit: fieldMapping?.unit?.[item.unit || 'PCS'] as Orders.Model.OrderItem['unit'],
        };
    });
};
