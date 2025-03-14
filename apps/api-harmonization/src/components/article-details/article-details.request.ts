import { Articles, CMS } from '@o2s/framework/modules';

export class GetArticleDetailsComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class GetArticleDetailsComponentParams implements Omit<Articles.Request.GetArticleParams, 'locale'> {
    id!: string;
}
