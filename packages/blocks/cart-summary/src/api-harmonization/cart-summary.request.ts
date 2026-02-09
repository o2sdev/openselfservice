import { CMS } from '@o2s/framework/modules';

export class GetCartSummaryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
