import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_HISTORY_COMPONENT_EN: CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent = {
    id: 'payments-history-1',
    title: '6-months history',
    topSegment: 'Overdue',
    middleSegment: 'To be paid',
    bottomSegment: 'Paid',
    total: 'Total',
    monthsToShow: 6,
};

const MOCK_PAYMENTS_HISTORY_COMPONENT_DE: CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent = {
    id: 'payments-history-1',
    title: '6-Monats-Historie',
    topSegment: 'Überfällig',
    middleSegment: 'Zu bezahlen',
    bottomSegment: 'Bezahlt',
    total: 'Gesamt',
    monthsToShow: 6,
};

const MOCK_PAYMENTS_HISTORY_COMPONENT_PL: CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent = {
    id: 'payments-history-1',
    title: 'Historia 6-miesięczna',
    topSegment: 'Zaległe',
    middleSegment: 'Do zapłaty',
    bottomSegment: 'Zapłacone',
    total: 'Suma',
    monthsToShow: 6,
};

export const mapPaymentsHistoryComponent = (
    locale: string,
): CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent => {
    switch (locale) {
        case 'de':
            return MOCK_PAYMENTS_HISTORY_COMPONENT_DE;
        case 'pl':
            return MOCK_PAYMENTS_HISTORY_COMPONENT_PL;
        default:
            return MOCK_PAYMENTS_HISTORY_COMPONENT_EN;
    }
};
