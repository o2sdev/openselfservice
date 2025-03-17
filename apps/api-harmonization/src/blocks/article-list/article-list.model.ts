import { Articles, Models } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class ArticleListBlock extends Block.Block {
    __typename!: 'ArticleListBlock';
    title!: string;
    subtitle?: string;
    table!: Models.DataTable.DataTable<Articles.Model.Article>;
    pagination!: Models.Pagination.Pagination;
    filters?: Models.Filters.Filters<Articles.Model.Article>;
    noResults!: {
        title: string;
        description: string;
    };
    articles!: {
        data: Article[];
        total: number;
    };
}

export class Article {
    id!: Articles.Model.Article['id'];
    title!: Articles.Model.Article['title'];
    createdAt!: Articles.Model.Article['createdAt'];
    updatedAt!: Articles.Model.Article['updatedAt'];
    category!: {
        value: Articles.Model.Article['category'];
        label: string;
    };
}
