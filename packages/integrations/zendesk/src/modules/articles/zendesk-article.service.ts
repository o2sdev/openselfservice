import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, catchError, firstValueFrom, from, map, of, switchMap, throwError } from 'rxjs';

import { Articles } from '@o2s/framework/modules';

import {
    type ArticleObject,
    type CategoryObject,
    type SectionObject,
    listArticles,
    showArticle,
    showCategory,
    showSection,
} from '@/generated/help-center';
import { client as helpCenterClient } from '@/generated/help-center/client.gen';
import { showUser } from '@/generated/zendesk';
import type { UserObject } from '@/generated/zendesk';
import { client as ticketingClient } from '@/generated/zendesk/client.gen';

import { mapArticle, mapArticles, mapCategory } from './zendesk-article.mapper';

type ZendeskArticle = ArticleObject;
type ZendeskCategory = CategoryObject;
type ZendeskSection = SectionObject;

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
                    ? this.fetchSection(article.section_id, zendeskLocale).pipe(catchError(() => of(undefined)))
                    : of(undefined);

                // Fetch author if available
                const author$ = article.author_id
                    ? this.fetchUser(article.author_id).pipe(catchError(() => of(undefined)))
                    : of(undefined);

                return from(Promise.all([firstValueFrom(categoryOrSection$), firstValueFrom(author$)])).pipe(
                    map(([categoryOrSection, author]) => {
                        return mapArticle(article, categoryOrSection, author);
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
        const queryOptions = {
            ...options,
            locale: zendeskLocale,
        };

        return this.fetchArticles(queryOptions).pipe(
            map((response) => {
                const articles = response.articles || [];
                // Zendesk doesn't provide total count in the response, so we use articles.length
                // In a real scenario, you might need to make additional requests to get the total
                return mapArticles(articles, articles.length);
            }),
            catchError((error) => {
                return throwError(() => new Error(`Failed to fetch articles: ${error.message || error}`));
            }),
        );
    }

    getCategory(options: Articles.Request.GetCategoryParams): Observable<Articles.Model.Category> {
        const categoryId = Number(options.id);
        if (isNaN(categoryId)) {
            return throwError(() => new NotFoundException(`Invalid category ID: ${options.id}`));
        }

        const zendeskLocale = mapLocaleToZendesk(options.locale);

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

    getCategoryList(_options: Articles.Request.GetCategoryListQuery): Observable<Articles.Model.Categories> {
        // TODO: Implement category list fetching
        // For now, return empty list
        return of({
            data: [],
            total: 0,
        });
    }

    searchArticles(options: Articles.Request.SearchArticlesBody): Observable<Articles.Model.Articles> {
        // TODO: Implement article search
        // For now, fall back to getArticleList
        return this.getArticleList(options);
    }

    /**
     * Extract article ID from slug
     * Slug format can be: "12345" or "12345-article-title"
     */
    private extractArticleIdFromSlug(slug: string): number | null {
        const match = slug.match(/^(\d+)/);
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

        return from(
            listArticles({
                path: {
                    locale: options.locale,
                },
                query: queryParams,
            }),
        ).pipe(
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
}
