import { Models } from '@o2s/utils.api-harmonization';
import { Notifications } from '@o2s/framework/modules';
export declare class NotificationSummaryInfoCard {
    title: string;
    icon?: string;
    value: number;
    description?: string;
    variant: Notifications.Model.NotificationPriority;
}
export declare class NotificationSummaryBlock extends Models.Block.Block {
    __typename: 'NotificationSummaryBlock';
    layout?: 'vertical' | 'horizontal';
    infoCards: NotificationSummaryInfoCard[];
}
//# sourceMappingURL=notification-summary.model.d.ts.map