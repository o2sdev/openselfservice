import { CMS } from '@o2s/configs.integrations';

export class GetServiceDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
}

export class GetServiceDetailsBlockParams implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    preview?: boolean;
}
