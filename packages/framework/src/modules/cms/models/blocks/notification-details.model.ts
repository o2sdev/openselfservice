import { Notification } from '@/modules/notifications/notifications.model';

import { Block, Mapping } from '@/utils/models';

export class NotificationDetailsBlock extends Block.Block {
    properties!: {
        [key: string]: string;
    };
    fieldMapping!: Mapping.Mapping<Notification>;
    labels!: {
        today: string;
        yesterday: string;
    };
}
