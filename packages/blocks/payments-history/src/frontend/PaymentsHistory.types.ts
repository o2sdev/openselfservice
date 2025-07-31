import { Model } from '../api-harmonization/payments-history.client';

export interface PaymentsHistoryProps {
    id: string;
    accessToken?: string;
    locale: string;
}

export type PaymentsHistoryPureProps = PaymentsHistoryProps & Model.PaymentsHistoryBlock;
