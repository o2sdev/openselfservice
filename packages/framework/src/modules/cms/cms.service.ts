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
    abstract getFooter(options: CMS.Request.GetCmsFooterParams): Observable<CMS.Model.Footer.Footer>;

    /** Fetches survey definition by ID. */
    abstract getSurvey(options: CMS.Request.GetCmsSurveyParams): Observable<CMS.Model.Survey.Survey>;

    /** Fetches block configuration by block type. Generic method replacing block-specific methods. */
    abstract getBlockConfig<T>(options: CMS.Request.GetCmsBlockConfigParams): Observable<T>;
}
