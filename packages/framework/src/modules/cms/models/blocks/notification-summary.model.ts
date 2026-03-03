import { NotificationPriority } from '@/modules/notifications/notifications.model';

import { Block } from '@/utils/models';

/** Summary info card item used in notification summary block. */
export class NotificationSummaryInfoCard {
    title!: string;
    icon?: string;
    value!: number;
    description?: string;
    variant!: NotificationPriority;
}

/** CMS block configuration for notification summary cards. */
export class NotificationSummaryBlock extends Block.Block {
    layout?: 'vertical' | 'horizontal';
    infoCards!: NotificationSummaryInfoCard[];
}
