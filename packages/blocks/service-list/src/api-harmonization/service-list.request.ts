import { CMS } from '@o2s/configs.integrations';

export class GetServiceListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
    type?: string;
    category?: string;
    status?: string;
    sort?: string;
}
