import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_SUMMARY_BLOCK_EN = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Overdue',
        icon: 'Info',
        message: '{days} days overdue',
        altMessage: 'No overdue invoices',
        link: {
            label: 'Pay online',
        },
    },
    toBePaid: {
        title: 'To be paid',
        icon: 'CreditCard',
        message: 'New and overdue',
        altMessage: 'No invoices to be paid',
        link: {
            label: 'Pay online',
        },
    },
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_PL = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Zaległe',
        icon: 'Info',
        message: '{days} dni po terminie',
        altMessage: 'Brak zaległych faktur',
        link: {
            label: 'Zapłać online',
        },
    },
    toBePaid: {
        title: 'Do zapłaty',
        icon: 'CreditCard',
        message: 'Nowe i zaległe',
        altMessage: 'Brak faktur do zapłaty',
        link: {
            label: 'Zapłać online',
        },
    },
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_DE = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Überfällig',
        icon: 'Info',
        message: '{days} Tage überfällig',
        altMessage: 'Keine überfälligen Rechnungen',
        link: {
            label: 'Online bezahlen',
        },
    },
    toBePaid: {
        title: 'Zu bezahlen',
        icon: 'CreditCard',
        message: 'Neue und überfällige',
        altMessage: 'Keine zu zahlenden Rechnungen',
        link: {
            label: 'Online bezahlen',
        },
    },
};

export const mapPaymentsSummaryBlock = (locale: string): CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock => {
    switch (locale) {
        case 'pl':
            return MOCK_PAYMENTS_SUMMARY_BLOCK_PL;
        case 'de':
            return MOCK_PAYMENTS_SUMMARY_BLOCK_DE;
        default:
            return MOCK_PAYMENTS_SUMMARY_BLOCK_EN;
    }
};
