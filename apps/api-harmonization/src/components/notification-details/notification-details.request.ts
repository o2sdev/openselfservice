import { CMS, Notifications } from '@o2s/framework/modules';

export class GetNotificationDetailsComponentParams implements Notifications.Request.GetNotificationParams {
    id!: string;
}

export class GetNotificationDetailsComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class MarkNotificationAsComponentBody {
    id!: string;
    status!: Notifications.Model.NotificationStatus;
}
