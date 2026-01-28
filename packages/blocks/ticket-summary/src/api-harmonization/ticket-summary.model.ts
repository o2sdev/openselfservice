import { Models } from '@o2s/utils.api-harmonization';

export class TicketSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    variant?: 'OPEN' | 'IN_PROGRESS' | 'CLOSED';
}

export class TicketSummaryBlock extends Models.Block.Block {
    __typename!: 'TicketSummaryBlock';
    layout?: 'vertical' | 'horizontal';
    infoCards!: TicketSummaryInfoCard[];
    permissions?: {
        view: boolean;
        create: boolean;
    };
}
