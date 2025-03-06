import { CMS } from '@o2s/framework/modules';

export class GetFaqComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
