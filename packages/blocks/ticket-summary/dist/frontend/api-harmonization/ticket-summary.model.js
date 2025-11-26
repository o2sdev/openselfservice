import { Models } from '@o2s/utils.api-harmonization';
export class TicketSummaryInfoCard {
    title;
    icon;
    value;
    description;
    variant;
}
export class TicketSummaryBlock extends Models.Block.Block {
    __typename;
    layout;
    infoCards;
}
