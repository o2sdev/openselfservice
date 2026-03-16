import { Articles } from '@o2s/configs.integrations';

export class ArticleBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleBlock';
    data!: Articles.Model.Article;
}
