import { Article } from '@/modules/articles/articles.model';
import { Block, RichText } from '@/utils/models';

export class ArticleListBlock extends Block.Block {
    title!: string;
    description!: RichText.RichText;
    items!: Omit<Article, 'sections'>[];
}
