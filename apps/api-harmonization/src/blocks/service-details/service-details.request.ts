import { CMS } from '@o2s/framework/modules';

export class GetServiceDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class GetServiceDetailsBlockParams implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}
