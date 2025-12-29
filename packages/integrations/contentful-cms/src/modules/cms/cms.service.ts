import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { parse, stringify } from 'flatted';
import { Observable, catchError, forkJoin, from, map, mergeMap, of, throwError } from 'rxjs';

import { CMS, Cache } from '@o2s/framework/modules';

import { GetPagesQuery } from '@/generated/contentful';

import { GraphqlService } from '@/modules/graphql/graphql.service';
import { RestDeliveryService } from '@/modules/rest-delivery/delivery.service';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapArticleSearchBlock } from './mappers/blocks/cms.article-search.mapper';
import { mapCategoryListBlock } from './mappers/blocks/cms.category-list.mapper';
import { mapCategoryBlock } from './mappers/blocks/cms.category.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapFeaturedServiceListBlock } from './mappers/blocks/cms.featured-service-list.mapper';
import { mapInvoiceDetailsBlock } from './mappers/blocks/cms.invoice-details.mapper';
import { mapInvoiceListBlock } from './mappers/blocks/cms.invoice-list.mapper';
import { mapNotificationDetailsBlock } from './mappers/blocks/cms.notification-details.mapper';
import { mapNotificationListBlock } from './mappers/blocks/cms.notification-list.mapper';
import { mapOrderDetailsBlock } from './mappers/blocks/cms.order-details.mapper';
import { mapOrderListBlock } from './mappers/blocks/cms.order-list.mapper';
import { mapOrdersSummaryBlock } from './mappers/blocks/cms.orders-summary.mapper';
import { mapPaymentsHistoryBlock } from './mappers/blocks/cms.payments-history.mapper';
import { mapPaymentsSummaryBlock } from './mappers/blocks/cms.payments-summary.mapper';
import { mapProductDetailsBlock } from './mappers/blocks/cms.product-details.mapper';
import { mapProductListBlock } from './mappers/blocks/cms.product-list.mapper';
import { mapQuickLinksBlock } from './mappers/blocks/cms.quick-links.mapper';
import { mapResourceDetailsBlock } from './mappers/blocks/cms.resource-details.mapper';
import { mapResourceListBlock } from './mappers/blocks/cms.resource-list.mapper';
import { mapServiceDetailsBlock } from './mappers/blocks/cms.service-details.mapper';
import { mapServiceListBlock } from './mappers/blocks/cms.service-list.mapper';
import { mapSurveyJsBlock } from './mappers/blocks/cms.surveyjs-block.mapper';
import { mapTicketDetailsBlock } from './mappers/blocks/cms.ticket-details.mapper';
import { mapTicketListBlock } from './mappers/blocks/cms.ticket-list.mapper';
import { mapTicketRecentBlock } from './mappers/blocks/cms.ticket-recent.mapper';
import { mapUserAccountBlock } from './mappers/blocks/cms.user-account.mapper';
import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapLoginPage } from './mappers/cms.login-page.mapper';
import { mapNotFoundPage } from './mappers/cms.not-found-page.mapper';
import { mapOrganizationList } from './mappers/cms.organization-list.mapper';
import { mapPage } from './mappers/cms.page.mapper';
import { mapSurvey } from './mappers/cms.survey.mapper';

type GraphQLErrorResponse = {
    response?: {
        status?: number;
        data?: {
            errors?: Array<{ message?: string }>;
            message?: string;
        };
    };
    status?: number;
    message?: string;
};

/**
 * Converts preview parameter to boolean.
 * Handles cases where preview might be a string ('true'/'false') or boolean.
 */
function toBooleanPreview(preview?: boolean | string): boolean {
    if (typeof preview === 'boolean') {
        return preview;
    }
    if (typeof preview === 'string') {
        return preview.toLowerCase() === 'true';
    }
    return false;
}

@Injectable()
export class CmsService implements CMS.Service {
    constructor(
        private readonly graphqlService: GraphqlService,
        private readonly restDeliveryService: RestDeliveryService,
        private readonly config: ConfigService,
        private readonly cacheService: Cache.Service,
    ) {}

