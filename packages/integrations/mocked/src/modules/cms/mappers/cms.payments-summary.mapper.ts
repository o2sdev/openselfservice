import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_SUMMARY_COMPONENT_EN: CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent = {
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

const MOCK_PAYMENTS_SUMMARY_COMPONENT_PL: CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Zaległe',
        message: '{days} dni po terminie',
        buttonLabel: 'Zapłać online',
        noPaymentsMessage: 'Brak zaległych faktur',
    },
    toBePaid: {
        title: 'Do zapłaty',
        message: 'Nowe i zaległe',
        noPaymentsMessage: 'Brak faktur do zapłaty',
        buttonLabel: 'Zapłać online',
    },
};

const MOCK_PAYMENTS_SUMMARY_COMPONENT_DE: CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Überfällig',
        message: '{days} Tage überfällig',
        buttonLabel: 'Online bezahlen',
        noPaymentsMessage: 'Keine überfälligen Rechnungen',
    },
    toBePaid: {
        title: 'Zu bezahlen',
        message: 'Neue und überfällige',
        noPaymentsMessage: 'Keine zu zahlenden Rechnungen',
        buttonLabel: 'Online bezahlen',
    },
};

export const mapPaymentsSummaryComponent = (
    locale: string,
): CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent => {
    switch (locale) {
        case 'pl':
            return MOCK_PAYMENTS_SUMMARY_COMPONENT_PL;
        case 'de':
            return MOCK_PAYMENTS_SUMMARY_COMPONENT_DE;
        default:
            return MOCK_PAYMENTS_SUMMARY_COMPONENT_EN;
    }
};
