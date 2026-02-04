import { Articles, CMS } from '@o2s/configs.integrations';

import { ArticleList, ArticleSearchBlock } from './article-search.model';

export const mapArticleSearch = (
    cms: CMS.Model.ArticleSearchBlock.ArticleSearchBlock,
    _locale: string,
): ArticleSearchBlock => {
    return {
        __typename: 'ArticleSearchBlock',
        id: cms.id,
        title: cms.title,
        inputLabel: cms.inputLabel,
        category: cms.category,
        parent: cms.parent,
        noResults: cms.noResults,
    };
};

export const mapArticles = (articles: Articles.Model.Articles, basePath?: string): ArticleList => {
    return {
        articles: articles.data.map((article) => ({
            label: article.title,
            url: basePath ? `${basePath}/${article.slug}` : article.slug,
        })),
    };
};
