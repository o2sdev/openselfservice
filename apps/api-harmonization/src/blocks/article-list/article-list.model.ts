import { Articles, CMS } from '../../models';
import { Block } from '../../utils';

export class ArticleListBlock extends Block.Block {
    __typename!: 'ArticleListBlock';
    title!: CMS.Model.ArticleListBlock.ArticleListBlock['title'];
    description!: CMS.Model.ArticleListBlock.ArticleListBlock['description'];
    items!: Articles.Model.Articles;
}
