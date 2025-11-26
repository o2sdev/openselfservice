import { Models } from '@o2s/utils.api-harmonization';
export declare class TicketSummaryInfoCard {
    title: string;
    icon?: string;
    value: number;
    description?: string;
    variant?: 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
}
export declare class TicketSummaryBlock extends Models.Block.Block {
    __typename: 'TicketSummaryBlock';
    layout?: 'vertical' | 'horizontal';
    infoCards: TicketSummaryInfoCard[];
}
//# sourceMappingURL=ticket-summary.model.d.ts.map