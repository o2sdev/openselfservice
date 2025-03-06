import { CMS } from '@o2s/framework/modules';

const MOCK_INVOICE_DETAILS_COMPONENT: CMS.Model.InvoiceDetailsComponent.InvoiceDetailsComponent = {
    id: 'invoice-details-1',
    fieldMapping: {
        type: {
            STANDARD: 'Standard Invoice',
            PROFORMA: 'Proforma Invoice',
            CREDIT_NOTE: 'Credit Note',
            DEBIT_NOTE: 'Debit Note',
        },
        paymentStatus: {
            PAYMENT_COMPLETE: 'Paid',
            PAYMENT_DECLINED: 'Declined',
            PAYMENT_DUE: 'Due',
            PAYMENT_PAST_DUE: 'Past Due',
        },
        currency: {
            PLN: 'Polish Zloty',
            EUR: 'Euro',
            USD: 'US Dollar',
            GBP: 'British Pound',
        },
    },
    properties: {
        id: 'Invoice Number',
        externalId: 'External Number',
        billingAccountId: 'Billing Account Number',
        billingPeriod: 'Billing Period',
        paymentMethodId: 'Payment Method',
        type: 'Invoice Type',
        paymentStatus: 'Payment Status',
        issuedDate: 'Issue Date',
        paymentDueDate: 'Due Date',
        currency: 'Currency',
        totalAmountDue: 'Total Amount Due',
        totalNetAmountDue: 'Net Amount',
        totalAmountPaid: 'Amount Paid',
    },
    labels: {
        today: 'Today',
        yesterday: 'Yesterday',
    },
};

export const mapInvoiceDetailsComponent = (): CMS.Model.InvoiceDetailsComponent.InvoiceDetailsComponent => {
    return {
        ...MOCK_INVOICE_DETAILS_COMPONENT,
    };
};
