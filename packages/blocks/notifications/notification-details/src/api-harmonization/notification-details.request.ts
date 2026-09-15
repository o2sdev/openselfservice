import { CMS, Notifications } from '@o2s/framework/modules';

export class GetNotificationDetailsBlockParams implements Notifications.Request.GetNotificationParams {
    id!: string;
    preview?: boolean;
}

export class GetNotificationDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
}

export class MarkNotificationAsBlockBody {
    id!: string;
    status!: Notifications.Model.NotificationStatus;
}
