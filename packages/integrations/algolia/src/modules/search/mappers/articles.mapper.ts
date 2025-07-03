import { Articles, Search } from '@o2s/framework/modules';

import { Model } from '../models';

export const mapArticlesFromSearch = (
    searchResult: Search.Model.SearchResult<Model.SearchEngineArticleModel>,
): Articles.Model.Articles => {
    const articles: Articles.Model.Article[] = searchResult.hits.map(
        (hit): Articles.Model.Article => ({
            id: hit.documentId,
            slug: hit.slug,
            permissions: [],
            createdAt: hit.updatedAt,
            updatedAt: hit.updatedAt,
            title: hit.SEO.title,
            lead: hit.SEO.description,
            tags: [],
            sections: [],
        }),
    );

    return {
        data: articles,
        total: articles.length,
    };
};
