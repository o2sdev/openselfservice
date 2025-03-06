import { Notification } from '@/modules/notifications/notifications.model';
import { Component, Mapping } from '@/utils/models';

export class NotificationDetailsComponent extends Component.Component {
    properties!: {
        [key: string]: string;
    };
    fieldMapping!: Mapping.Mapping<Notification>;
    labels!: {
        today: string;
        yesterday: string;
    };
}
