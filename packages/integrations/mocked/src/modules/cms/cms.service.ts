import { Injectable, NotFoundException } from '@nestjs/common';
import { Observable, of } from 'rxjs';

import { CMS } from '@o2s/framework/modules';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapArticleSearchBlock } from './mappers/blocks/cms.article-search.mapper';
import { mapBentoGridBlock } from './mappers/blocks/cms.bento-grid.mapper';
import { mapCategoryListBlock } from './mappers/blocks/cms.category-list.mapper';
import { mapCtaSectionBlock } from './mappers/blocks/cms.cta-section.mapper';
import { mapDocumentListBlock } from './mappers/blocks/cms.document-list.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapFeatureSectionGridBlock } from './mappers/blocks/cms.feature-section-grid.mapper';
import { mapFeatureSectionBlock } from './mappers/blocks/cms.feature-section.mapper';
import { mapFeaturedServiceListBlock } from './mappers/blocks/cms.featured-service-list.mapper';
import { mapHeroSectionBlock } from './mappers/blocks/cms.hero-section.mapper';
import { mapInvoiceDetailsBlock } from './mappers/blocks/cms.invoice-details.mapper';
import { mapInvoiceListBlock } from './mappers/blocks/cms.invoice-list.mapper';
import { mapMediaSectionBlock } from './mappers/blocks/cms.media-section.mapper';
import { mapNotificationDetailsBlock } from './mappers/blocks/cms.notification-details.mapper';
import { mapNotificationListBlock } from './mappers/blocks/cms.notification-list.mapper';
import { mapNotificationSummaryBlock } from './mappers/blocks/cms.notification-summary.mapper';
import { mapOrderDetailsBlock } from './mappers/blocks/cms.order-details.mapper';
import { mapOrderListBlock } from './mappers/blocks/cms.order-list.mapper';
import { mapOrdersSummaryBlock } from './mappers/blocks/cms.orders-summary.mapper';
import { mapPaymentsHistoryBlock } from './mappers/blocks/cms.payments-history.mapper';
import { mapPaymentsSummaryBlock } from './mappers/blocks/cms.payments-summary.mapper';
import { mapPricingSectionBlock } from './mappers/blocks/cms.pricing-section.mapper';
import { mapProductDetailsBlock } from './mappers/blocks/cms.product-details.mapper';
import { mapProductListBlock } from './mappers/blocks/cms.product-list.mapper';
import { mapRecommendedProductsBlock } from './mappers/blocks/cms.recommended-products.mapper';
import { mapResourceDetailsBlock } from './mappers/blocks/cms.resource-details.mapper';
import { mapResourceListBlock } from './mappers/blocks/cms.resource-list.mapper';
import { mapServiceDetailsBlock } from './mappers/blocks/cms.service-details.mapper';
import { mapServiceListBlock } from './mappers/blocks/cms.service-list.mapper';
import { mapSurveyJsBlock } from './mappers/blocks/cms.surveyjs-block.mapper';
import { mapTicketDetailsBlock } from './mappers/blocks/cms.ticket-details.mapper';
import { mapTicketListBlock } from './mappers/blocks/cms.ticket-list.mapper';
import { mapTicketRecentBlock } from './mappers/blocks/cms.ticket-recent.mapper';
import { mapTicketSummaryBlock } from './mappers/blocks/cms.ticket-summary.mapper';
import { mapUserAccountBlock } from './mappers/blocks/cms.user-account.mapper';
import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapCategoryBlock } from './mappers/cms.category.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapLoginPage } from './mappers/cms.login-page.mapper';
import { mapNotFoundPage } from './mappers/cms.not-found-page.mapper';
import { mapOrganizationList } from './mappers/cms.organization-list.mapper';
import { getAllPages, getAlternativePages, mapPage } from './mappers/cms.page.mapper';
import { mapQuickLinksBlock } from './mappers/cms.quick-links.mapper';
import { mapSurvey } from './mappers/cms.survey.mapper';
import { responseDelay } from '@/utils/delay';

@Injectable()
export class CmsService implements CMS.Service {
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
        return of(mapPage(options.slug, options.locale));
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

    getSurvey(options: CMS.Request.GetCmsSurveyParams) {
        return of(mapSurvey(options.code)).pipe(responseDelay());
    }

    getBlockConfig<T>(options: CMS.Request.GetCmsBlockConfigParams): Observable<T> {
        switch (options.blockType) {
            case 'FaqBlock':
                return of(mapFaqBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'TicketListBlock':
                return of(mapTicketListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'TicketDetailsBlock':
                return of(mapTicketDetailsBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'TicketRecentBlock':
                return of(mapTicketRecentBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'TicketSummaryBlock':
                return of(mapTicketSummaryBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'NotificationListBlock':
                return of(mapNotificationListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'NotificationDetailsBlock':
                return of(mapNotificationDetailsBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'NotificationSummaryBlock':
                return of(mapNotificationSummaryBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'InvoiceListBlock':
                return of(mapInvoiceListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'InvoiceDetailsBlock':
                return of(mapInvoiceDetailsBlock()).pipe(responseDelay()) as Observable<T>;
            case 'OrderListBlock':
                return of(mapOrderListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'OrderDetailsBlock':
                return of(mapOrderDetailsBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'OrdersSummaryBlock':
                return of(mapOrdersSummaryBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'PaymentsSummaryBlock':
                return of(mapPaymentsSummaryBlock(options.id, options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'PaymentsHistoryBlock':
                return of(mapPaymentsHistoryBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ProductListBlock':
                return of(mapProductListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ProductDetailsBlock':
                return of(mapProductDetailsBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'RecommendedProductsBlock':
                return of(mapRecommendedProductsBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ServiceListBlock':
                return of(mapServiceListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'FeaturedServiceListBlock':
                return of(mapFeaturedServiceListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ServiceDetailsBlock':
                return of(mapServiceDetailsBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ResourceListBlock':
                return of(mapResourceListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ResourceDetailsBlock':
                return of(mapResourceDetailsBlock()).pipe(responseDelay()) as Observable<T>;
            case 'UserAccountBlock':
                return of(mapUserAccountBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'OrganizationList':
                return of(mapOrganizationList(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'SurveyJsBlock':
                return of(mapSurveyJsBlock(options.locale, options.id)).pipe(responseDelay()) as Observable<T>;
            case 'QuickLinksBlock':
                return of(mapQuickLinksBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ArticleListBlock':
                return of(mapArticleListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'ArticleSearchBlock':
                return of(mapArticleSearchBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'CategoryBlock':
                return of(mapCategoryBlock(options.id, options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'CategoryListBlock':
                return of(mapCategoryListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'BentoGridBlock':
                return of(mapBentoGridBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'CtaSectionBlock':
                return of(mapCtaSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'DocumentListBlock':
                return of(mapDocumentListBlock(options.locale)).pipe(responseDelay()) as Observable<T>;
            case 'FeatureSectionBlock':
                return of(mapFeatureSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'FeatureSectionGridBlock':
                return of(mapFeatureSectionGridBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'HeroSectionBlock':
                return of(mapHeroSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'MediaSectionBlock':
                return of(mapMediaSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            case 'PricingSectionBlock':
                return of(mapPricingSectionBlock(options)).pipe(responseDelay()) as Observable<T>;
            default:
                throw new NotFoundException(`Unknown block type: ${options.blockType}`);
        }
    }
}
