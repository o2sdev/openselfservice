import { CMS } from '@o2s/framework/modules';

export class GetPricingSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
