import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_HISTORY_BLOCK_EN: CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock = {
    id: 'payments-history-1',
    title: '6-months history',
    topSegment: 'Overdue',
    middleSegment: 'To be paid',
    bottomSegment: 'Paid',
    total: 'Total',
    monthsToShow: 6,
};

const MOCK_PAYMENTS_HISTORY_BLOCK_DE: CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock = {
    id: 'payments-history-1',
    title: '6-Monats-Historie',
    topSegment: 'Überfällig',
    middleSegment: 'Zu bezahlen',
    bottomSegment: 'Bezahlt',
    total: 'Gesamt',
    monthsToShow: 6,
};

const MOCK_PAYMENTS_HISTORY_BLOCK_PL: CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock = {
    id: 'payments-history-1',
    title: 'Historia 6-miesięczna',
    topSegment: 'Zaległe',
    middleSegment: 'Do zapłaty',
    bottomSegment: 'Zapłacone',
    total: 'Suma',
    monthsToShow: 6,
};

export const mapPaymentsHistoryBlock = (locale: string): CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock => {
    switch (locale) {
        case 'de':
            return MOCK_PAYMENTS_HISTORY_BLOCK_DE;
        case 'pl':
            return MOCK_PAYMENTS_HISTORY_BLOCK_PL;
        default:
            return MOCK_PAYMENTS_HISTORY_BLOCK_EN;
    }
};
