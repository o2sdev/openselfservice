import dayjs from 'dayjs';
import 'dayjs/locale/de';
import 'dayjs/locale/en';
import 'dayjs/locale/pl';

import { CMS, Orders } from '../../models';

import { ChartData, OrdersSummaryBlock } from './orders-summary.model';

export const mapOrdersSummary = (
    cms: CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock,
    ordersCurrent: Orders.Model.Orders,
    ordersPrevious: Orders.Model.Orders,
    range: number,
    locale: string,
): OrdersSummaryBlock => {
    const currency = ordersCurrent.data[0]?.currency;

    const totalValue = ordersCurrent.data.length && ordersCurrent.data[0] ? getTotalValue(ordersCurrent) : 0;
    const averageValue = totalValue / ordersCurrent.total;

    return {
        __typename: 'OrdersSummaryBlock',
        id: cms.id,
        title: cms.title,
        subtitle: cms.subtitle,
        totalValue: {
            title: cms.totalValue.title,
            value: totalValue
                ? {
                      value: totalValue,
                      currency: currency!,
                  }
                : undefined,
        },
        averageValue: {
            title: cms.averageValue.title,
            value: averageValue
                ? {
                      value: averageValue,
                      currency: currency!,
                  }
                : undefined,
        },
        averageNumber: {
            title: cms.averageNumber.title,
            value: ordersCurrent.total,
        },
        chart: {
            title: cms.chart.title,
            data: getChartData(ordersPrevious, ordersCurrent, range, locale),
            legend: {
                prev: dayjs(ordersPrevious.data[0]?.createdAt).format('YYYY'),
                current: dayjs(ordersCurrent.data[0]?.createdAt).format('YYYY'),
            },
        },
        noResults: cms.noResults,
    };
};

const getTotalValue = (orders: Orders.Model.Orders) => {
    return orders.data.reduce((acc, order) => acc + order.total.value, 0);
};

const getChartData = (
    prev: Orders.Model.Orders,
    current: Orders.Model.Orders,
    range: number,
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

    // Process previous orders
    prev.data.forEach((order) => {
        const date = dayjs(order.createdAt);
        const monthKey = date.format('YYYY-MM'); // Use YYYY-MM format for sorting
        const monthTotal = prevMonthlyTotals.get(monthKey) || 0;
        prevMonthlyTotals.set(monthKey, monthTotal + 1);
    });

    // Process current orders
    current.data.forEach((order) => {
        const date = dayjs(order.createdAt);
        const monthKey = date.format('YYYY-MM'); // Use YYYY-MM format for sorting
        const monthTotal = currentMonthlyTotals.get(monthKey) || 0;
        currentMonthlyTotals.set(monthKey, monthTotal + 1);
    });

    // Generate a list of months based on the range parameter, starting from the latest month
    const monthKeys: string[] = [];
    for (let i = 0; i < range; i++) {
        const monthDate = latestDate.subtract(i, 'month');
        const monthKey = monthDate.format('YYYY-MM');
        monthKeys.push(monthKey);
    }

    // Create chart data array with empty values for months in the range
    const chartData = monthKeys.map((monthKey) => {
        const date = dayjs(monthKey);
        // Subtract 1 year from monthKey when getting value from prevMonthlyTotals
        const prevMonthKey = dayjs(monthKey).subtract(1, 'year').format('YYYY-MM');
        return {
            date: date, // Format as "Jan 2023"
            prev: prevMonthlyTotals.get(prevMonthKey) || 0,
            current: currentMonthlyTotals.get(monthKey) || 0,
        };
    });

    // Sort by date (using the YYYY-MM format ensures chronological order)
    chartData.sort((a, b) => {
        return a.date.valueOf() - b.date.valueOf();
    });

    return chartData.map((month) => ({
        label: month.date.format('MMM'),
        prev: month.prev,
        current: month.current,
    }));
};
