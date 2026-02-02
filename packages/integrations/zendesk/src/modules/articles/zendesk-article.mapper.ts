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

/** Base path for help center articles (full slug prefix for category and article URLs) */
const HELP_AND_SUPPORT_BASE_PATH = '/help-and-support';

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
 * Parse HTML body into article sections with attachments
 * Creates text section for HTML body and image sections for inline attachments
 */
function parseBodyIntoSections(
    body: string | undefined,
    articleId: number,
    createdAt: string,
    updatedAt: string,
    attachments: ZendeskAttachment[] = [],
): Articles.Model.ArticleSection[] {
    const sections: Articles.Model.ArticleSection[] = [];

    // Add main text section with HTML body
    if (body) {
        sections.push({
            id: `section-text-${articleId}`,
            __typename: 'ArticleSectionText',
            createdAt,
            updatedAt,
            content: body,
        });
    }

    // Add image sections for inline attachments
    // Filter only image attachments that are inline
    const imageAttachments = attachments.filter(
        (att) => att.inline && att.content_type?.startsWith('image/') && att.content_url,
    );

    imageAttachments.forEach((attachment, index) => {
        sections.push({
            id: `section-image-${articleId}-${index}`,
            __typename: 'ArticleSectionImage',
            createdAt: attachment.created_at || createdAt,
            updatedAt: attachment.updated_at || updatedAt,
            image: {
                url: attachment.content_url!,
                alt: attachment.file_name || `Image ${index + 1}`,
            },
            caption: attachment.file_name,
        });
    });

    return sections;
}

export function mapArticle(
    article: ZendeskArticle,
    category?: ZendeskCategory | ZendeskSection,
    author?: ZendeskUser,
    attachments: ZendeskAttachment[] = [],
): Articles.Model.Article {
    const articleSlug = extractSlugFromUrl(article.html_url, article.id);

    // Build full slug with category if available (category.slug is already full path)
    // Check if category is ZendeskCategory (has no category_id property) vs ZendeskSection (has category_id)
    let fullSlug = articleSlug;
    if (category && !('category_id' in category)) {
        // category is ZendeskCategory (not ZendeskSection)
        const categorySlug = mapCategory(category as ZendeskCategory).slug;
        fullSlug = `${categorySlug}/${articleSlug}`;
    }

    const sections = parseBodyIntoSections(
        article.body,
        article.id!,
        article.created_at || '',
        article.updated_at || '',
        attachments,
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
        ? {
              url: nonInlineImages[0].content_url!,
              alt: nonInlineImages[0].file_name || article.title || 'Article image',
          }
        : inlineImages[0]
          ? {
                url: inlineImages[0].content_url!,
                alt: inlineImages[0].file_name || article.title || 'Article image',
            }
          : undefined;

    // Thumbnail: first inline (most common case), fallback to first non-inline
    const thumbnail = inlineImages[0]
        ? {
              url: inlineImages[0].content_url!,
              alt: inlineImages[0].file_name || article.title || 'Article thumbnail',
          }
        : nonInlineImages[0]
          ? {
                url: nonInlineImages[0].content_url!,
                alt: nonInlineImages[0].file_name || article.title || 'Article thumbnail',
            }
          : undefined;

    return {
        id: article.id?.toString() || '',
        slug: fullSlug,
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
        author: author
            ? {
                  name: author.name || '',
                  email: author.email,
                  position: author.role,
                  avatar: (() => {
                      const photoUrl = getAvatarUrl(author);
                      return photoUrl
                          ? {
                                url: photoUrl,
                                alt: author.name || '',
                            }
                          : undefined;
                  })(),
              }
            : undefined,
        sections,
    };
}

export function mapArticles(
    articles: ZendeskArticle[],
    total: number,
    category?: ZendeskCategory,
    attachmentsArray: ZendeskAttachment[][] = [],
    authorsArray: (ZendeskUser | undefined)[] = [],
): Articles.Model.Articles {
    const categorySlug = category ? mapCategory(category).slug : undefined;

    return {
        data: articles.map((article, index) => {
            const articleSlug = extractSlugFromUrl(article.html_url, article.id);
            // Build full slug: /help-and-support/{category-slug}/{article-slug} (categorySlug is already full path)
            const fullSlug = categorySlug ? `${categorySlug}/${articleSlug}` : articleSlug;
            const lead = extractLeadFromBody(article.body);

            // Get attachments for this article
            const attachments = attachmentsArray[index] || [];
            const inlineImages = attachments.filter(
                (att) => att.inline && att.content_type?.startsWith('image/') && att.content_url,
            );
            const nonInlineImages = attachments.filter(
                (att) => !att.inline && att.content_type?.startsWith('image/') && att.content_url,
            );

            // Use first inline as thumbnail, fallback to first non-inline
            const thumbnail = inlineImages[0]
                ? {
                      url: inlineImages[0].content_url!,
                      alt: inlineImages[0].file_name || article.title || 'Article thumbnail',
                  }
                : nonInlineImages[0]
                  ? {
                        url: nonInlineImages[0].content_url!,
                        alt: nonInlineImages[0].file_name || article.title || 'Article thumbnail',
                    }
                  : undefined;

            // Use first non-inline as image, fallback to first inline
            const image = nonInlineImages[0]
                ? {
                      url: nonInlineImages[0].content_url!,
                      alt: nonInlineImages[0].file_name || article.title || 'Article image',
                  }
                : inlineImages[0]
                  ? {
                        url: inlineImages[0].content_url!,
                        alt: inlineImages[0].file_name || article.title || 'Article image',
                    }
                  : undefined;

            // Get author for this article
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
                author: author
                    ? {
                          name: author.name || '',
                          email: author.email,
                          position: author.role,
                          avatar: (() => {
                              const photoUrl = getAvatarUrl(author);
                              return photoUrl
                                  ? {
                                        url: photoUrl,
                                        alt: author.name || '',
                                    }
                                  : undefined;
                          })(),
                      }
                    : undefined,
            };
        }),
        total,
    };
}

export function mapCategory(category: ZendeskCategory): Articles.Model.Category {
    const segment = extractCategorySlugFromUrl(category.html_url, category.id);
    const slug = `${HELP_AND_SUPPORT_BASE_PATH}/${segment}`;
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
