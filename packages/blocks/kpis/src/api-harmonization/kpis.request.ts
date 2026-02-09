import { CMS } from '@o2s/framework/modules';

export class GetKpisBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
