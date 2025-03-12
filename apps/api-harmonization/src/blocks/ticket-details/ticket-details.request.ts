import { CMS, Tickets } from '@o2s/framework/modules';

export class GetTicketDetailsComponentParams implements Tickets.Request.GetTicketParams {
    id!: string;
}

export class GetTicketDetailsComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
