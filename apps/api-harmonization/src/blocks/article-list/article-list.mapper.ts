import { Articles, CMS } from '../../models';

import { ArticleListBlock } from './article-list.model';

export const mapArticleList = (
    cms: CMS.Model.ArticleListBlock.ArticleListBlock,
    articles: Articles.Model.Articles,
    _locale: string,
): ArticleListBlock => {
    return {
        __typename: 'ArticleListBlock',
        id: cms.id,
        title: cms.title,
        description: cms.description,
        items: articles,
    };
};
