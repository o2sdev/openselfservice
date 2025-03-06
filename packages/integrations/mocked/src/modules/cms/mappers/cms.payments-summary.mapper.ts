import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_SUMMARY_COMPONENT: CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Overdue',
        message: '{days} days overdue',
        buttonLabel: 'Pay online',
        noPaymentsMessage: 'No overdue invoices',
    },
    toBePaid: {
        title: 'To be paid',
        message: 'New and overdue',
        noPaymentsMessage: 'No invoices to be paid',
        buttonLabel: 'Pay online',
    },
};

export const mapPaymentsSummaryComponent = (
    _locale: string,
): CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent => {
    return MOCK_PAYMENTS_SUMMARY_COMPONENT;
};
