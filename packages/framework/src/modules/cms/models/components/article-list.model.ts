import { Article } from '@/modules/articles/articles.model';
import { Component, DataTable, Filters, Pagination } from '@/utils/models';

export class ArticleListComponent extends Component.Component {
    title!: string;
    subtitle?: string;
    table!: DataTable.DataTable<Article>;
    pagination!: Pagination.Pagination;
    filters?: Filters.Filters<Article>;
    noResults!: {
        title: string;
        description: string;
    };
    labels!: {
        today: string;
        yesterday: string;
    };
    detailsUrl!: string;
}
