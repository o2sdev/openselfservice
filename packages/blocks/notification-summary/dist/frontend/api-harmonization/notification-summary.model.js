import { Models } from '@o2s/utils.api-harmonization';
export class NotificationSummaryInfoCard {
    title;
    icon;
    value;
    description;
    variant;
}
export class NotificationSummaryBlock extends Models.Block.Block {
    __typename;
    layout;
    infoCards;
}
