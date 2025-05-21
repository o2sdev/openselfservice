import { Injectable, NotFoundException, NotImplementedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore module type mismatch
import { parse, stringify } from 'flatted';
import { Observable, concatMap, forkJoin, from, map, mergeMap, of } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CMS, Cache, Models } from '@o2s/framework/modules';

import { Service as GraphqlService } from '@/modules/graphql';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapCategoryListBlock } from './mappers/blocks/cms.category-list.mapper';
import { mapCategoryBlock } from './mappers/blocks/cms.category.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapInvoiceDetailsBlock } from './mappers/blocks/cms.invoice-details.mapper';
import { mapInvoiceListBlock } from './mappers/blocks/cms.invoice-list.mapper';
import { mapNotificationDetailsBlock } from './mappers/blocks/cms.notification-details.mapper';
import { mapNotificationListBlock } from './mappers/blocks/cms.notification-list.mapper';
import { mapOrderDetailsBlock } from './mappers/blocks/cms.order-details.mapper';
import { mapOrderListBlock } from './mappers/blocks/cms.order-list.mapper';
import { mapOrdersSummaryBlock } from './mappers/blocks/cms.orders-summary.mapper';
import { mapPaymentsHistoryBlock } from './mappers/blocks/cms.payments-history.mapper';
import { mapPaymentsSummaryBlock } from './mappers/blocks/cms.payments-summary.mapper';
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
import { PageFragment } from '@/generated/strapi';

@Injectable()
export class CmsService implements CMS.Service {
    baseUrl: string;

    constructor(
        private readonly graphqlService: GraphqlService,
        private readonly config: ConfigService,
        private readonly cacheService: Cache.Service,
    ) {
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

            return forkJoin([appConfig]).pipe(map(([appConfig]) => mapAppConfig(appConfig.data)));
        });
    }

    getEntry(options: CMS.Request.GetCmsEntryParams) {
        const key = `entry-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => of(undefined));
    }

    getEntries(options: CMS.Request.GetCmsEntriesParams) {
        const key = `entries-${options.type}-${options.locale}-${JSON.stringify(options.filters || {})}`;
        return this.getCachedBlock(key, () => of(undefined));
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

    getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams) {
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

    getOrganizationList(options: CMS.Request.GetCmsOrganizationListParams) {
        const key = `organization-list-${options.locale}`;
        return this.getCachedBlock(key, () => {
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

    getFaqBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `faq-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapFaqBlock)));
    }

    getTicketListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `ticket-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapTicketListBlock)));
    }

    getTicketDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `ticket-details-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapTicketDetailsBlock)));
    }

    getNotificationListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `notification-list-component-${options.id}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapNotificationListBlock)));
    }

    getNotificationDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `notification-details-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => of(mapNotificationDetailsBlock()));
    }

    getResourceListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `resource-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => of(mapResourceListBlock(options.locale)));
    }

    getResourceDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `resource-details-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => of(mapResourceDetailsBlock()));
    }

    getInvoiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `invoice-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapInvoiceListBlock)));
    }

    getInvoiceDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `invoice-details-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => of(mapInvoiceDetailsBlock()));
    }

    getPaymentsSummaryBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `payments-summary-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapPaymentsSummaryBlock)));
    }

    getPaymentsHistoryBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `payments-history-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapPaymentsHistoryBlock)));
    }

    getUserAccountBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `user-account-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapUserAccountBlock)));
    }

    getTicketRecentBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `ticket-recent-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapTicketRecentBlock)));
    }

    getServiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `service-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapServiceListBlock)));
    }

    getServiceDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `service-details-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapServiceDetailsBlock)));
    }

    getSurveyJsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `survey-js-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapSurveyJsBlock)));
    }

    getOrderListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `order-list-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapOrderListBlock)));
    }

    getOrdersSummaryBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `orders-summary-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapOrdersSummaryBlock)));
    }

    getArticleListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleListBlock.ArticleListBlock> {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapArticleListBlock(data, this.baseUrl))),
        );
    }

    getCategoryBlock(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.CategoryBlock.CategoryBlock> {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapCategoryBlock(data, this.baseUrl))),
        );
    }

    getCategoryListBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () =>
            this.getBlock(options).pipe(map((data) => mapCategoryListBlock(data, this.baseUrl))),
        );
    }

    getQuickLinksBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `quick-links-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map((data) => mapQuickLinksBlock(data))));
    }
    getOrderDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        const key = `order-details-component-${options.id}-${options.locale}`;
        return this.getCachedBlock(key, () => this.getBlock(options).pipe(map(mapOrderDetailsBlock)));
    }

    getCreateNewPasswordPage(
        options: CMS.Request.GetCmsCreateNewPasswordPageParams,
    ): Observable<CMS.Model.CreateNewPasswordPage.CreateNewPasswordPage> {
        console.log('getCreateNewPasswordPage', options);
        throw new NotImplementedException();
    }

    getResetPasswordPage(
        options: CMS.Request.GetCmsResetPasswordPageParams,
    ): Observable<CMS.Model.ResetPasswordPage.ResetPasswordPage> {
        console.log('getResetPasswordPage', options);
        throw new NotImplementedException();
    }

    getCreateAccountPage(
        options: CMS.Request.GetCmsCreateAccountPageParams,
    ): Observable<CMS.Model.CreateAccountPage.CreateAccountPage> {
        console.log('getCreateAccountPage', options);
        throw new NotImplementedException();
    }
}
