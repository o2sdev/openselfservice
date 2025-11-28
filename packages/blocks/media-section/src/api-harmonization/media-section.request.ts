import { CMS } from '@o2s/framework/modules';

export class GetMediaSectionBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
