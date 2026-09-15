import { CMS, Tickets } from '@o2s/framework/modules';

export class GetTicketDetailsBlockParams implements Tickets.Request.GetTicketParams {
    id!: string;
    preview?: boolean;
}

export class GetTicketDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
}
