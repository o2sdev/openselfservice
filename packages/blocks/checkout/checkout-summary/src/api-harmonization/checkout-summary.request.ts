import { CMS } from '@o2s/framework/modules';

export class GetCheckoutSummaryBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
