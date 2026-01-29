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
 * Extract slug from Zendesk category HTML URL
 * Example: https://company.zendesk.com/hc/en-us/categories/12345-Category-Name
 * Returns: "12345-category-name" or just the ID as fallback
 */
function extractCategorySlugFromUrl(htmlUrl?: string, id?: number): string {
    if (!htmlUrl && id) {
        return id.toString();
    }
    if (!htmlUrl) {
        return '';
    }
    const match = htmlUrl.match(/categories\/(\d+)(?:-([^/]+))?/);
    if (match) {
        return match[2] ? `${match[1]}-${match[2]}` : match[1] || '';
    }
    return id?.toString() || '';
}

/**
 * Extract first paragraph from HTML body for use as lead text
 * Removes HTML tags and extracts the first meaningful text content
 */
function extractLeadFromBody(body: string | undefined, maxLength = 300): string {
    if (!body) {
        return '';
    }

    // Try to find first <p> tag
    const pMatch = body.match(/<p[^>]*>(.*?)<\/p>/is);
    if (pMatch && pMatch[1]) {
        const text = pMatch[1]
            .replace(/<[^>]+>/g, '') // Remove all HTML tags
            .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
            .replace(/&[a-z]+;/gi, ' ') // Replace other HTML entities with space
            .replace(/\s+/g, ' ') // Normalize whitespace
            .trim();

        if (text.length > 0) {
            return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
        }
    }

    // Fallback: extract first text content after removing HTML tags
    const text = body
        .replace(/<[^>]+>/g, ' ') // Remove all HTML tags
        .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
        .replace(/&[a-z]+;/gi, ' ') // Replace other HTML entities with space
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();

    if (text.length === 0) {
        return '';
    }

    // Take first sentence or first maxLength characters
    const firstSentence = text.match(/^[^.!?]+[.!?]/);
    if (firstSentence && firstSentence[0].length <= maxLength) {
        return firstSentence[0].trim();
    }

    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
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
    const articleSlug = extractSlugFromUrl(article.html_url, article.id);
    const basePath = '/help-and-support'; // Base path for help center articles

    // Build full slug with category if available
    // Check if category is ZendeskCategory (has no category_id property) vs ZendeskSection (has category_id)
    let fullSlug = articleSlug;
    if (category && !('category_id' in category)) {
        // category is ZendeskCategory (not ZendeskSection)
        const categorySlug = mapCategory(category as ZendeskCategory).slug;
        fullSlug = `${basePath}/${categorySlug}/${articleSlug}`;
    }

    const sections = parseBodyIntoSections(
        article.body,
        article.id!,
        article.created_at || '',
        article.updated_at || '',
    );
    const lead = extractLeadFromBody(article.body);

    return {
        id: article.id?.toString() || '',
        slug: fullSlug,
        createdAt: article.created_at || '',
        updatedAt: article.updated_at || '',
        title: article.title || '',
        lead,
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

export function mapArticles(
    articles: ZendeskArticle[],
    total: number,
    category?: ZendeskCategory,
): Articles.Model.Articles {
    const categorySlug = category ? mapCategory(category).slug : undefined;
    const basePath = '/help-and-support'; // Base path for help center articles

    return {
        data: articles.map((article) => {
            const articleSlug = extractSlugFromUrl(article.html_url, article.id);
            // Build full slug: /help-and-support/{category-slug}/{article-slug}
            const fullSlug = categorySlug ? `${basePath}/${categorySlug}/${articleSlug}` : articleSlug;
            const lead = extractLeadFromBody(article.body);
            return {
                id: article.id?.toString() || '',
                slug: fullSlug,
                createdAt: article.created_at || '',
                updatedAt: article.updated_at || '',
                title: article.title || '',
                lead,
                tags: article.label_names || [],
            };
        }),
        total,
    };
}

export function mapCategory(category: ZendeskCategory): Articles.Model.Category {
    const slug = extractCategorySlugFromUrl(category.html_url, category.id);
    return {
        id: category.id?.toString() || '',
        slug,
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
