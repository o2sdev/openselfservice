import { CMS } from '@o2s/framework/modules';

export class GetFaqBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
