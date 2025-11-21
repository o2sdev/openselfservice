import { CMS, Invoices } from '@o2s/configs.integrations';
import dayjs from 'dayjs';
import format from 'string-template';

import { Utils } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

import { BarData, PaymentsSummaryBlock } from './payments-summary.model';

export const mapPaymentsSummary = (
    cms: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock,
    invoices: Invoices.Model.Invoices,
    _locale: string,
    defaultCurrency: Models.Price.Currency,
): PaymentsSummaryBlock => {
    const currency = invoices.data[0]?.currency || defaultCurrency;
    const overdueInvoices = invoices.data.filter((invoice) => invoice.paymentStatus === 'PAYMENT_PAST_DUE');
    const overdueAmount = overdueInvoices.reduce((acc, invoice) => {
        return acc + invoice.totalToBePaid.value;
    }, 0);

    const earliestDueDate = overdueInvoices.length
        ? Math.min(...overdueInvoices.map((invoice) => new Date(invoice.issuedDate).getTime()))
        : null;

    const overdueDays = earliestDueDate ? dayjs().diff(dayjs(earliestDueDate), 'days') : 0;
    const isOverdue = overdueDays > 0 && overdueAmount > 0;

    const toBePaidAmount = invoices.data
        .filter((invoice) => invoice.paymentStatus === 'PAYMENT_DUE' || invoice.paymentStatus === 'PAYMENT_DECLINED')
        .reduce((acc, invoice) => {
            return acc + invoice.totalToBePaid.value;
        }, 0);

    const result: PaymentsSummaryBlock = {
        __typename: 'PaymentsSummaryBlock',
        id: cms.id,
        currency: currency,
    };

    if (cms.overdue) {
        result.overdue = {
            title: cms.overdue.title,
            link: cms.overdue.link,
            description: isOverdue
                ? format(cms.overdue?.message || '', {
                      days: overdueDays,
                  })
                : cms.overdue?.altMessage || '',
            value: { value: Utils.Price.checkNegativeValue({ value: overdueAmount, currency }).value, currency },
            isOverdue: isOverdue,
            icon: cms.overdue.icon,
        };
    }

    if (cms.toBePaid) {
        result.toBePaid = {
            title: cms.toBePaid.title,
            icon: cms.toBePaid.icon,
            description: toBePaidAmount > 0 ? cms.toBePaid?.message : cms.toBePaid?.altMessage,
            link: cms.toBePaid.link,
            value: { value: Utils.Price.checkNegativeValue({ value: toBePaidAmount, currency }).value, currency },
        };
    }

    if (cms.layout) {
        result.layout = cms.layout;
    }

    if (cms.chart) {
        result.chart = {
            title: cms.chart.title,
            labels: {
                topSegment: cms.chart.topSegment,
                middleSegment: cms.chart.middleSegment,
                bottomSegment: cms.chart.bottomSegment,
                total: cms.chart.total,
            },
            chartData: mapChartData(invoices.data, _locale, cms.chart.monthsToShow),
            showChart: cms.chart.showChart,
            monthsToShow: cms.chart.monthsToShow,
        };
    }

    return result;
};

const mapChartData = (data: Invoices.Model.Invoice[], locale: string, monthsToShow: number = 6): BarData[] => {
    const now = new Date();
    const monthsToShowAgo = new Date(now.getFullYear(), now.getMonth() - monthsToShow - 1, 1);

    const months = Array.from({ length: monthsToShow }, (_, i) => {
        const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
        return {
            month: date.toLocaleString(locale, { month: 'short' }),
            topSegment: 0,
            middleSegment: 0,
            bottomSegment: 0,
            total: 0,
            date: date,
        };
    }).reverse();

    // Sum up invoice amounts for each month
    data.forEach((invoice) => {
        const invoiceDate = new Date(invoice.issuedDate);
        if (invoiceDate >= monthsToShowAgo) {
            const month = months.find(
                (m) =>
                    m.date.getMonth() === invoiceDate.getMonth() && m.date.getFullYear() === invoiceDate.getFullYear(),
            );
            if (month) {
                month.topSegment += invoice.paymentStatus === 'PAYMENT_PAST_DUE' ? invoice.totalAmountDue.value : 0;
                month.middleSegment += invoice.paymentStatus === 'PAYMENT_DUE' ? invoice.totalAmountDue.value : 0;
                month.bottomSegment += invoice.paymentStatus === 'PAYMENT_COMPLETE' ? invoice.totalAmountDue.value : 0;
                month.total += invoice.totalAmountDue.value;
            }
        }
    });

    return months.map((month) => ({
        month: month.month,
        topSegment: month.topSegment.toFixed(2),
        middleSegment: month.middleSegment.toFixed(2),
        bottomSegment: month.bottomSegment.toFixed(2),
        total: month.total.toFixed(2),
    }));
};
