import { Blocks } from '@o2s/api-harmonization';

export interface OrdersSummaryProps {
    id: string;
    accessToken: string;
    locale: string;
}

export type OrdersSummaryPureProps = OrdersSummaryProps & Blocks.OrdersSummary.Model.OrdersSummaryBlock;
