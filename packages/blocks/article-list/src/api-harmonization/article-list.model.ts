import { Articles, CMS } from '@o2s/configs.integrations';

import { Models as ApiModels } from '@o2s/utils.api-harmonization';

import { Models } from '@o2s/framework/modules';

export class ArticleListBlock extends ApiModels.Block.Block {
    __typename!: 'ArticleListBlock';
    title!: CMS.Model.ArticleListBlock.ArticleListBlock['title'];
    description!: CMS.Model.ArticleListBlock.ArticleListBlock['description'];
    categoryLink?: Models.Link.Link;
    items!: Articles.Model.Articles;
    meta?: CMS.Model.ArticleListBlock.ArticleListBlock['meta'];
}
