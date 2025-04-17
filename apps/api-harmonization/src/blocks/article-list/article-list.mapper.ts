import { CMS } from '../../models';

import { ArticleListBlock } from './article-list.model';

export const mapArticleList = (cms: CMS.Model.ArticleListBlock.ArticleListBlock, _locale: string): ArticleListBlock => {
    return {
        __typename: 'ArticleListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: cms.items,
    };
};
