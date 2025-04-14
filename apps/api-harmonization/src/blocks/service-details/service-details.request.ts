import { CMS } from '../../models';

export class GetServiceDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class GetServiceDetailsBlockParams implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
