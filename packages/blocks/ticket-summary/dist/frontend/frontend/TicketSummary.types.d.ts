import { defineRouting } from 'next-intl/routing';
import { Model } from '../api-harmonization/ticket-summary.client';
export interface TicketSummaryProps {
    id: string;
    accessToken?: string;
    locale: string;
    routing: ReturnType<typeof defineRouting>;
}
export type TicketSummaryPureProps = TicketSummaryProps & Model.TicketSummaryBlock;
export type TicketSummaryRendererProps = Omit<TicketSummaryProps, ''> & {
    slug: string[];
};
//# sourceMappingURL=TicketSummary.types.d.ts.map