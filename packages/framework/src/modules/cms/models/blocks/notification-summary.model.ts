import { NotificationPriority } from '@/modules/notifications/notifications.model';

import { Block } from '@/utils/models';

export class NotificationSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    variant!: NotificationPriority;
}

export class NotificationSummaryBlock extends Block.Block {
    layout?: 'vertical' | 'horizontal';
    infoCards!: NotificationSummaryInfoCard[];
}
