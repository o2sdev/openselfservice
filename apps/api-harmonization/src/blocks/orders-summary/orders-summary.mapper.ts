import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/pl';
import { GetOrdersSummaryBlockQuery } from 'src/blocks/orders-summary/orders-summary.request';

import { CMS, Orders } from '../../models';

import { ChartData, OrdersSummaryBlock } from './orders-summary.model';

export const mapOrdersSummary = (
    cms: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock,
    ordersCurrent: Orders.Model.Orders,
    ordersPrevious: Orders.Model.Orders,
    range: GetOrdersSummaryBlockQuery['range'],
    diff: number,
    locale: string,
): OrdersSummaryBlock => {
    const currency = ordersCurrent.data[0]?.currency;

    const totalValueCurrent = ordersCurrent.data.length && ordersCurrent.data[0] ? getTotalValue(ordersCurrent) : 0;
    const totalValuePrevious = ordersPrevious.data.length && ordersPrevious.data[0] ? getTotalValue(ordersPrevious) : 0;

    const averageValueCurrent = totalValueCurrent / (ordersCurrent.total || 1);
    const averageValuePrevious = totalValuePrevious / (ordersPrevious.total || 1);

    // Calculate trends as percentage change from previous to current
    const totalValueTrend = calculateTrend(totalValueCurrent, totalValuePrevious);
    const averageValueTrend = calculateTrend(averageValueCurrent, averageValuePrevious);
    const averageNumberTrend = calculateTrend(ordersCurrent.total, ordersPrevious.total);

    return {
        __typename: 'OrdersSummaryBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        totalValue: {
            title: cms.totalValue.title,
            value: {
                value: totalValueCurrent,
                currency: currency!,
            },
            trend: totalValueTrend,
        },
        averageValue: {
            title: cms.averageValue.title,
            value: {
                value: averageValueCurrent,
                currency: currency!,
            },
            trend: averageValueTrend,
        },
        averageNumber: {
            title: cms.averageNumber.title,
            value: ordersCurrent.total,
            trend: averageNumberTrend,
        },
        chart: {
            title: cms.chart.title,
            data: getChartData(ordersPrevious, ordersCurrent, range, diff, locale),
            legend: cms.chart.legend,
        },
        noResults: cms.noResults,
        ranges: cms.ranges,
    };
};

const getTotalValue = (orders: Orders.Model.Orders) => {
    return orders.data.reduce((acc, order) => acc + order.total.value, 0);
};

/**
 * Calculate trend as percentage change from previous to current value
 * @param current Current value
 * @param previous Previous value
 * @returns Percentage change (positive for increase, negative for decrease)
 */
const calculateTrend = (current: number, previous: number): number => {
    if (previous === 0) {
        return current > 0 ? 100 : 0; // If previous was 0, and current is positive, return 100% increase
    }

    return Math.round(((current - previous) / previous) * 100);
};

const getChartData = (
    prev: Orders.Model.Orders,
    current: Orders.Model.Orders,
    range: GetOrdersSummaryBlockQuery['range'],
    diff: number,
    locale: string,
): ChartData[] => {
    dayjs.locale(locale);

    // Create maps to store date-based totals for both previous and current orders
    const prevTotals = new Map<string, number>();
    const currentTotals = new Map<string, number>();

    // Find the latest order date from current orders
    let latestDate = dayjs();
    if (current.data.length > 0) {
        // Sort orders by date in descending order and get the latest one
        const sortedOrders = [...current.data].sort(
            (a, b) => dayjs(b.createdAt).valueOf() - dayjs(a.createdAt).valueOf(),
        );
        latestDate = dayjs(sortedOrders[0]?.createdAt);
    }

    let format = 'YYYY-MM';
    if (range === 'week' || range === 'day') {
        format = 'YYYY-MM-DD';
    }

    // Process previous orders
    prev.data.forEach((order) => {
        const date = dayjs(order.createdAt);
        const key = date.format(format);
        const total = prevTotals.get(key) || 0;
        prevTotals.set(key, total + 1);
    });

    // Process current orders
    current.data.forEach((order) => {
        const date = dayjs(order.createdAt);
        const key = date.format(format);
        const total = currentTotals.get(key) || 0;
        currentTotals.set(key, total + 1);
    });

    // Generate a list of keys based on the range parameter, starting from the latest date
    const dateKeys: string[] = [];
    for (let i = 0; i < diff; i++) {
        const date = latestDate.subtract(i, range === 'month' ? 'months' : 'days');
        const key = date.format(format);
        dateKeys.push(key);
    }

    // Create a chart data array with empty values for dates in the range
    const chartData = dateKeys.map((dateKey) => {
        const date = dayjs(dateKey);
        // Subtract 1 year
        const prevDateKey = dayjs(dateKey).subtract(1, 'year').format(format);
        return {
            date: date,
            prev: prevTotals.get(prevDateKey) || 0,
            current: currentTotals.get(dateKey) || 0,
        };
    });

    // Sort by date (using the YYYY-MM-DD format ensures chronological order)
    chartData.sort((a, b) => {
        return a.date.valueOf() - b.date.valueOf();
    });

    return chartData.map((date) => ({
        label: date.date.format(range === 'month' ? 'MMM' : 'DD.MM'),
        prev: date.prev,
        current: date.current,
    }));
};
