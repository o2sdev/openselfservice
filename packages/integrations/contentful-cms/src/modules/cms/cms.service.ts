import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { parse, stringify } from 'flatted';
import { Observable, forkJoin, from, map, mergeMap, of } from 'rxjs';

import { CMS, Cache } from '@o2s/framework/modules';

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
import { getAllPages, getAlternativePages, mapMockPage, mapPage } from './mappers/cms.page.mapper';
import { mapSurvey } from './mappers/cms.survey.mapper';

@Injectable()
export class CmsService implements CMS.Service {
    constructor(
        private readonly graphqlService: GraphqlService,
        private readonly config: ConfigService,
        private readonly cacheService: Cache.Service,
    ) {}

    private getBlock = (options: CMS.Request.GetCmsEntryParams) => {
        const key = `component-${options.id}-${options.locale}`;
        // @ts-expect-error we are missing transforming string from query param back to boolean
        const isPreview = options.preview === 'true';

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
                            throw new NotFoundException();
                        }
                        const data = {
                            ...component.data.block.content,
                            configurableTexts,
                        };
                        this.cacheService.set(key, stringify(data));
                        return { ...data, isPreview };
                    }),
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
        return of(mapAppConfig(options.locale, options.referrer));
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        const key = `page-${options.slug}-${options.locale}`;
        // @ts-expect-error we are missing transforming string from query param back to boolean
        const isPreview = options.preview === 'true';

        // TODO: remove this once we have a full implementation of the page mapper
        if (options.slug !== '/cases' && options.slug !== '/') {
            return of(mapMockPage(options.slug, options.locale));
        }

        return this.getCachedBlock(key, () => {
            const pages = this.graphqlService.getPages({
                locale: options.locale,
                preview: isPreview,
            });

            return forkJoin([pages]).pipe(
                map(([pages]) => {
                    if (!pages?.data?.pageCollection?.items?.length) {
                        throw new NotFoundException();
                    }

                    const page = pages.data.pageCollection.items.find((page) => {
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
        return of(getAllPages(options.locale));
    }

    getAlternativePages(options: CMS.Request.GetCmsAlternativePagesParams) {
        return of(getAlternativePages(options.id, options.slug, options.locale));
    }

    getLoginPage(options: CMS.Request.GetCmsLoginPageParams) {
        return of(mapLoginPage(options.locale));
    }

    getNotFoundPage(options: CMS.Request.GetCmsNotFoundPageParams) {
        return of(mapNotFoundPage(options.locale));
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        return of(mapHeader(options.id, options.locale));
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        return of(mapFooter(options.locale));
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
}