    /**
     * Universal error handler for Contentful GraphQL errors
     * @param error - The error object from GraphQL request
     * @param context - Optional context information (id, locale, resourceType)
     * @returns Observable that throws appropriate NestJS exception
     */
    private handleContentfulError<T>(
        error: unknown,
        context?: {
            id?: string;
            slug?: string;
            locale?: string;
            resourceType?: string;
            returnEmptyArray?: boolean;
        },
    ): Observable<T> {
        const errorWithResponse = error as GraphQLErrorResponse;
        const status = errorWithResponse.response?.status || errorWithResponse.status;
        const errorMessage = errorWithResponse.message || 'Unknown error';

        // Check if it's a GraphQL error from Contentful
        if (status === 400 || errorMessage.includes('GraphQL Error')) {
            // Extract error details from GraphQL response
            const errorResponse = errorWithResponse.response?.data;
            const errorDetails =
                errorResponse?.errors?.[0]?.message ||
                errorResponse?.message ||
                errorMessage ||
                `${context?.resourceType || 'Resource'} may not exist or query is invalid.`;

            // Check if it's a validation error or missing content
            const isNotFound =
                errorDetails.includes('not found') ||
                errorDetails.includes('does not exist') ||
                errorDetails.includes('Cannot query field') ||
                errorDetails.includes('Unknown field') ||
                errorDetails.includes('not available');

            // Build error message
            const parts: string[] = [];
            if (context?.resourceType) {
                parts.push(`${context.resourceType}`);
            }
            if (context?.id) {
                parts.push(`with id ${context.id}`);
            }
            if (context?.slug) {
                parts.push(`with slug ${context.slug}`);
            }
            if (context?.locale) {
                parts.push(`for locale ${context.locale}`);
            }
            const resourceInfo = parts.length > 0 ? `${parts.join(' ')} ` : '';

            const fullMessage = `GraphQL error: ${resourceInfo}not found in Contentful. ${errorDetails}${
                isNotFound && !context?.returnEmptyArray
                    ? ' Try using preview: true if the resource is unpublished.'
                    : ''
            }`;

            // Return empty array if requested, otherwise throw NotFoundException
            if (context?.returnEmptyArray) {
                return of([] as unknown as T);
            }

            return throwError(() => new NotFoundException(fullMessage));
        }

        // For other errors, re-throw as is
        return throwError(() => error);
    }

