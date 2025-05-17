import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_SUMMARY_BLOCK_EN: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Overdue',
        message: '{days} days overdue',
        altMessage: 'No overdue invoices',
        link: {
            label: 'Pay online',
            icon: 'ArrowUpRight',
        },
        icon: 'Info',
    },
    toBePaid: {
        title: 'To be paid',
        message: 'New and overdue',
        altMessage: 'No invoices to be paid',
        link: {
            label: 'Pay online',
            icon: 'ArrowUpRight',
        },
        icon: 'CreditCard',
    },
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_PL: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Zaległe',
        message: '{days} dni po terminie',
        altMessage: 'Brak zaległych faktur',
        link: {
            label: 'Zapłać online',
            icon: 'ArrowUpRight',
        },
        icon: 'Info',
    },
    toBePaid: {
        title: 'Do zapłaty',
        message: 'Nowe i zaległe',
        altMessage: 'Brak faktur do zapłaty',
        link: {
            label: 'Zapłać online',
            icon: 'ArrowUpRight',
        },
        icon: 'Info',
    },
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_DE: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Überfällig',
        message: '{days} Tage überfällig',
        altMessage: 'Keine überfälligen Rechnungen',
        link: {
            label: 'Online bezahlen',
            icon: 'ArrowUpRight',
        },
        icon: 'Info',
    },
    toBePaid: {
        title: 'Zu bezahlen',
        message: 'Neue und überfällige',
        altMessage: 'Keine zu zahlenden Rechnungen',
        link: {
            label: 'Online bezahlen',
            icon: 'ArrowUpRight',
        },
        icon: 'CreditCard',
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
