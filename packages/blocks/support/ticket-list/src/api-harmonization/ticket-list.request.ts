import { CMS, Tickets } from '@o2s/framework/modules';

export class GetTicketListBlockQuery
    implements Omit<CMS.Request.GetCmsEntryParams, 'locale'>, Tickets.Request.GetTicketListQuery
{
    id!: string;
    offset?: number;
    limit?: number;
    /**
     * 1-based page from the URL, resolved into an `offset` with the page size the block actually uses.
     * Ignored when `offset` is given. Lets a server render honour `?ticket_page=2` without knowing the
     * CMS pagination config up front.
     */
    page?: number;
    preview?: boolean;
    search?: string;
    priority?: string;
}
