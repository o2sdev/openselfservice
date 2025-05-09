import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { CMS } from '@o2s/framework/modules';

import { mapArticleListBlock } from './mappers/blocks/cms.article-list.mapper';
import { mapFaqBlock } from './mappers/blocks/cms.faq.mapper';
import { mapInvoiceDetailsBlock } from './mappers/blocks/cms.invoice-details.mapper';
import { mapInvoiceListBlock } from './mappers/blocks/cms.invoice-list.mapper';
import { mapNotificationDetailsBlock } from './mappers/blocks/cms.notification-details.mapper';
import { mapNotificationListBlock } from './mappers/blocks/cms.notification-list.mapper';
import { mapOrderListBlock } from './mappers/blocks/cms.order-list.mapper';
import { mapOrdersSummaryBlock } from './mappers/blocks/cms.orders-summary.mapper';
import { mapPaymentsHistoryBlock } from './mappers/blocks/cms.payments-history.mapper';
import { mapPaymentsSummaryBlock } from './mappers/blocks/cms.payments-summary.mapper';
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
import { mapCategoryListBlock } from './mappers/cms.category-list.mapper';
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

    getFaqBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapFaqBlock(_options.locale)).pipe(responseDelay());
    }

    getTicketListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketListBlock(options.locale)).pipe(responseDelay());
    }

    getTicketDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketDetailsBlock(_options.locale)).pipe(responseDelay());
    }

    getNotificationListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapNotificationListBlock(options.locale)).pipe(responseDelay());
    }

    getNotificationDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapNotificationDetailsBlock(_options.locale)).pipe(responseDelay());
    }

    getInvoiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapInvoiceListBlock(options.locale)).pipe(responseDelay());
    }

    getInvoiceDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapInvoiceDetailsBlock()).pipe(responseDelay());
    }

    getServiceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapServiceListBlock(options.locale)).pipe(responseDelay());
    }

    getServiceDetailsBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapServiceDetailsBlock(options.locale)).pipe(responseDelay());
    }

    getResourceListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapResourceListBlock(options.locale)).pipe(responseDelay());
    }

    getResourceDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapResourceDetailsBlock()).pipe(responseDelay());
    }

    getPaymentsSummaryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPaymentsSummaryBlock(options.locale)).pipe(responseDelay());
    }

    getPaymentsHistoryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPaymentsHistoryBlock(options.locale)).pipe(responseDelay());
    }

    getUserAccountBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapUserAccountBlock(_options.locale)).pipe(responseDelay());
    }

    getTicketRecentBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketRecentBlock(options.locale)).pipe(responseDelay());
    }

    getOrganizationList(options: CMS.Request.GetCmsOrganizationListParams) {
        return of(mapOrganizationList(options.locale)).pipe(responseDelay());
    }

    getSurvey(options: CMS.Request.GetCmsSurveyParams) {
        return of(mapSurvey(options.code)).pipe(responseDelay());
    }

    getSurveyJsBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapSurveyJsBlock(options.locale, options.id)).pipe(responseDelay());
    }

    getOrderListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapOrderListBlock(options.locale)).pipe(responseDelay());
    }

    getOrdersSummaryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapOrdersSummaryBlock(options.locale)).pipe(responseDelay());
    }

    getQuickLinksBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapQuickLinksBlock(options.locale)).pipe(responseDelay());
    }

    getArticleListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleListBlock(options.locale)).pipe(responseDelay());
    }

    getCategoryBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapCategoryBlock(options.locale)).pipe(responseDelay());
    }

    getCategoryListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapCategoryListBlock(options.locale)).pipe(responseDelay());
    }
}
