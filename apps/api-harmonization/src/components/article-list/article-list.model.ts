import { Articles, Models } from '@o2s/framework/modules';

import { Component } from '../../utils';

export class ArticleListComponent extends Component.Component {
    __typename!: 'ArticleListComponent';
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
}
