import { Models } from '@o2s/utils.api-harmonization';

export class TicketSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    color?: string;
}

export class TicketSummaryBlock extends Models.Block.Block {
    __typename!: 'TicketSummaryBlock';
    layout?: 'vertical' | 'horizontal';
    infoCards!: TicketSummaryInfoCard[];
}
