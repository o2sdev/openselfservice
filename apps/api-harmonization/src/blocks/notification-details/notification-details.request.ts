import { CMS, Notifications } from '@o2s/framework/modules';

export class GetNotificationDetailsBlockParams implements Notifications.Request.GetNotificationParams {
    id!: string;
}

export class GetNotificationDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class MarkNotificationAsBlockBody {
    id!: string;
    status!: Notifications.Model.NotificationStatus;
}
