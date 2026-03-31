import { CMS } from '@o2s/framework/modules';

export class GetTicketSummaryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
