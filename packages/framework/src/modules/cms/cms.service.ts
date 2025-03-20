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

    abstract getAlternativePages(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.Page.Page[]>;

    abstract getLoginPage(options: CMS.Request.GetCmsLoginPageParams): Observable<CMS.Model.LoginPage.LoginPage>;

    abstract getNotFoundPage(
        options: CMS.Request.GetCmsNotFoundPageParams,
    ): Observable<CMS.Model.NotFoundPage.NotFoundPage>;

    abstract getHeader(options: CMS.Request.GetCmsHeaderParams): Observable<CMS.Model.Header.Header>;

    abstract getFooter(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.Footer.Footer>;

    abstract getFaqBlock(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.FaqBlock.FaqBlock>;

    abstract getTicketListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketListBlock.TicketListBlock>;

    abstract getTicketDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketDetailsBlock.TicketDetailsBlock>;

    abstract getNotificationListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.NotificationListBlock.NotificationListBlock>;

    abstract getNotificationDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.NotificationDetailsBlock.NotificationDetailsBlock>;

    abstract getInvoiceListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.InvoiceListBlock.InvoiceListBlock>;

    abstract getInvoiceDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.InvoiceDetailsBlock.InvoiceDetailsBlock>;

    abstract getResourceListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ResourceListBlock.ResourceListBlock>;

    abstract getResourceDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ResourceDetailsBlock.ResourceDetailsBlock>;

    abstract getPaymentsSummaryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock>;

    abstract getPaymentsHistoryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock>;

    abstract getUserAccountBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.UserAccountBlock.UserAccountBlock>;

    abstract getTicketRecentBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketRecentBlock.TicketRecentBlock>;

    abstract getQuickLinksBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.QuickLinksBlock.QuickLinksBlock>;

    abstract getArticleListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleListBlock.ArticleListBlock>;

    abstract getCategoryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CategoryBlock.CategoryBlock>;

    abstract getCategoryListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CategoryListBlock.CategoryListBlock>;
}
