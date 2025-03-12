import { CMS } from '@o2s/framework/modules';

export class GetTicketRecentComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
