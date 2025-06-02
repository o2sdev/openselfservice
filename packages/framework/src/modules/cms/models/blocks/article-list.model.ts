import { Block, RichText } from '@/utils/models';

export class ArticleListBlock extends Block.Block {
    title?: string;
    description?: RichText.RichText;
    categorySlug?: string;
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
