import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_SUMMARY_BLOCK_1_EN: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Overdue',
        message: '{days} days overdue',
        altMessage: 'All good. No outstanding payments',
        link: {
            label: 'Pay online',
            icon: 'ArrowUpRight',
            url: '',
        },
        icon: 'ThumbsUp',
    },
    toBePaid: {
        title: 'To be paid',
        message: 'New and overdue',
        altMessage: 'No invoices to be paid',
        link: {
            label: 'Pay online',
            icon: 'ArrowUpRight',
            url: '',
        },
        icon: 'CreditCard',
    },
    chart: {
        title: '6-months history',
        topSegment: 'Overdue',
        middleSegment: 'To be paid',
        bottomSegment: 'Paid',
        total: 'Total',
        monthsToShow: 6,
        showChart: true,
    },
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_1_PL: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    id: 'payments-summary-1',
    overdue: {
        title: 'Zaległe',
        message: '{days} dni po terminie',
        altMessage: 'Wszystko w porządku. Brak zaległych płatności',
        link: {
            label: 'Zapłać online',
            icon: 'ArrowUpRight',
            url: '',
        },
        icon: 'ThumbsUp',
    },
    toBePaid: {
        title: 'Do zapłaty',
        message: 'Nowe i zaległe',
        altMessage: 'Brak faktur do zapłaty',
        link: {
            label: 'Zapłać online',
            icon: 'ArrowUpRight',
            url: '',
        },
        icon: 'CreditCard',
    },
    chart: {
        title: 'Historia 6-miesięczna',
        topSegment: 'Zaległe',
        middleSegment: 'Do zapłaty',
        bottomSegment: 'Zapłacone',
        total: 'Suma',
        monthsToShow: 6,
        showChart: true,
    },
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_1_DE: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    id: 'payments-summary-1',
    layout: 'vertical',
    overdue: {
        title: 'Überfällig',
        message: '{days} Tage überfällig',
        altMessage: 'Alles in Ordnung. Keine überfälligen Rechnungen',
        link: {
            label: 'Online bezahlen',
            icon: 'ArrowUpRight',
            url: '',
        },
        icon: 'ThumbsUp',
    },
    toBePaid: {
        title: 'Zu bezahlen',
        message: 'Neue und überfällige',
        altMessage: 'Keine zu zahlenden Rechnungen',
        link: {
            label: 'Online bezahlen',
            icon: 'ArrowUpRight',
            url: '',
        },
        icon: 'CreditCard',
    },
    chart: {
        title: '6-Monats-Historie',
        topSegment: 'Überfällig',
        middleSegment: 'Zu bezahlen',
        bottomSegment: 'Bezahlt',
        total: 'Gesamt',
        monthsToShow: 6,
        showChart: true,
    },
};
const MOCK_PAYMENTS_SUMMARY_BLOCK_2_EN: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    ...MOCK_PAYMENTS_SUMMARY_BLOCK_1_EN,
    id: 'payments-summary-2',
    chart: undefined,
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_2_PL: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    ...MOCK_PAYMENTS_SUMMARY_BLOCK_1_PL,
    id: 'payments-summary-2',
    chart: undefined,
};

const MOCK_PAYMENTS_SUMMARY_BLOCK_2_DE: CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock = {
    ...MOCK_PAYMENTS_SUMMARY_BLOCK_1_DE,
    id: 'payments-summary-2',
    chart: undefined,
};

export const mapPaymentsSummaryBlock = (
    id: string,
    locale: string,
): CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock => {
    switch (locale) {
        case 'pl':
            return [MOCK_PAYMENTS_SUMMARY_BLOCK_1_PL, MOCK_PAYMENTS_SUMMARY_BLOCK_2_PL].find((mock) => mock.id === id)!;
        case 'de':
            return [MOCK_PAYMENTS_SUMMARY_BLOCK_1_DE, MOCK_PAYMENTS_SUMMARY_BLOCK_2_DE].find((mock) => mock.id === id)!;
        default:
            return [MOCK_PAYMENTS_SUMMARY_BLOCK_1_EN, MOCK_PAYMENTS_SUMMARY_BLOCK_2_EN].find((mock) => mock.id === id)!;
    }
};
