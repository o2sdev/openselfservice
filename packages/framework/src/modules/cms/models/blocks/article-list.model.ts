import { Block, RichText } from '@/utils/models';

export class ArticleListBlock extends Block.Block<Meta> {
    title?: string;
    description?: RichText.RichText;
    categoryId?: string;
    articleIds?: string[];
    articlesToShow?: number;
    parent?: {
        slug: string;
    };
    labels!: {
        today: string;
        yesterday: string;
        seeAllArticles: string;
    };
}

export class Meta {
    __id!: string;
    title!: string;
    description!: string;
    articles!: string;
}
