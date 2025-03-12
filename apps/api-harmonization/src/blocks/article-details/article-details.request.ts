import { Articles, CMS } from '@o2s/framework/modules';

export class GetArticleDetailsBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
}

export class GetArticleDetailsBlockParams implements Articles.Request.GetArticleParams {
    id!: string;
}
