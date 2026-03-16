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

    abstract getSurvey(options: CMS.Request.GetCmsSurveyParams): Observable<CMS.Model.Survey.Survey>;

    abstract getBlockConfig<T>(options: CMS.Request.GetCmsBlockConfigParams): Observable<T>;
}
