import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { CMS } from '@o2s/framework/modules';

import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapArticleDetailsBlock } from './mappers/cms.article-details.mapper';
import { mapArticleListBlock } from './mappers/cms.article-list.mapper';
import { mapFaqBlock } from './mappers/cms.faq.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapInvoiceDetailsBlock } from './mappers/cms.invoice-details.mapper';
import { mapInvoiceListBlock } from './mappers/cms.invoice-list.mapper';
import { mapLoginPage } from './mappers/cms.login-page.mapper';
import { mapNotFoundPage } from './mappers/cms.not-found-page.mapper';
import { mapNotificationDetailsBlock } from './mappers/cms.notification-details.mapper';
import { mapNotificationListBlock } from './mappers/cms.notification-list.mapper';
import { getAllPages, getAlternativePages, mapPage } from './mappers/cms.page.mapper';
import { mapPaymentsHistoryBlock } from './mappers/cms.payments-history.mapper';
import { mapPaymentsSummaryBlock } from './mappers/cms.payments-summary.mapper';
import { mapResourceDetailsBlock } from './mappers/cms.resource-details.mapper';
import { mapResourceListBlock } from './mappers/cms.resource-list.mapper';
import { mapServiceDetailsBlock } from './mappers/cms.service-details.mapper';
import { mapServiceListBlock } from './mappers/cms.service-list.mapper';
import { mapTicketDetailsBlock } from './mappers/cms.ticket-details.mapper';
import { mapTicketListBlock } from './mappers/cms.ticket-list.mapper';
import { mapTicketRecentBlock } from './mappers/cms.ticket-recent.mapper';
import { mapUserAccountBlock } from './mappers/cms.user-account.mapper';

@Injectable()
export class CmsService implements CMS.Service {
    getEntry<T>(_options: CMS.Request.GetCmsEntryParams) {
        return of<T>({} as T);
    }

    getEntries<T>(_options: CMS.Request.GetCmsEntriesParams) {
        return of<T>({} as T);
    }

    getAppConfig(options: CMS.Request.GetCmsAppConfigParams) {
        return of(mapAppConfig(options.referrer, options.locale));
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
        return of(mapFaqBlock(_options.locale));
    }

    getTicketListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketListBlock(options.locale));
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

    getArticleListBlock(options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleListBlock(options.locale));
    }

    getArticleDetailsBlock(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleDetailsBlock());
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
}
