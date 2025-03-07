import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as CMS from './';

@Injectable()
export abstract class CmsService {
    protected constructor(..._services: unknown[]) {}

    abstract getAppConfig(options: CMS.Request.GetCmsAppConfigParams): Observable<CMS.Model.AppConfig.AppConfig>;

    abstract getEntry(options: CMS.Request.GetCmsEntryParams): Observable<unknown>;

    abstract getEntries(options: CMS.Request.GetCmsEntriesParams): Observable<unknown>;

    abstract getPage(options: CMS.Request.GetCmsPageParams): Observable<CMS.Model.Page.Page | undefined>;

    abstract getPages(options: CMS.Request.GetCmsPagesParams): Observable<CMS.Model.Page.Page[]>;

    abstract getLoginPage(options: CMS.Request.GetCmsLoginPageParams): Observable<CMS.Model.LoginPage.LoginPage>;

    abstract getHeader(options: CMS.Request.GetCmsHeaderParams): Observable<CMS.Model.Header.Header>;

    abstract getFooter(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.Footer.Footer>;

    abstract getFaqComponent(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.FaqComponent.FaqComponent>;

    abstract getTicketListComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketListComponent.TicketListComponent>;

    abstract getTicketDetailsComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketDetailsComponent.TicketDetailsComponent>;

    abstract getNotificationListComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.NotificationListComponent.NotificationListComponent>;

    abstract getNotificationDetailsComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.NotificationDetailsComponent.NotificationDetailsComponent>;

    abstract getArticleListComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleListComponent.ArticleListComponent>;

    abstract getArticleDetailsComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleDetailsComponent.ArticleDetailsComponent>;

    abstract getInvoiceListComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.InvoiceListComponent.InvoiceListComponent>;

    abstract getInvoiceDetailsComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.InvoiceDetailsComponent.InvoiceDetailsComponent>;

    abstract getResourceListComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ResourceListComponent.ResourceListComponent>;

    abstract getResourceDetailsComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ResourceDetailsComponent.ResourceDetailsComponent>;

    abstract getPaymentsSummaryComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PaymentsSummaryComponent.PaymentsSummaryComponent>;

    abstract getPaymentsHistoryComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PaymentsHistoryComponent.PaymentsHistoryComponent>;

    abstract getUserAccountComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.UserAccountComponent.UserAccountComponent>;

    abstract getTicketRecentComponent(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketRecentComponent.TicketRecentComponent>;
}
