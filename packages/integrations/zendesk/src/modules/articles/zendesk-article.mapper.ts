import { convert } from 'html-to-text';

import { Articles } from '@o2s/framework/modules';

import {
    type ArticleAttachmentObject,
    type ArticleObject,
    type CategoryObject,
    type SectionObject,
} from '@/generated/help-center';
import type { UserObject } from '@/generated/zendesk';

type ZendeskArticle = ArticleObject;
type ZendeskCategory = CategoryObject;
type ZendeskSection = SectionObject;
type ZendeskUser = UserObject;
type ZendeskAttachment = ArticleAttachmentObject;

/**
 * Extract avatar URL from Zendesk user object
 * Handles both photo.content_url and remote_photo_url
 */
function getAvatarUrl(author: ZendeskUser): string | undefined {
    // photo is typed as { [key: string]: unknown } in Zendesk API
    const photoUrl = author.photo && 'content_url' in author.photo ? author.photo.content_url : undefined;
    if (typeof photoUrl === 'string') {
        return photoUrl;
    }

    // remote_photo_url is only available in UserForAdmin
    if ('remote_photo_url' in author) {
        const url = author.remote_photo_url as unknown;
        return typeof url === 'string' ? url : undefined;
    }

    return undefined;
}

/**
 * Map Zendesk user to article author
 */
function mapAuthor(author: ZendeskUser): Articles.Model.Article['author'] {
    const avatarUrl = getAvatarUrl(author);
    return {
        name: author.name || '',
        email: author.email,
        position: author.role,
        avatar: avatarUrl ? { url: avatarUrl, alt: '' } : undefined,
    };
}

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

function extractLeadFromBody(body: string | undefined, maxLength = 300): string {
    if (!body) {
        return '';
    }

    const text = convert(body, {
        wordwrap: false,
        preserveNewlines: false,
        limits: { maxChildNodes: 10 }, // Optimize: don't process entire document for short lead
    }).trim();

    return text.length <= maxLength ? text : `${text.substring(0, maxLength)}...`;
}

/**
 * Parse HTML body into article sections
 * Creates text section for HTML body only (inline images are already embedded in HTML)
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
            id: `section-text-${articleId}`,
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
    attachments: ZendeskAttachment[] = [],
): Articles.Model.Article {
    // Article slug is just the article segment (without category)
    // Full URL will be built by the page mapper using category.slug + article.slug
    const articleSlug = extractSlugFromUrl(article.html_url, article.id);

    const sections = parseBodyIntoSections(
        article.body,
        article.id!,
        article.created_at || '',
        article.updated_at || '',
    );
    const lead = extractLeadFromBody(article.body);

    // Extract featured image and thumbnail from attachments
    const nonInlineImages = attachments.filter(
        (att) => !att.inline && att.content_type?.startsWith('image/') && att.content_url,
    );
    const inlineImages = attachments.filter(
        (att) => att.inline && att.content_type?.startsWith('image/') && att.content_url,
    );

    // Featured image: first non-inline, fallback to first inline
    const featuredImage = nonInlineImages[0]
        ? { url: nonInlineImages[0].content_url!, alt: nonInlineImages[0].file_name || '' }
        : inlineImages[0]
          ? { url: inlineImages[0].content_url!, alt: inlineImages[0].file_name || '' }
          : undefined;

    // Thumbnail: first inline (most common case), fallback to first non-inline
    const thumbnail = inlineImages[0]
        ? { url: inlineImages[0].content_url!, alt: inlineImages[0].file_name || '' }
        : nonInlineImages[0]
          ? { url: nonInlineImages[0].content_url!, alt: nonInlineImages[0].file_name || '' }
          : undefined;

    return {
        id: article.id?.toString() || '',
        slug: articleSlug,
        createdAt: article.created_at || '',
        updatedAt: article.updated_at || '',
        title: article.title || '',
        lead,
        tags: article.label_names || [],
        image: featuredImage,
        thumbnail,
        category: category
            ? {
                  id: (category.id ?? 0).toString(),
                  title: category.name || '',
              }
            : undefined,
        author: author ? mapAuthor(author) : undefined,
        sections,
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

/**
 * Map articles for search results (minimal data - no attachments/authors needed)
 * Used when only basic article info with category slugs is required
 */
export function mapSearchArticles(
    articles: ZendeskArticle[],
    total: number,
    categoriesArray: (ZendeskCategory | undefined)[] = [],
): Articles.Model.Articles {
    return {
        data: articles.map((article, index) => {
            const articleSlug = extractSlugFromUrl(article.html_url, article.id);
            const category = categoriesArray[index];
            const categorySlug = category ? mapCategory(category).slug : undefined;
            const fullSlug = categorySlug ? `${categorySlug}/${articleSlug}` : articleSlug;
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

/**
 * Map articles with full data (attachments, authors, categories)
 * Used for article lists where thumbnails and author info are displayed
 */
export function mapArticlesWithCategories(
    articles: ZendeskArticle[],
    total: number,
    attachmentsArray: ZendeskAttachment[][] = [],
    authorsArray: (ZendeskUser | undefined)[] = [],
    categoriesArray: (ZendeskCategory | undefined)[] = [],
): Articles.Model.Articles {
    return {
        data: articles.map((article, index) => {
            const articleSlug = extractSlugFromUrl(article.html_url, article.id);
            const category = categoriesArray[index];
            const categorySlug = category ? mapCategory(category).slug : undefined;
            const fullSlug = categorySlug ? `${categorySlug}/${articleSlug}` : articleSlug;
            const lead = extractLeadFromBody(article.body);

            const attachments = attachmentsArray[index] || [];
            const inlineImages = attachments.filter(
                (att) => att.inline && att.content_type?.startsWith('image/') && att.content_url,
            );
            const nonInlineImages = attachments.filter(
                (att) => !att.inline && att.content_type?.startsWith('image/') && att.content_url,
            );

            const thumbnail = inlineImages[0]
                ? { url: inlineImages[0].content_url!, alt: inlineImages[0].file_name || '' }
                : nonInlineImages[0]
                  ? { url: nonInlineImages[0].content_url!, alt: nonInlineImages[0].file_name || '' }
                  : undefined;

            const image = nonInlineImages[0]
                ? { url: nonInlineImages[0].content_url!, alt: nonInlineImages[0].file_name || '' }
                : inlineImages[0]
                  ? { url: inlineImages[0].content_url!, alt: inlineImages[0].file_name || '' }
                  : undefined;

            const author = authorsArray[index];

            return {
                id: article.id?.toString() || '',
                slug: fullSlug,
                createdAt: article.created_at || '',
                updatedAt: article.updated_at || '',
                title: article.title || '',
                lead,
                tags: article.label_names || [],
                thumbnail,
                image,
                author: author ? mapAuthor(author) : undefined,
            };
        }),
        total,
    };
}
