import { Articles, CMS } from '@o2s/framework/modules';

import { formatDateRelative } from '@o2s/api-harmonization/utils/date';

import { Article, ArticleDetailsComponent, ArticleSection } from './article-details.model';

export const mapArticleDetails = (
    article: Articles.Model.Article,
    cms: CMS.Model.ArticleDetailsComponent.ArticleDetailsComponent,
    locale: string,
): ArticleDetailsComponent => {
    return {
        __typename: 'ArticleDetailsComponent',
        data: {
            id: article.id,
            title: article.title,
            lead: article.lead,
            createdAt: formatDateRelative(article.createdAt, locale, cms.labels.today, cms.labels.yesterday),
            updatedAt: formatDateRelative(article.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
            image: article.image,
            thumbnail: article.thumbnail,
            sections: mapSections(article.sections),
        },
    } as ArticleDetailsComponent;
};

export const mapArticle = (
    article: Articles.Model.Article,
    cms: CMS.Model.ArticleDetailsComponent.ArticleDetailsComponent,
    locale: string,
): Article => {
    return {
        id: article.id,
        title: article.title,
        lead: article.lead,
        createdAt: formatDateRelative(article.createdAt, locale, cms.labels.today, cms.labels.yesterday),
        updatedAt: formatDateRelative(article.updatedAt, locale, cms.labels.today, cms.labels.yesterday),
        image: article.image,
        thumbnail: article.thumbnail,
        sections: mapSections(article.sections) || [],
    };
};

const mapSections = (sections: Articles.Model.ArticleSection[] | undefined): ArticleSection[] | undefined => {
    if (!sections || sections.length === 0) {
        return undefined;
    }

    return sections
        .map((section) => {
            if (section.__typename === 'ArticleSectionText') {
                return {
                    id: section.id,
                    title: section.title,
                    content: section.content,
                };
            } else if (section.__typename === 'ArticleSectionImage') {
                return {
                    id: section.id,
                    url: section.url,
                    alt: section.alt,
                    caption: section.caption,
                };
            }
            return undefined;
        })
        .filter((section): section is ArticleSection => section !== undefined);
};
