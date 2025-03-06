import { Components } from '@o2s/api-harmonization';

export interface PaymentsHistoryProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type PaymentsHistoryPureProps = PaymentsHistoryProps & Components.PaymentsHistory.Model.PaymentsHistoryComponent;
