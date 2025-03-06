import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore module type mismatch
import { parse, stringify } from 'flatted';
import { Observable, forkJoin, from, map, mergeMap, of } from 'rxjs';

import { CMS, Cache } from '@o2s/framework/modules';

import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapLoginPage } from './mappers/cms.login-page.mapper';
import { mapPage } from './mappers/cms.page.mapper';
import { mapArticleDetailsComponent } from './mappers/components/cms.article-details.mapper';
import { mapArticleListComponent } from './mappers/components/cms.article-list.mapper';
import { mapFaqComponent } from './mappers/components/cms.faq.mapper';
import { mapInvoiceDetailsComponent } from './mappers/components/cms.invoice-details.mapper';
import { mapInvoiceListComponent } from './mappers/components/cms.invoice-list.mapper';
import { mapNotificationDetailsComponent } from './mappers/components/cms.notification-details.mapper';
import { mapNotificationListComponent } from './mappers/components/cms.notification-list.mapper';
import { mapPaymentsHistoryComponent } from './mappers/components/cms.payments-history.mapper';
import { mapPaymentsSummaryComponent } from './mappers/components/cms.payments-summary.mapper';
import { mapResourceDetailsComponent } from './mappers/components/cms.resource-details.mapper';
import { mapResourceListComponent } from './mappers/components/cms.resource-list.mapper';
import { mapTicketDetailsComponent } from './mappers/components/cms.ticket-details.mapper';
import { mapTicketListComponent } from './mappers/components/cms.ticket-list.mapper';
import { mapUserAccountComponent } from './mappers/components/cms.user-account.mapper';
import { Service as GraphqlService } from '@/modules/graphql';

@Injectable()
export class CmsService implements CMS.Service {
    constructor(
        private readonly graphqlService: GraphqlService,
        private readonly config: ConfigService,
        private readonly cacheService: Cache.Service,
    ) {}

    private getComponent = (options: CMS.Request.GetCmsEntryParams) => {
        const key = `component-${options.id}-${options.locale}`;

        return from(this.cacheService.get(key)).pipe(
            mergeMap((cachedComponent) => {
                if (cachedComponent) {
                    return of(parse(cachedComponent));
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

    private getCachedComponent<T>(key: string, getData: () => Observable<T>): Observable<T> {
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

    getAppConfig(options: CMS.Request.GetCmsAppConfigParams) {
        const key = `app-config-${options.locale}`;
        return this.getCachedComponent(key, () => {
            const appConfig = this.graphqlService.getAppConfig({
                locale: options.locale,
            });

            return forkJoin([appConfig]).pipe(map(([appConfig]) => mapAppConfig(appConfig.data)));
        });
    }

    getEntry(options: CMS.Request.GetCmsEntryParams) {
        const key = `entry-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(undefined));
    }

    getEntries(options: CMS.Request.GetCmsEntriesParams) {
        const key = `entries-${options.type}-${options.locale}-${JSON.stringify(options.filters || {})}`;
        return this.getCachedComponent(key, () => of(undefined));
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        const key = `page-${options.slug}-${options.locale}`;
        return this.getCachedComponent(key, () => {
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

    getLoginPage(options: CMS.Request.GetCmsLoginPageParams) {
        const key = `login-page-${options.locale}`;
        return this.getCachedComponent(key, () => {
            const loginPage = this.graphqlService.getLoginPage({
                locale: options.locale,
            });

            return forkJoin([loginPage]).pipe(
                map(([loginPage]) => {
                    if (!loginPage?.data.loginPage) {
                        throw new NotFoundException();
                    }

                    return mapLoginPage(loginPage.data, this.config.get('CMS_STRAPI_BASE_URL'));
                }),
            );
        });
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        const key = `header-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => {
            const header = this.graphqlService.getHeader({
                locale: options.locale,
                id: options.id,
            });

            return forkJoin([header]).pipe(
                map(([header]) => {
                    if (!header?.data.header) {
                        throw new NotFoundException();
                    }

                    return mapHeader(header.data, this.config.get('CMS_STRAPI_BASE_URL'));
                }),
            );
        });
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        const key = `footer-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => {
            const footer = this.graphqlService.getFooter({
                locale: options.locale,
                id: options.id,
            });

            return forkJoin([footer]).pipe(
                map(([footer]) => {
                    if (!footer?.data.footer) {
                        throw new NotFoundException();
                    }

                    return mapFooter(footer.data, this.config.get('CMS_STRAPI_BASE_URL'));
                }),
            );
        });
    }

    getFaqComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `faq-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapFaqComponent)));
    }

    getTicketListComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `ticket-list-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapTicketListComponent)));
    }

    getTicketDetailsComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `ticket-details-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapTicketDetailsComponent)));
    }

    getNotificationListComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `notification-list-component-${options.id}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapNotificationListComponent)));
    }

    getNotificationDetailsComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `notification-details-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(mapNotificationDetailsComponent()));
    }

    getArticleListComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `article-list-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(mapArticleListComponent(options.locale)));
    }

    getArticleDetailsComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `article-details-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(mapArticleDetailsComponent()));
    }

    getResourceListComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `resource-list-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(mapResourceListComponent(options.locale)));
    }

    getResourceDetailsComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `resource-details-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(mapResourceDetailsComponent()));
    }

    getInvoiceListComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `invoice-list-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapInvoiceListComponent)));
    }

    getInvoiceDetailsComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `invoice-details-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => of(mapInvoiceDetailsComponent()));
    }

    getPaymentsSummaryComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `payments-summary-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapPaymentsSummaryComponent)));
    }

    getPaymentsHistoryComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `payments-history-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapPaymentsHistoryComponent)));
    }

    getUserAccountComponent(options: CMS.Request.GetCmsEntryParams) {
        const key = `user-account-component-${options.id}-${options.locale}`;
        return this.getCachedComponent(key, () => this.getComponent(options).pipe(map(mapUserAccountComponent)));
    }
}
