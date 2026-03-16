import { Articles } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

export class ArticleBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleBlock';
    data!: Articles.Model.Article;
}
