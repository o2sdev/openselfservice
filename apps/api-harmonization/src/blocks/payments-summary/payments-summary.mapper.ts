import { checkNegativeValue } from '@o2s/api-harmonization/utils/price';

import { CMS, Invoices } from '../../models';

import { PaymentsSummaryBlock } from './payments-summary.model';

export const mapPaymentsSummary = (
    cms: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock,
    invoices: Invoices.Model.Invoices,
    _locale: string,
): PaymentsSummaryBlock => {
    // TODO: get currency from header when it's implemented
    const currency = invoices.data[0]?.currency || 'PLN';
    const overdueInvoices = invoices.data.filter((invoice) => invoice.paymentStatus === 'PAYMENT_PAST_DUE');
    const overdueAmount = overdueInvoices.reduce((acc, invoice) => {
        return acc + invoice.totalToBePaid.value;
    }, 0);

    const earliestDueDate = overdueInvoices.length
        ? Math.min(...overdueInvoices.map((invoice) => new Date(invoice.paymentDueDate).getTime()))
        : null;

    const overdueDays = earliestDueDate ? Math.floor((Date.now() - earliestDueDate) / (1000 * 60 * 60 * 24)) : 0;

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
            message: cms.overdue.message,
            noPaymentsMessage: cms.overdue.noPaymentsMessage,
            buttonLabel: cms.overdue.buttonLabel,
            amount: checkNegativeValue({ value: overdueAmount, currency: currency }),
            overdueDays: overdueDays,
        },
        toBePaid: {
            title: cms.toBePaid.title,
            message: cms.toBePaid.message,
            noPaymentsMessage: cms.toBePaid.noPaymentsMessage,
            buttonLabel: cms.toBePaid.buttonLabel,
            amount: checkNegativeValue({ value: toBePaidAmount, currency: currency }),
        },
    };
};
