import { CMS } from '@o2s/framework/modules';

const MOCK_PAYMENTS_HISTORY_COMPONENT: CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent = {
    id: 'payments-history-1',
    title: '6-months history',
    topSegment: 'Overdue',
    middleSegment: 'To be paid',
    bottomSegment: 'Paid',
    total: 'Total',
    monthsToShow: 6,
};
export const mapPaymentsHistoryComponent = (
    _locale: string,
): CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent => {
    return MOCK_PAYMENTS_HISTORY_COMPONENT;
};
