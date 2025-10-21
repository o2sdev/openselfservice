import { Model } from '../api-harmonization/payments-history.client';

export interface PaymentsHistoryProps {
    id: string;
    accessToken?: string;
    locale: string;
    hasPriority?: boolean;
}

export type PaymentsHistoryPureProps = PaymentsHistoryProps & Model.PaymentsHistoryBlock;
