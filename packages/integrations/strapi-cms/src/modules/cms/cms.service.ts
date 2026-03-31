import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore module type mismatch
import { parse, stringify } from 'flatted';
import { Observable, catchError, concatMap, forkJoin, from, map, mergeMap, of } from 'rxjs';

import { CMS, Cache } from '@o2s/framework/modules';

import { PageFragment } from '@/generated/strapi';

import { GraphqlService } from '@/modules/graphql/graphql.service';

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
import { mapRecommendedProductsBlock } from './mappers/blocks/cms.recommended-products.mapper';
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

@Injectable()
export class CmsService extends CMS.Service {
    baseUrl: string;

    constructor(
        private readonly graphqlService: GraphqlService,
        private readonly config: ConfigService,
        private readonly cacheService: Cache.Service,
    ) {
        super();
        this.baseUrl = this.config.get('CMS_STRAPI_BASE_URL')!;
    }

    private getBlock = (options: CMS.Request.GetCmsEntryParams) => {
        const key = `component-${options.id}-${options.locale}`;

        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedBlock) => {
                if (cachedBlock) {
                    return of(parse(cachedBlock));
                }

                const component = this.graphqlService.getComponent({
                    id: options.id,
                    locale: options.locale,
                });

                return forkJoin([component]).pipe(
                    map(([component]) => {
                        if (!component?.data.component || !component?.data.configurableTexts) {
                            throw new NotFoundException();
                        }
                        const data = component.data;
                        this.cacheService.set(key, stringify(data));
                        return data;
                    }),
                );
            }),
        );
    };

    private getCachedBlock<T>(key: string, getData: () => Observable<T>): Observable<T> {
        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedData) => {
                if (cachedData) {
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

    getAppConfig(options: CMS.Request.GetCmsAppConfigParams) {
        const key = `app-config-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const appConfig = this.graphqlService.getAppConfig({
                locale: options.locale,
            });

            return forkJoin([appConfig]).pipe(map(([appConfig]) => mapAppConfig(appConfig.data, this.baseUrl)));
        });
    }

    getEntry<T>(options: CMS.Request.GetCmsEntryParams): Observable<T | undefined> {
        return this.getBlock(options).pipe(
            map((data) => data as T),
            catchError(() => of(undefined)),
        );
    }

    getEntries<T>(options: CMS.Request.GetCmsEntriesParams) {
        const key = `entries-${options.type}-${options.locale}-${JSON.stringify(options.filters || {})}`;
        return this.getCachedBlock<T>(key, () => of({} as T));
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        const key = `page-${options.slug}-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const pages = this.graphqlService.getPages({
                locale: options.locale,
            });

            return forkJoin([pages]).pipe(
                map(([pages]) => {
                    if (!pages?.data?.pages?.length) {
                        throw new NotFoundException();
                    }

                    const page = pages.data.pages.find((page) => {
                        const pattern = new RegExp(`^${page.slug}$`, 'i');
                        return pattern.test(options.slug);
                    });

                    if (!page) {
                        throw new NotFoundException();
                    }

                    return mapPage(page);
                }),
            );
        });
    }

    getPages(options: CMS.Request.GetCmsPagesParams) {
        const pages = this.graphqlService.getPages({
            locale: options.locale,
        });

        return forkJoin([pages]).pipe(
            map(([pages]) => {
                if (!pages?.data?.pages?.length) {
                    throw new NotFoundException();
                }
                return pages.data.pages.map((page) => mapPage(page));
            }),
        );
    }

    getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams): Observable<CMS.Model.Page.Page[]> {
        const locales = this.graphqlService.getLocales();

        return forkJoin([locales]).pipe(
            concatMap(([locales]) => {
                return forkJoin(
                    locales.data.i18NLocales.map((locale) =>
                        this.graphqlService.getPages({
                            locale: locale.code,
                        }),
                    ),
                ).pipe(
                    map((pages) => {
                        if (!pages?.length) {
                            throw new NotFoundException();
                        }

                        const allPages = pages.reduce<PageFragment[]>((prev, current) => {
                            return [...prev, ...current.data.pages];
                        }, []);

                        return allPages
                            .filter((page) => page.documentId === options.id)
                            .map((page) => mapPage(page))
                            .map((page) => {
                                return {
                                    ...page,
                                    slug: page.slug.replace('(.+)', options.slug.match(/(.+)\/(.+)/)?.[2] || ''),
                                };
                            });
                    }),
                );
            }),
        );
    }

    getLoginPage(options: CMS.Request.GetCmsLoginPageParams) {
        const key = `login-page-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const loginPage = this.graphqlService.getLoginPage({
                locale: options.locale,
            });

            return forkJoin([loginPage]).pipe(
                map(([loginPage]) => {
                    if (!loginPage?.data.loginPage) {
                        throw new NotFoundException();
                    }

                    return mapLoginPage(loginPage.data, this.baseUrl);
                }),
            );
        });
    }

    getNotFoundPage(options: CMS.Request.GetCmsNotFoundPageParams) {
        const key = `not-found-page-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const notFoundPage = this.graphqlService.getNotFoundPage({
                locale: options.locale,
            });

            return forkJoin([notFoundPage]).pipe(
                map(([notFoundPage]) => {
                    if (!notFoundPage?.data.notFoundPage) {
                        throw new NotFoundException();
                    }

                    return mapNotFoundPage(notFoundPage.data);
                }),
            );
        });
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        const key = `header-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const header = this.graphqlService.getHeader({
                locale: options.locale,
                id: options.id,
            });

            return forkJoin([header]).pipe(
                map(([header]) => {
                    if (!header?.data.header) {
                        throw new NotFoundException();
                    }

                    return mapHeader(header.data, this.baseUrl);
                }),
            );
        });
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        const key = `footer-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => {
            const footer = this.graphqlService.getFooter({
                locale: options.locale,
                id: options.id,
            });

            return forkJoin([footer]).pipe(
                map(([footer]) => {
                    if (!footer?.data.footer) {
                        throw new NotFoundException();
                    }

                    return mapFooter(footer.data, this.baseUrl);
                }),
            );
        });
    }

    getSurvey(options: CMS.Request.GetCmsSurveyParams) {
        const key = `survey-${options.code}`;
        return this.getCachedBlock(key, () => {
            const survey = this.graphqlService.getSurvey({
                code: options.code,
            });
            return forkJoin([survey]).pipe(
                map(([survey]) => {
                    return mapSurvey(survey.data);
                }),
            );
        });
    }

    getBlockConfig<T>(options: CMS.Request.GetCmsBlockConfigParams): Observable<T> {
        const key = `${options.blockType}-component-${options.id}-${options.locale}`;
        switch (options.blockType) {
            case 'FaqBlock':
                return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapFaqBlock))) as Observable<T>;
            case 'TicketListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapTicketListBlock)),
                ) as Observable<T>;
            case 'TicketDetailsBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapTicketDetailsBlock)),
                ) as Observable<T>;
            case 'TicketRecentBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapTicketRecentBlock)),
                ) as Observable<T>;
            case 'NotificationListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapNotificationListBlock)),
                ) as Observable<T>;
            case 'NotificationDetailsBlock':
                return this.getCachedBlock(key, () => of(mapNotificationDetailsBlock())) as Observable<T>;
            case 'InvoiceListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapInvoiceListBlock)),
                ) as Observable<T>;
            case 'InvoiceDetailsBlock':
                return this.getCachedBlock(key, () => of(mapInvoiceDetailsBlock())) as Observable<T>;
            case 'OrderListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapOrderListBlock)),
                ) as Observable<T>;
            case 'OrderDetailsBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapOrderDetailsBlock)),
                ) as Observable<T>;
            case 'OrdersSummaryBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapOrdersSummaryBlock)),
                ) as Observable<T>;
            case 'PaymentsSummaryBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapPaymentsSummaryBlock)),
                ) as Observable<T>;
            case 'PaymentsHistoryBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapPaymentsHistoryBlock)),
                ) as Observable<T>;
            case 'ProductListBlock':
                return of(mapProductListBlock(options.locale)) as Observable<T>;
            case 'ProductDetailsBlock':
                return of(mapProductDetailsBlock(options.locale)) as Observable<T>;
            case 'RecommendedProductsBlock':
                return of(mapRecommendedProductsBlock(options.locale)) as Observable<T>;
            case 'ServiceListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapServiceListBlock)),
                ) as Observable<T>;
            case 'FeaturedServiceListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapFeaturedServiceListBlock)),
                ) as Observable<T>;
            case 'ServiceDetailsBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapServiceDetailsBlock)),
                ) as Observable<T>;
            case 'ResourceListBlock':
                return this.getCachedBlock(key, () => of(mapResourceListBlock(options.locale))) as Observable<T>;
            case 'ResourceDetailsBlock':
                return this.getCachedBlock(key, () => of(mapResourceDetailsBlock())) as Observable<T>;
            case 'UserAccountBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapUserAccountBlock)),
                ) as Observable<T>;
            case 'OrganizationList': {
                const orgKey = `organization-list-${options.locale}`;
                return this.getCachedBlock(orgKey, () => {
                    const organizationList = this.graphqlService.getOrganizationList({
                        locale: options.locale,
                    });
                    return forkJoin([organizationList]).pipe(
                        map(([organizationList]) => {
                            if (!organizationList?.data.organizationList) {
                                throw new NotFoundException();
                            }
                            return mapOrganizationList(organizationList.data);
                        }),
                    );
                }) as Observable<T>;
            }
            case 'SurveyJsBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapSurveyJsBlock)),
                ) as Observable<T>;
            case 'QuickLinksBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map((data) => mapQuickLinksBlock(data))),
                ) as Observable<T>;
            case 'ArticleListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map((data) => mapArticleListBlock(data, this.baseUrl))),
                ) as Observable<T>;
            case 'ArticleSearchBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map(mapArticleSearchBlock)),
                ) as Observable<T>;
            case 'CategoryBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map((data) => mapCategoryBlock(data, this.baseUrl))),
                ) as Observable<T>;
            case 'CategoryListBlock':
                return this.getCachedBlock(key, () =>
                    this.getBlock(options).pipe(map((data) => mapCategoryListBlock(data, this.baseUrl))),
                ) as Observable<T>;
            default:
                throw new NotFoundException(`Unknown block type: ${options.blockType}`);
        }
    }
}
