import { CMS } from '@o2s/framework/modules';

export class GetUserAccountBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    userId!: string;
}
