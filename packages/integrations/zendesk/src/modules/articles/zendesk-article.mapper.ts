import { Articles } from '@o2s/framework/modules';

import { type ArticleObject, type CategoryObject, type SectionObject } from '@/generated/help-center';
import type { UserObject } from '@/generated/zendesk';

type ZendeskArticle = ArticleObject;
type ZendeskCategory = CategoryObject;
type ZendeskSection = SectionObject;
type ZendeskUser = UserObject;

/**
 * Extract slug from Zendesk article HTML URL
 * Example: https://company.zendesk.com/hc/en-us/articles/12345-Article-Title
 * Returns: "12345-article-title" or just the ID as fallback
 */
function extractSlugFromUrl(htmlUrl?: string, id?: number): string {
    if (!htmlUrl && id) {
        return id.toString();
    }
    if (!htmlUrl) {
        return '';
    }
    const match = htmlUrl.match(/articles\/(\d+)(?:-([^/]+))?/);
    if (match) {
        return match[2] ? `${match[1]}-${match[2]}` : match[1] || '';
    }
    return id?.toString() || '';
}

/**
 * Parse HTML body into article sections
 * For now, we'll create a single text section with the HTML content
 * TODO: Parse HTML into structured sections (Text/Image) in future iterations
 */
function parseBodyIntoSections(
    body: string | undefined,
    articleId: number,
    createdAt: string,
    updatedAt: string,
): Articles.Model.ArticleSection[] {
    if (!body) {
        return [];
    }

    return [
        {
            id: `section-${articleId}`,
            __typename: 'ArticleSectionText',
            createdAt,
            updatedAt,
            content: body,
        },
    ];
}

export function mapArticle(
    article: ZendeskArticle,
    category?: ZendeskCategory | ZendeskSection,
    author?: ZendeskUser,
): Articles.Model.Article {
    const slug = extractSlugFromUrl(article.html_url, article.id);
    const sections = parseBodyIntoSections(
        article.body,
        article.id!,
        article.created_at || '',
        article.updated_at || '',
    );

    return {
        id: article.id?.toString() || '',
        slug,
        createdAt: article.created_at || '',
        updatedAt: article.updated_at || '',
        title: article.title || '',
        lead: '', // Zendesk articles don't have a separate lead field, could extract from body
        tags: article.label_names || [],
        category: category
            ? {
                  id: (category.id ?? 0).toString(),
                  title: category.name || '',
              }
            : undefined,
        author: author
            ? {
                  name: author.name || '',
                  email: author.email,
              }
            : undefined,
        sections,
    };
}

export function mapArticles(articles: ZendeskArticle[], total: number): Articles.Model.Articles {
    return {
        data: articles.map((article) => {
            const slug = extractSlugFromUrl(article.html_url, article.id);
            return {
                id: article.id?.toString() || '',
                slug,
                createdAt: article.created_at || '',
                updatedAt: article.updated_at || '',
                title: article.title || '',
                lead: '', // Zendesk articles don't have a separate lead field
                tags: article.label_names || [],
            };
        }),
        total,
    };
}

export function mapCategory(category: ZendeskCategory): Articles.Model.Category {
    return {
        id: category.id?.toString() || '',
        slug: category.id?.toString() || '', // Zendesk categories don't have slugs, use ID
        createdAt: category.created_at || '',
        updatedAt: category.updated_at || '',
        title: category.name || '',
        description: category.description || '',
    };
}

export function mapCategories(categories: ZendeskCategory[], total: number): Articles.Model.Categories {
    return {
        data: categories.map((category) => mapCategory(category)),
        total,
    };
}
