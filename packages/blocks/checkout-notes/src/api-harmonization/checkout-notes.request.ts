import { CMS } from '@o2s/framework/modules';

export class GetCheckoutNotesBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
