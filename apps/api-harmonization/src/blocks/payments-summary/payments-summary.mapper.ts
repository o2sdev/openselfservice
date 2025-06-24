import dayjs from 'dayjs';
import format from 'string-template';

import { Models } from '@o2s/framework/modules';

import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Invoices } from '../../models';

import { PaymentsSummaryBlock } from './payments-summary.model';

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

    return {
        __typename: 'PaymentsSummaryBlock',
        id: cms.id,
        currency: currency,
        overdue: {
            title: cms.overdue.title,
            link: cms.overdue.link,
            description: isOverdue
                ? format(cms.overdue?.message || '', {
                      days: overdueDays,
                  })
                : cms.overdue?.altMessage || '',
            value: { value: checkNegativeValue({ value: overdueAmount, currency }).value, currency },
            isOverdue: isOverdue,
            icon: cms.overdue.icon,
        },
        toBePaid: {
            title: cms.toBePaid.title,
            icon: cms.toBePaid.icon,
            description: toBePaidAmount > 0 ? cms.toBePaid?.message : cms.toBePaid?.altMessage,
            link: cms.toBePaid.link,
            value: { value: checkNegativeValue({ value: toBePaidAmount, currency }).value, currency },
        },
    };
};
