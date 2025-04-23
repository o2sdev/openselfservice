import { Block, RichText } from '@/utils/models';

export class ArticleListBlock extends Block.Block {
    title!: string;
    description!: RichText.RichText;
    categoryId?: string;
    articleIds?: string[];
    parent?: {
        slug: string;
    };
}
