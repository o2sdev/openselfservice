import { CMS, Tickets } from '@o2s/framework/modules';

export class GetTicketListBlockQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Tickets.Request.GetTicketListQuery
{
    id!: string;
    offset?: number;
    limit?: number;
}
