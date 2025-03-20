import { CMS } from '@o2s/framework/modules';

export class GetServiceListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    locale!: string;
    offset!: number;
    limit!: number;
}
