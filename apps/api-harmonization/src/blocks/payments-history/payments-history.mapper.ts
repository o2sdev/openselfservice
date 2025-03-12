import { CMS, Invoices } from '../../models';

import { BarData, PaymentsHistoryComponent } from './payments-history.model';

export const mapPaymentsHistory = (
    cms: CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent,
    invoices: Invoices.Model.Invoices,
    locale: string,
): PaymentsHistoryComponent => {
    const currency = invoices.data[0]?.currency || '';

    return {
        __typename: 'PaymentsHistoryComponent',
        id: cms.id,
        title: cms.title,
        labels: {
            topSegment: cms.topSegment,
            middleSegment: cms.middleSegment,
            bottomSegment: cms.bottomSegment,
            total: cms.total,
        },
        currency: currency,
        chartData: mapChartData(invoices.data, locale, cms.monthsToShow),
    };
};

const mapChartData = (data: Invoices.Model.Invoice[], locale: string, monthsToShow: number = 6): BarData[] => {
    const now = new Date();
    const monthsToShowAgo = new Date(now.getFullYear(), now.getMonth() - monthsToShow - 1, 1);

    // Create array of last 6 months
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
        const invoiceDate = new Date(invoice.paymentDueDate);
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
        ...month,
        topSegment: month.topSegment.toFixed(2),
        middleSegment: month.middleSegment.toFixed(2),
        bottomSegment: month.bottomSegment.toFixed(2),
        total: month.total.toFixed(2),
    }));
};
