import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, catchError, firstValueFrom, from, map, of, switchMap, throwError } from 'rxjs';

import { Articles } from '@o2s/framework/modules';

import {
    type ArticleAttachmentObject,
    type ArticleObject,
    type CategoryObject,
    type SectionObject,
    listArticleAttachmentsWithLocale,
    listArticles,
    listArticlesByCategoryWithLocale,
    listCategories,
    showArticle,
    showCategory,
    showSection,
} from '@/generated/help-center';
import { client as helpCenterClient } from '@/generated/help-center/client.gen';
import { showUser } from '@/generated/zendesk';
import type { UserObject } from '@/generated/zendesk';
import { client as ticketingClient } from '@/generated/zendesk/client.gen';

import { mapArticle, mapArticles, mapCategories, mapCategory } from './zendesk-article.mapper';

type ZendeskArticle = ArticleObject;
type ZendeskCategory = CategoryObject;
type ZendeskSection = SectionObject;
type ZendeskAttachment = ArticleAttachmentObject;

/**
 * Map application locale (en, de, pl) to Zendesk Help Center locale format (en-us, de-de, pl-pl)
 * Zendesk Help Center API requires locale in format: language-country (e.g., en-us, de-de, pl-pl)
 */
function mapLocaleToZendesk(locale: string): string {
    const localeMap: Record<string, string> = {
        en: 'en-us',
        de: 'de-de',
    };

    // If locale is already in Zendesk format (contains hyphen), return as is
    if (locale.includes('-')) {
        return locale;
    }

    // Map application locale to Zendesk format
    // If locale is not in map, return as is (assumes it's already in correct format)
    return localeMap[locale.toLowerCase()] || locale;
}

@Injectable()
export class ZendeskArticleService extends Articles.Service {
    constructor() {
        super();

        const baseUrl = process.env.ZENDESK_API_URL;
        const token = process.env.ZENDESK_API_TOKEN;

        if (!baseUrl || !token) {
            throw new Error('Missing required environment variables: ZENDESK_API_URL and ZENDESK_API_TOKEN');
        }

        // Configure Help Center API client
        helpCenterClient.setConfig({
            baseUrl,
            headers: { Authorization: `Basic ${token}` },
        });

        // Configure Ticketing API client (for user fetching)
        ticketingClient.setConfig({
            baseUrl,
            headers: { Authorization: `Basic ${token}` },
        });
    }

    getArticle(options: Articles.Request.GetArticleParams): Observable<Articles.Model.Article | undefined> {
        // Zendesk API uses article_id (number), but framework uses slug (string)
        // We need to find the article by slug first, or extract ID from slug if it's in format "id-slug"
        const articleId = this.extractArticleIdFromSlug(options.slug);

        if (!articleId) {
            return of(undefined);
        }

        const zendeskLocale = mapLocaleToZendesk(options.locale);

        return this.fetchArticle(articleId, zendeskLocale).pipe(
            switchMap((article) => {
                if (!article) {
                    return of(undefined);
                }

                // Fetch category/section if available
                const categoryOrSection$ = article.section_id
                    ? this.fetchSection(article.section_id, zendeskLocale).pipe(
                          switchMap((section) => {
                              if (!section || !section.category_id) {
                                  return of(undefined);
                              }
                              // Fetch category from section
                              return this.fetchCategory(section.category_id, zendeskLocale).pipe(
                                  catchError(() => of(undefined)),
                              );
                          }),
                          catchError(() => of(undefined)),
                      )
                    : of(undefined);

                // Fetch author if available
                const author$ = article.author_id
                    ? this.fetchUser(article.author_id).pipe(catchError(() => of(undefined)))
                    : of(undefined);

                // Fetch attachments (images)
                const attachments$ = this.fetchArticleAttachments(articleId, zendeskLocale).pipe(
                    catchError(() => of([])),
                );

                return from(
                    Promise.all([
                        firstValueFrom(categoryOrSection$),
                        firstValueFrom(author$),
                        firstValueFrom(attachments$),
                    ]),
                ).pipe(
                    map(([category, author, attachments]) => {
                        return mapArticle(article, category, author, attachments);
                    }),
                );
            }),
            catchError((error) => {
                if (error?.status === 404 || error?.message?.includes('404')) {
                    return of(undefined);
                }
                return throwError(() => error);
            }),
        );
    }

