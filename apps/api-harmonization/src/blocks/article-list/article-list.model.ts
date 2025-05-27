import { Articles, CMS, Models } from '@o2s/framework/modules';

import { Block } from '../../utils';

export class ArticleListBlock extends Block.Block {
    __typename!: 'ArticleListBlock';
    title!: CMS.Model.ArticleListBlock.ArticleListBlock['title'];
    description!: CMS.Model.ArticleListBlock.ArticleListBlock['description'];
    categoryLink?: Models.Link.Link;
    items!: Articles.Model.Articles;
}
