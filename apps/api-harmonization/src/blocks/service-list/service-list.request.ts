import { CMS } from '../../models';

export class GetServiceListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset?: number;
    limit?: number;
    type?: string;
    category?: string;
    status?: string;
    sort?: string;
}
