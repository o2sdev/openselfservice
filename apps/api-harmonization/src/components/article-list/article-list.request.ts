import { CMS } from '@o2s/framework/modules';

export class GetArticleListComponentQuery implements Omit<CMS.Request.GetCmsEntryParams, 'locale'> {
    id!: string;
    offset!: number;
    limit!: number;
}

export class GetArticleListComponentBody {
    query?: string;
    category?: string;
    sort?: {
        field: string;
        order: 'asc' | 'desc';
    };
}