    private getBlock = (options: CMS.Request.GetCmsEntryParams) => {
        const key = `component-${options.id}-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedBlock) => {
                if (cachedBlock) {
                    return of(parse(cachedBlock));
                }

                const component = this.graphqlService.getComponent({
                    id: options.id,
                    locale: options.locale,
                    preview: isPreview,
                });

                return forkJoin([component]).pipe(
                    map(([component]) => {
                        const configurableTexts = component?.data.configurableTexts?.items?.[0];
                        if (!component?.data.block?.content || !configurableTexts) {
                            throw new NotFoundException(
                                `Block with id ${options.id} not found or has no content for locale ${options.locale}`,
                            );
                        }
                        const data = {
                            ...component.data.block.content,
                            configurableTexts,
                        };
                        this.cacheService.set(key, stringify(data));
                        return { ...data, isPreview };
                    }),
                    catchError((error) =>
                        this.handleContentfulError(error, {
                            id: options.id,
                            locale: options.locale,
                            resourceType: 'Block',
                        }),
                    ),
                );
            }),
        );
    };

    private getCachedBlock<T>(key: string, getData: () => Observable<T>): Observable<T> {
        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedData) => {
                if (cachedData) {
                    console.log('cachedData', cachedData);
                    return of(parse(cachedData));
                }
                return getData().pipe(
                    map((data) => {
                        this.cacheService.set(key, stringify(data));
                        return data;
                    }),
                );
            }),
        );
    }

    getEntry<T>(_options: CMS.Request.GetCmsEntryParams) {
        return of<T>({} as T);
    }

    getEntries<T>(_options: CMS.Request.GetCmsEntriesParams) {
        return of<T>({} as T);
    }

    getAppConfig(options: CMS.Request.GetCmsAppConfigParams) {
        const key = `app-config-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return this.getCachedBlock(key, () => {
            const appConfig = this.graphqlService.getAppConfig({
                locale: options.locale,
                preview: isPreview,
            });

            const locales = from(this.restDeliveryService.getLocales());

            return forkJoin([appConfig, locales]).pipe(
                map(([appConfig, locales]) => {
                    if (!appConfig?.data) {
                        throw new NotFoundException(
                            `AppConfig query failed for locale: ${options.locale}. GraphQL response is empty.`,
                        );
                    }
                    return mapAppConfig(appConfig.data, locales);
                }),
                catchError((error) =>
                    this.handleContentfulError<CMS.Model.AppConfig.AppConfig>(error, {
                        locale: options.locale,
                        resourceType: 'AppConfig',
                    }),
                ),
            );
        });
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        const key = `page-${options.slug}-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return this.getCachedBlock(key, () => {
            const page = this.graphqlService.getPage({
                slug: options.slug,
                locale: options.locale,
                preview: isPreview,
            });

            return forkJoin([page]).pipe(
                map(([page]) => {
                    if (!page?.data?.pageCollection?.items?.length) {
                        throw new NotFoundException();
                    }
                    const pageData = page.data.pageCollection.items.find((page) => {
                        const pattern = new RegExp(`^${page.slug}$`, 'i');
                        return pattern.test(options.slug);
                    });

                    if (!pageData) {
                        throw new NotFoundException();
                    }

                    return mapPage(pageData);
                }),
                catchError((error) =>
                    this.handleContentfulError<CMS.Model.Page.Page | undefined>(error, {
                        locale: options.locale,
                        resourceType: 'Page',
                        id: options.slug,
                    }),
                ),
            );
        });
    }

    getPages(options: CMS.Request.GetCmsPagesParams) {
        const key = `pages-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return this.getCachedBlock(key, () => {
            const pages = this.graphqlService.getPages({
                locale: options.locale,
                preview: isPreview,
            });

            return forkJoin([pages]).pipe(
                map(([pages]) => {
                    if (!pages?.data?.pageCollection?.items?.length) {
                        return [];
                    }

                    return pages.data.pageCollection.items.map((page) => mapPage(page));
                }),
                catchError((error) =>
                    this.handleContentfulError<CMS.Model.Page.Page[]>(error, {
                        locale: options.locale,
                        resourceType: 'Pages',
                        returnEmptyArray: true,
                    }),
                ),
            );
        });
    }

    getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams) {
        const key = `alternative-pages-${options.id}-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return this.getCachedBlock(key, () => {
            const locales = from(this.restDeliveryService.getLocales());

            return forkJoin([locales]).pipe(
                mergeMap(([locales]) => {
                    if (!locales || !Array.isArray(locales) || locales.length === 0) {
                        return of([] as CMS.Model.Page.Page[]);
                    }

                    const supportedLocales = locales.map((locale) => locale.value);

                    if (!supportedLocales || supportedLocales.length === 0) {
                        return of([] as CMS.Model.Page.Page[]);
                    }

                    const pageRequests = supportedLocales.map((locale: string) =>
                        from(
                            this.graphqlService.getPages({
                                locale,
                                preview: isPreview,
                            }),
                        ),
                    );

                    return forkJoin<Array<{ data: GetPagesQuery }>>(pageRequests).pipe(
                        map((pagesResults) => {
                            const alternativePages: CMS.Model.Page.Page[] = [];

                            pagesResults.forEach((pagesResult: { data: GetPagesQuery }) => {
                                if (pagesResult?.data?.pageCollection?.items) {
                                    const matchingPage = pagesResult.data.pageCollection.items.find(
                                        (page: { sys: { id: string } }) => page.sys.id === options.id,
                                    );

                                    if (matchingPage) {
                                        alternativePages.push(mapPage(matchingPage));
                                    }
                                }
                            });

                            return alternativePages.filter((page) => page.locale !== options.locale);
                        }),
                    );
                }),
                catchError((error) =>
                    this.handleContentfulError<CMS.Model.Page.Page[]>(error, {
                        id: options.id,
                        locale: options.locale,
                        resourceType: 'Alternative pages',
                        returnEmptyArray: true,
                    }),
                ),
            );
        });
    }

    getLoginPage(options: CMS.Request.GetCmsLoginPageParams) {
        return of(mapLoginPage(options.locale));
    }

    getNotFoundPage(options: CMS.Request.GetCmsNotFoundPageParams) {
        return of(mapNotFoundPage(options.locale));
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        const key = `header-${options.id}-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return this.getCachedBlock(key, () => {
            const header = this.graphqlService.getHeader({
                id: options.id,
                locale: options.locale,
                preview: isPreview,
            });

            return forkJoin([header]).pipe(
                map(([header]) => {
                    if (!header?.data.headerCollection?.items?.[0]) {
                        throw new NotFoundException();
                    }
                    return mapHeader(header.data, undefined);
                }),
                catchError((error) =>
                    this.handleContentfulError<CMS.Model.Header.Header>(error, {
                        id: options.id,
                        locale: options.locale,
                        resourceType: 'Header',
                    }),
                ),
            );
        });
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        const key = `footer-${options.id}-${options.locale}`;
        const isPreview = toBooleanPreview(options.preview);

        return this.getCachedBlock(key, () => {
            const footer = this.graphqlService.getFooter({
                id: options.id,
                locale: options.locale,
                preview: isPreview,
            });

            return forkJoin([footer]).pipe(
                map(([footer]) => {
                    if (!footer?.data.footerCollection?.items?.[0]) {
                        throw new NotFoundException();
                    }
                    return mapFooter(footer.data, undefined);
                }),
                catchError((error) =>
                    this.handleContentfulError<CMS.Model.Footer.Footer>(error, {
                        id: options.id,
                        locale: options.locale,
                        resourceType: 'Footer',
                    }),
                ),
            );
        });
    }

    getFaqBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `faq-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapFaqBlock)));
    }

    getTicketListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `ticket-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapTicketListBlock)));
    }

    getTicketDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketDetailsBlock(_options.locale));
    }

    getNotificationListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapNotificationListBlock(options.locale));
    }

    getNotificationDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapNotificationDetailsBlock(_options.locale));
    }

    getInvoiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapInvoiceListBlock(options.locale));
    }

    getInvoiceDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapInvoiceDetailsBlock());
    }

    getServiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapServiceListBlock(options.locale));
    }

    getServiceDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapServiceDetailsBlock(options.locale));
    }

    getResourceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapResourceListBlock(options.locale));
    }

    getResourceDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapResourceDetailsBlock());
    }

    getPaymentsSummaryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPaymentsSummaryBlock(options.locale));
    }

    getPaymentsHistoryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPaymentsHistoryBlock(options.locale));
    }

    getUserAccountBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapUserAccountBlock(_options.locale));
    }

    getTicketRecentBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketRecentBlock(options.locale));
    }

    getOrganizationList(options: CMS.Request.GetCmsOrganizationListParams) {
        return of(mapOrganizationList(options.locale));
    }

    getSurvey(options: CMS.Request.GetCmsSurveyParams) {
        return of(mapSurvey(options.code));
    }

    getSurveyJsBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapSurveyJsBlock(options.locale, options.id));
    }

    getOrderListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapOrderListBlock(options.locale));
    }

    getOrdersSummaryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapOrdersSummaryBlock(options.locale));
    }

    getOrderDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapOrderDetailsBlock(options.locale));
    }

    getQuickLinksBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapQuickLinksBlock)));
    }

    getArticleListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `article-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapArticleListBlock)));
    }

    getCategoryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapCategoryBlock(options.id, options.locale));
    }

    getCategoryListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `category-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapCategoryListBlock)));
    }

    getArticleSearchBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleSearchBlock(options.locale));
    }

    getFeaturedServiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapFeaturedServiceListBlock(options.locale));
    }

    getProductListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapProductListBlock(options.locale));
    }

    getProductDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapProductDetailsBlock(options.locale));
    }
}
