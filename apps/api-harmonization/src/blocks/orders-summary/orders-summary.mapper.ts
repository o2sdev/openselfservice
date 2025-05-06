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
            value: totalValueCurrent
                ? {
                      value: totalValueCurrent,
                      currency: currency!,
                  }
                : undefined,
            trend: totalValueTrend,
        },
        averageValue: {
            title: cms.averageValue.title,
            value: averageValueCurrent
                ? {
                      value: averageValueCurrent,
                      currency: currency!,
                  }
                : undefined,
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
            legend: {
                prev: dayjs(ordersPrevious.data[0]?.createdAt).format('YYYY'),
                current: dayjs(ordersCurrent.data[0]?.createdAt).format('YYYY'),
            },
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
    // Set locale for dayjs
    dayjs.locale(locale);

    // Create maps to store monthly totals for both previous and current orders
    const prevMonthlyTotals = new Map<string, number>();
    const currentMonthlyTotals = new Map<string, number>();

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
        const monthKey = date.format(format); // Use YYYY-MM-DD format for sorting
        const monthTotal = prevMonthlyTotals.get(monthKey) || 0;
        prevMonthlyTotals.set(monthKey, monthTotal + 1);
    });

    // Process current orders
    current.data.forEach((order) => {
        const date = dayjs(order.createdAt);
        const monthKey = date.format(format); // Use YYYY-MM-DD format for sorting
        const monthTotal = currentMonthlyTotals.get(monthKey) || 0;
        currentMonthlyTotals.set(monthKey, monthTotal + 1);
    });

    // Generate a list of months based on the range parameter, starting from the latest month
    const monthKeys: string[] = [];
    for (let i = 0; i < diff; i++) {
        const monthDate = latestDate.subtract(i, range === 'month' ? 'months' : 'days');
        const monthKey = monthDate.format(format);
        monthKeys.push(monthKey);
    }

    // Create chart data array with empty values for months in the range
    const chartData = monthKeys.map((monthKey) => {
        const date = dayjs(monthKey);
        // Subtract 1 year from monthKey when getting value from prevMonthlyTotals
        const prevMonthKey = dayjs(monthKey).subtract(1, 'year').format(format);
        return {
            date: date, // Format as "Jan 2023"
            prev: prevMonthlyTotals.get(prevMonthKey) || 0,
            current: currentMonthlyTotals.get(monthKey) || 0,
        };
    });

    // Sort by date (using the YYYY-MM-DD format ensures chronological order)
    chartData.sort((a, b) => {
        return a.date.valueOf() - b.date.valueOf();
    });

    return chartData.map((month) => ({
        label: month.date.format(range === 'month' ? 'MMM' : 'DD.MM'),
        prev: month.prev,
        current: month.current,
    }));
};
