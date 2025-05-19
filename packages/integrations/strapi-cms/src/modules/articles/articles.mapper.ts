import { NotFoundException } from '@nestjs/common';

import { Articles, CMS } from '@o2s/framework/modules';

import { ArticleSimpleFragment, ArticleTemplateFragment, CategoryFragment, GetArticleQuery } from '@/generated/strapi';
import { mapMedia } from '@/modules/cms/mappers/cms.media.mapper';

export const mapCategory = (data: CategoryFragment): Articles.Model.Category => {
    return {
        id: data.documentId,
        slug: `${data.parent?.slug ? `${data.parent?.slug}/` : ''}${data.slug}`,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        title: data.name,
        description: data.description,
        icon: data.icon,
        parent: data.parent
            ? {
                  slug: data.parent.slug,
                  title: data.parent?.SEO.title,
              }
            : undefined,
    };
};

export const mapCategories = (data: CategoryFragment[], total: number): Articles.Model.Categories => {
    return {
        data: data.map((category) => mapCategory(category)),
        total: total,
    };
};

export const mapArticle = (
    page: CMS.Model.Page.Page,
    article: GetArticleQuery,
    baseUrl: string,
): Articles.Model.Article => {
    const component = article.component!.content[0];

    if (!component) {
        throw new NotFoundException();
    }

    switch (component.__typename) {
        case 'ComponentComponentsArticle':
            return {
                id: page.id,
                slug: page.slug,
                isProtected: page.isProtected,
                createdAt: page.updatedAt,
                updatedAt: page.updatedAt,
                title: page.seo.title,
                lead: page.seo.description,
                tags: [],
                image: page.seo.image,
                thumbnail: page.seo.image,
                category: component.category
                    ? {
                          id: component.category.slug,
                          title: component.category?.name,
                      }
                    : undefined,
                author: component.author
                    ? {
                          name: component.author.name,
                          position: component.author.position,
                          avatar: mapMedia(component.author.avatar[0], baseUrl),
                      }
                    : undefined,
                sections: component.sections.map((section) => {
                    switch (section.__typename) {
                        case 'ComponentContentArticleSection':
                            return {
                                id: section.id,
                                __typename: 'ArticleSectionText',
                                createdAt: page.updatedAt,
                                updatedAt: page.updatedAt,
                                title: section.title,
                                content: section.content,
                            };
                    }
                }),
            };
    }

    throw new NotFoundException();
};

export const mapArticles = (
    data: ArticleTemplateFragment[],
    total: number,
    baseUrl: string,
): Articles.Model.Articles => {
    return {
        data: data.map((page) => {
            let article: ArticleSimpleFragment | undefined;

            switch (page.article[0]?.__typename) {
                case 'ComponentTemplatesOneColumn':
                    article = page.article[0].mainSlot[0]?.content.find(
                        (content) => content.__typename === 'ComponentComponentsArticle',
                    ) as ArticleSimpleFragment;
            }

            return {
                id: page.documentId,
                slug: page.slug,
                isProtected: page.protected,
                createdAt: page.updatedAt,
                updatedAt: page.updatedAt,
                title: page.SEO.title,
                lead: page.SEO.description,
                tags: [],
                image: mapMedia(page.SEO.image, baseUrl),
                thumbnail: mapMedia(page.SEO.image, baseUrl),
                category: article?.category
                    ? {
                          id: article.category.slug,
                          title: article.category?.name,
                      }
                    : undefined,
                author: article?.author
                    ? {
                          name: article.author.name,
                          position: article.author.position,
                          avatar: mapMedia(article.author.avatar[0], baseUrl),
                      }
                    : undefined,
            };
        }),
        total: total,
    };
};
