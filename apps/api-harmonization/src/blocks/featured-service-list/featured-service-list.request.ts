import { CMS } from '@o2s/framework/modules';

export class GetFeaturedServiceListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
