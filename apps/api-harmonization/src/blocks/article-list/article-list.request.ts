import { CMS } from '@o2s/framework/modules';

export class GetArticleListBlockQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset!: number;
    limit!: number;
}

export class GetArticleListBlockBody {
    query?: string;
    category?: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}
