import { Articles } from '../../models';
import { Block } from '../../utils';

export class ArticleBlock extends Block.Block {
    __typename!: 'ArticleBlock';
    data!: Articles.Model.Article;
}
