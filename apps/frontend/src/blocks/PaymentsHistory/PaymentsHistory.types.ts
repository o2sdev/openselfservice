import { Blocks } from '@o2s/api-harmonization';

export interface PaymentsHistoryProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type PaymentsHistoryPureProps = PaymentsHistoryProps & Blocks.PaymentsHistory.Model.PaymentsHistoryBlock;
