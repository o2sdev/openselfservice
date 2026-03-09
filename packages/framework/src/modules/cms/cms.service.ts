import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import * as CMS from './';

/** Raw CMS entry payload. Generic shape for single entry responses. */
export type CmsEntryData = Record<string, unknown>;
/** Raw CMS entries payload. Generic shape for collection responses. */
export type CmsEntriesData = Record<string, unknown>;

/**
 * Abstract CMS service. Implementation is provided by API Harmonization (integration with headless CMS).
 * All methods return RxJS {@link Observable}. Handles pages, entries, header/footer, app config, and block types.
 */
@Injectable()
export abstract class CmsService {
    protected constructor(..._services: unknown[]) {}

    /** Fetches app-level configuration (branding, feature flags, etc.). */
    abstract getAppConfig(options: CMS.Request.GetCmsAppConfigParams): Observable<CMS.Model.AppConfig.AppConfig>;

    /** Fetches a single CMS entry by ID. Returns undefined if not found. */
    abstract getEntry<T = CmsEntryData>(options: CMS.Request.GetCmsEntryParams): Observable<T | undefined>;

    /** Fetches multiple CMS entries matching the query. */
    abstract getEntries<T = CmsEntriesData>(options: CMS.Request.GetCmsEntriesParams): Observable<T>;

    /** Fetches a page by slug/ID. Returns undefined if not found. */
    abstract getPage(options: CMS.Request.GetCmsPageParams): Observable<CMS.Model.Page.Page | undefined>;

    /** Fetches all pages matching the query. */
    abstract getPages(options: CMS.Request.GetCmsPagesParams): Observable<CMS.Model.Page.Page[]>;

    /** Fetches alternative language versions of the current page. */
    abstract getAlternativePages(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.Page.Page[]>;

    /** Fetches login page configuration. */
    abstract getLoginPage(options: CMS.Request.GetCmsLoginPageParams): Observable<CMS.Model.LoginPage.LoginPage>;

    /** Fetches 404 not-found page configuration. */
    abstract getNotFoundPage(
        options: CMS.Request.GetCmsNotFoundPageParams,
    ): Observable<CMS.Model.NotFoundPage.NotFoundPage>;

    /** Fetches header navigation and branding. */
    abstract getHeader(options: CMS.Request.GetCmsHeaderParams): Observable<CMS.Model.Header.Header>;

    /** Fetches footer content and links. */
    abstract getFooter(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.Footer.Footer>;

    /** Fetches FAQ block (accordion items). */
    abstract getFaqBlock(options: CMS.Request.GetCmsEntryParams): Observable<CMS.Model.FaqBlock.FaqBlock>;

    /** Fetches ticket list block configuration. */
    abstract getTicketListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketListBlock.TicketListBlock>;

    /** Fetches ticket details block configuration. */
    abstract getTicketDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketDetailsBlock.TicketDetailsBlock>;

    /** Fetches notification list block configuration. */
    abstract getNotificationListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.NotificationListBlock.NotificationListBlock>;

    /** Fetches notification details block configuration. */
    abstract getNotificationDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.NotificationDetailsBlock.NotificationDetailsBlock>;

    /** Fetches invoice list block configuration. */
    abstract getInvoiceListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.InvoiceListBlock.InvoiceListBlock>;

    /** Fetches invoice details block configuration. */
    abstract getInvoiceDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.InvoiceDetailsBlock.InvoiceDetailsBlock>;

    /** Fetches resource list block configuration. */
    abstract getResourceListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ResourceListBlock.ResourceListBlock>;

    /** Fetches resource details block configuration. */
    abstract getResourceDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ResourceDetailsBlock.ResourceDetailsBlock>;

    /** Fetches payments summary block (overview cards). */
    abstract getPaymentsSummaryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PaymentsSummaryBlock.PaymentsSummaryBlock>;

    /** Fetches payments history block (transaction list). */
    abstract getPaymentsHistoryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.PaymentsHistoryBlock.PaymentsHistoryBlock>;

    /** Fetches user account block configuration. */
    abstract getUserAccountBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.UserAccountBlock.UserAccountBlock>;

    /** Fetches recent tickets block configuration. */
    abstract getTicketRecentBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.TicketRecentBlock.TicketRecentBlock>;

    /** Fetches service list block configuration. */
    abstract getServiceListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ServiceListBlock.ServiceListBlock>;

    /** Fetches featured/promoted services block configuration. */
    abstract getFeaturedServiceListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.FeaturedServiceListBlock.FeaturedServiceListBlock>;

    /** Fetches service details block configuration. */
    abstract getServiceDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ServiceDetailsBlock.ServiceDetailsBlock>;

    /** Fetches organization list configuration. */
    abstract getOrganizationList(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.OrganizationList.OrganizationList>;

    /** Fetches survey definition by ID. */
    abstract getSurvey(options: CMS.Request.GetCmsSurveyParams): Observable<CMS.Model.Survey.Survey>;

    /** Fetches SurveyJS block configuration (form definition). */
    abstract getSurveyJsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.SurveyJsBlock.SurveyJsBlock>;

    /** Fetches order list block configuration. */
    abstract getOrderListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.OrderListBlock.OrderListBlock>;

    /** Fetches orders summary block (overview cards). */
    abstract getOrdersSummaryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.OrdersSummaryBlock.OrdersSummaryBlock>;

    /** Fetches quick links block configuration. */
    abstract getQuickLinksBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.QuickLinksBlock.QuickLinksBlock>;

    /** Fetches article list block configuration. */
    abstract getArticleListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleListBlock.ArticleListBlock>;

    /** Fetches single category block configuration. */
    abstract getCategoryBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CategoryBlock.CategoryBlock>;

    /** Fetches category list block configuration. */
    abstract getCategoryListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.CategoryListBlock.CategoryListBlock>;

    /** Fetches article search block configuration. */
    abstract getArticleSearchBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ArticleSearchBlock.ArticleSearchBlock>;

    /** Fetches product list block configuration. */
    abstract getProductListBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ProductListBlock.ProductListBlock>;

    /** Fetches product details block configuration. */
    abstract getProductDetailsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.ProductDetailsBlock.ProductDetailsBlock>;

    /** Fetches recommended products block configuration. */
    abstract getRecommendedProductsBlock(
        options: CMS.Request.GetCmsEntryParams,
    ): Observable<CMS.Model.RecommendedProductsBlock.RecommendedProductsBlock>;
}
