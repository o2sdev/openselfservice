import { Models } from '@o2s/utils.api-harmonization';

export class NotificationSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    variant?: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
}

export class NotificationSummaryBlock extends Models.Block.Block {
    __typename!: 'NotificationSummaryBlock';
    layout?: 'vertical' | 'horizontal';
    infoCards!: NotificationSummaryInfoCard[];
}
