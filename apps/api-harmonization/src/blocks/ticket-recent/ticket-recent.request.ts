import { CMS } from '@o2s/framework/modules';

export class GetTicketRecentBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
