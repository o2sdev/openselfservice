import { Injectable } from '@nestjs/common';
import { of } from 'rxjs';

import { CMS } from '@o2s/framework/modules';

import { mapAppConfig } from './mappers/cms.app-config.mapper';
import { mapArticleDetailsComponent } from './mappers/cms.article-details.mapper';
import { mapArticleListComponent } from './mappers/cms.article-list.mapper';
import { mapFaqComponent } from './mappers/cms.faq.mapper';
import { mapFooter } from './mappers/cms.footer.mapper';
import { mapHeader } from './mappers/cms.header.mapper';
import { mapInvoiceDetailsComponent } from './mappers/cms.invoice-details.mapper';
import { mapInvoiceListComponent } from './mappers/cms.invoice-list.mapper';
import { mapLoginPage } from './mappers/cms.login-page.mapper';
import { mapNotificationDetailsComponent } from './mappers/cms.notification-details.mapper';
import { mapNotificationListComponent } from './mappers/cms.notification-list.mapper';
import { getAllPages, mapPage } from './mappers/cms.page.mapper';
import { mapPaymentsHistoryComponent } from './mappers/cms.payments-history.mapper';
import { mapPaymentsSummaryComponent } from './mappers/cms.payments-summary.mapper';
import { mapResourceDetailsComponent } from './mappers/cms.resource-details.mapper';
import { mapResourceListComponent } from './mappers/cms.resource-list.mapper';
import { mapTicketDetailsComponent } from './mappers/cms.ticket-details.mapper';
import { mapTicketListComponent } from './mappers/cms.ticket-list.mapper';
import { mapUserAccountComponent } from './mappers/cms.user-account.mapper';
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
        return of(mapAppConfig(options.locale));
    }

    getPage(options: CMS.Request.GetCmsPageParams) {
        return of(mapPage(options.slug));
    }

    getPages(_options: CMS.Request.GetCmsPagesParams) {
        return of(getAllPages());
    }

    getLoginPage(options: CMS.Request.GetCmsLoginPageParams) {
        return of(mapLoginPage(options.locale));
    }

    getHeader(options: CMS.Request.GetCmsHeaderParams) {
        return of(mapHeader(options.id, options.locale));
    }

    getFooter(options: CMS.Request.GetCmsFooterParams) {
        return of(mapFooter(options.locale));
    }

    getFaqComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapFaqComponent()).pipe(responseDelay());
    }

    getTicketListComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketListComponent(options.locale)).pipe(responseDelay());
    }

    getTicketDetailsComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapTicketDetailsComponent()).pipe(responseDelay());
    }

    getNotificationListComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapNotificationListComponent(options.locale)).pipe(responseDelay());
    }

    getNotificationDetailsComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapNotificationDetailsComponent()).pipe(responseDelay());
    }

    getArticleListComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleListComponent(options.locale)).pipe(responseDelay());
    }

    getArticleDetailsComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapArticleDetailsComponent()).pipe(responseDelay());
    }

    getInvoiceListComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapInvoiceListComponent(options.locale)).pipe(responseDelay());
    }

    getInvoiceDetailsComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapInvoiceDetailsComponent()).pipe(responseDelay());
    }

    getResourceListComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapResourceListComponent(options.locale)).pipe(responseDelay());
    }

    getResourceDetailsComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapResourceDetailsComponent()).pipe(responseDelay());
    }

    getPaymentsSummaryComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPaymentsSummaryComponent(options.locale)).pipe(responseDelay());
    }

    getPaymentsHistoryComponent(options: CMS.Request.GetCmsEntryParams) {
        return of(mapPaymentsHistoryComponent(options.locale)).pipe(responseDelay());
    }

    getUserAccountComponent(_options: CMS.Request.GetCmsEntryParams) {
        return of(mapUserAccountComponent()).pipe(responseDelay());
    }
}