    getArticleList(options: Articles.Request.GetArticleListQuery): Observable<Articles.Model.Articles> {
        // Map locale to Zendesk format (locale is required)
        const zendeskLocale = mapLocaleToZendesk(options.locale);

        // If category filter is provided, resolve it to numeric ID (if it's a slug) and fetch category
        const categoryFilter$ = options.category
            ? this.resolveCategoryId(options.category, zendeskLocale).pipe(
                  switchMap((categoryId) => {
                      if (!categoryId) {
                          return of({ categoryId: undefined, category: undefined });
                      }
                      return this.fetchCategory(categoryId, zendeskLocale).pipe(
                          map((category) => ({ categoryId, category })),
                          catchError(() => of({ categoryId, category: undefined })),
                      );
                  }),
              )
            : of({ categoryId: undefined, category: undefined });

        return categoryFilter$.pipe(
            switchMap(({ categoryId, category }) => {
                const queryOptions = {
                    ...options,
                    locale: zendeskLocale,
                    category: categoryId ? categoryId.toString() : undefined,
                };

                return this.fetchArticles(queryOptions).pipe(
                    switchMap((response) => {
                        const articles = response.articles || [];

                        // Fetch attachments for all articles in parallel
                        const attachmentsPromises = articles.map((article) =>
                            firstValueFrom(
                                this.fetchArticleAttachments(article.id!, zendeskLocale).pipe(catchError(() => of([]))),
                            ),
                        );

                        return from(Promise.all(attachmentsPromises)).pipe(
                            map((attachmentsArray) => {
                                // Zendesk doesn't provide total count in the response, so we use articles.length
                                // In a real scenario, you might need to make additional requests to get the total
                                return mapArticles(articles, articles.length, category, attachmentsArray);
                            }),
                        );
                    }),
                );
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch articles: ${error.message || error}`));
            }),
        );
    }

    getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category> {
        const zendeskLocale = mapLocaleToZendesk(options.locale);
        const categoryId = Number(options.id);

        // If options.id is a numeric ID, fetch directly
        if (!isNaN(categoryId)) {
            return this.fetchCategory(categoryId, zendeskLocale).pipe(
                map((category) => {
                    if (!category) {
                        throw new NotFoundException(`Category not found: ${options.id}`);
                    }
                    return mapCategory(category);
                }),
                catchError((error) => {
                    if (error?.status === 404 || error?.message?.includes('404')) {
                        return throwError(() => new NotFoundException(`Category not found: ${options.id}`));
                    }
                    return throwError(() => error);
                }),
            );
        }

        // If options.id is a slug, fetch all categories and find by slug
        return this.fetchCategories(zendeskLocale).pipe(
            map((categories) => {
                const category = categories.find((cat) => {
                    const mapped = mapCategory(cat);
                    return mapped.slug === options.id || mapped.id === options.id;
                });

                if (!category) {
                    throw new NotFoundException(`Category not found: ${options.id}`);
                }

                return mapCategory(category);
            }),
            catchError((error) => {
                if (error instanceof NotFoundException) {
                    return throwError(() => error);
                }
                return throwError(() => new NotFoundException(`Category not found: ${options.id}`));
            }),
        );
    }

    getCategoryList(options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories> {
        const zendeskLocale = mapLocaleToZendesk(options.locale);

        const queryParams: Record<string, unknown> = {};

        // Map framework sort options to Zendesk API
        if (options.sort?.field) {
            queryParams.sort_by = options.sort.field;
        }
        if (options.sort?.order) {
            queryParams.sort_order = options.sort.order;
        }

        // Pagination
        if (options.limit) {
            queryParams.per_page = options.limit;
        }
        if (options.offset) {
            queryParams.page = Math.floor(options.offset / (options.limit || 10)) + 1;
        }

        return from(
            listCategories({
                path: {
                    locale: zendeskLocale,
                },
                query: queryParams,
            }),
        ).pipe(
            map((response) => {
                const categories = response.data?.categories || [];
                // Zendesk doesn't provide total count in the response, so we use categories.length
                // In a real scenario, you might need to make additional requests to get the total
                return mapCategories(categories, categories.length);
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch categories: ${error.message || error}`));
            }),
        );
    }

    searchArticles(options: Articles.Request.SearchArticlesBody): Observable<Articles.Model.Articles> {
        // TODO: Implement article search
        // For now, fall back to getArticleList
        return this.getArticleList(options);
    }

    /**
     * Extract article ID from slug
     * Slug format can be:
     * - "12345" or "12345-article-title"
     * - "/help-and-support/category-slug/12345-article-title" (full path)
     */
    private extractArticleIdFromSlug(slug: string | undefined): number | null {
        if (!slug) {
            return null;
        }
        // Extract ID from full path or simple slug
        // Match: number at the start or number after last slash
        const match = slug.match(/(?:^|\/)(\d+)/);
        if (match) {
            return Number(match[1]);
        }
        return null;
    }

    private fetchArticle(articleId: number, locale: string): Observable<ZendeskArticle | undefined> {
        return from(
            showArticle({
                path: {
                    article_id: articleId,
                    locale,
                },
            }),
        ).pipe(
            map((response) => {
                if (!response.data?.article) {
                    return undefined;
                }
                return response.data.article;
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch article: ${error.message || error}`));
            }),
        );
    }

    private resolveCategoryId(categoryIdOrSlug: string, locale: string): Observable<number | undefined> {
        // If it's already a numeric ID, return it
        const numericId = Number(categoryIdOrSlug);
        if (!isNaN(numericId)) {
            return of(numericId);
        }

        // Otherwise, it's a slug - fetch all categories and find by slug
        return this.fetchCategories(locale).pipe(
            map((categories) => {
                for (const category of categories) {
                    const mapped = mapCategory(category);
                    if (mapped.slug === categoryIdOrSlug || mapped.id === categoryIdOrSlug) {
                        return category.id;
                    }
                }
                return undefined;
            }),
        );
    }

    private fetchArticles(options: Articles.Request.GetArticleListQuery): Observable<{ articles: ZendeskArticle[] }> {
        const queryParams: Record<string, unknown> = {};

        // Map framework sort options to Zendesk API
        if (options.sortBy) {
            queryParams.sort_by = options.sortBy;
        }
        if (options.sortOrder) {
            queryParams.sort_order = options.sortOrder;
        }

        // Pagination
        if (options.limit) {
            queryParams.per_page = options.limit;
        }
        if (options.offset) {
            queryParams.page = Math.floor(options.offset / (options.limit || 10)) + 1;
        }

        // If category filter is provided and it's a numeric ID, use category-specific endpoint
        const categoryId = options.category ? Number(options.category) : null;
        const useCategoryEndpoint = categoryId && !isNaN(categoryId);

        const apiCall = useCategoryEndpoint
            ? listArticlesByCategoryWithLocale({
                  path: {
                      locale: options.locale,
                      category_id: categoryId,
                  },
                  query: queryParams,
              })
            : listArticles({
                  path: {
                      locale: options.locale,
                  },
                  query: queryParams,
              });

        return from(apiCall).pipe(
            map((response) => {
                // Response structure: { data: { articles: [...] } }
                // But response.data might be the ArticlesResponse directly
                let articles: ZendeskArticle[] = [];

                // Log response for debugging
                console.log('Zendesk Articles API Response:', {
                    hasData: !!response.data,
                    dataKeys: response.data ? Object.keys(response.data) : [],
                    dataType: typeof response.data,
                    isArray: Array.isArray(response.data),
                });

                if (response.data) {
                    // Check if response.data has articles property
                    if ('articles' in response.data && Array.isArray(response.data.articles)) {
                        articles = response.data.articles;
                    }
                    // Check if response.data is the articles array directly (unlikely but possible)
                    else if (Array.isArray(response.data)) {
                        articles = response.data;
                    } else {
                        // Log unexpected structure
                        console.warn('Unexpected response structure:', response.data);
                    }
                }

                return {
                    articles,
                };
            }),
            catchError((error) => {
                // Log the actual error for debugging
                console.error('Zendesk Articles API Error:', {
                    error,
                    response: error.response,
                    status: error.status,
                    message: error.message,
                    data: error.data,
                });
                return throwError(() => new Error(`Failed to fetch articles: ${error.message || error}`));
            }),
        );
    }

    private fetchCategory(categoryId: number, locale: string): Observable<ZendeskCategory | undefined> {
        return from(
            showCategory({
                path: {
                    category_id: categoryId,
                    locale,
                },
            }),
        ).pipe(
            map((response) => {
                if (!response.data?.category) {
                    return undefined;
                }
                return response.data.category;
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch category: ${error.message || error}`));
            }),
        );
    }

    private fetchCategories(locale: string): Observable<ZendeskCategory[]> {
        return from(
            listCategories({
                path: {
                    locale,
                },
            }),
        ).pipe(
            map((response) => {
                return response.data?.categories || [];
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch categories: ${error.message || error}`));
            }),
        );
    }

    private fetchSection(sectionId: number, locale: string): Observable<ZendeskSection | undefined> {
        return from(
            showSection({
                path: {
                    section_id: sectionId,
                    locale,
                },
            }),
        ).pipe(
            map((response) => {
                if (!response.data?.section) {
                    return undefined;
                }
                return response.data.section;
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch section: ${error.message || error}`));
            }),
        );
    }

    private fetchUser(userId: number): Observable<UserObject | undefined> {
        // Use Ticketing API to fetch user details
        return from(
            showUser({
                path: {
                    user_id: userId,
                },
            }),
        ).pipe(
            map((response) => {
                if (!response.data?.user) {
                    return undefined;
                }
                return response.data.user;
            }),
            catchError(() => {
                // If user fetch fails, return undefined (non-critical)
                return of(undefined);
            }),
        );
    }

    private fetchArticleAttachments(articleId: number, locale: string): Observable<ZendeskAttachment[]> {
        return from(
            listArticleAttachmentsWithLocale({
                path: {
                    article_id: articleId,
                    locale,
                },
            }),
        ).pipe(
            map((response) => {
                return response.data?.article_attachments || [];
            }),
            catchError(() => {
                // If attachments fetch fails, return empty array (non-critical)
                return of([]);
            }),
        );
    }
}
