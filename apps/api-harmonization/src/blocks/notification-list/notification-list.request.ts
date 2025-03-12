import { CMS } from '@o2s/framework/modules';

export class GetNotificationListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
}
