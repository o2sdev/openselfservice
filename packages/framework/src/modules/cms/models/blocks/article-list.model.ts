import { Article } from '@/modules/articles/articles.model';
import { Block, DataTable, Filters, Mapping, Pagination } from '@/utils/models';

export class ArticleListBlock extends Block.Block {
    title!: string;
    subtitle?: string;
    table!: DataTable.DataTable<Article>;
    pagination!: Pagination.Pagination;
    filters?: Filters.Filters<Article>;
    fieldMapping!: Mapping.Mapping<Article>;
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
