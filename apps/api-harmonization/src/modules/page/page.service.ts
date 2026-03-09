import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Articles, Auth, CMS } from '@o2s/configs.integrations';
import { Observable, concatMap, forkJoin, map, of, switchMap } from 'rxjs';

import { Models } from '@o2s/utils.api-harmonization';

import { mapArticle, mapInit, mapPage } from './page.mapper';
import { Init, NotFound, Page } from './page.model';
import { GetInitQuery, GetPageQuery } from './page.request';

const H = Models.Headers.HeaderName;

@Injectable()
export class PageService {
    private readonly SUPPORTED_LOCALES: string[];

    constructor(
        private readonly config: ConfigService,
        private readonly cmsService: CMS.Service,
        private readonly articlesService: Articles.Service,
        private readonly authService: Auth.Service,
    ) {
        this.SUPPORTED_LOCALES = this.config.get('SUPPORTED_LOCALES').split(',') as string[];
    }

    getAllPages(): Observable<{ [key: string]: { locale: string; page: CMS.Model.Page.Page }[] }> {
        const pageRequests = this.SUPPORTED_LOCALES.map((locale) =>
            this.cmsService.getPages({ locale }).pipe(map((pages) => pages.map((page) => ({ locale, page })))),
        );

        return forkJoin(pageRequests).pipe(
            map((results) =>
                results.flat().reduce(
                    (acc, { page, locale }) => {
                        const documentId = page.id;
                        if (!acc[documentId]) {
                            acc[documentId] = [];
                        }
                        acc[documentId].push({ locale, page });
                        return acc;
                    },
                    {} as { [key: string]: { locale: string; page: CMS.Model.Page.Page }[] },
                ),
            ),
        );
    }

    getInit(query: GetInitQuery, headers: Models.Headers.AppHeaders): Observable<Init> {
        const userRoles = this.authService.getRoles(headers[H.Authorization]);

        return this.cmsService.getAppConfig({ referrer: query.referrer, locale: headers[H.Locale] }).pipe(
            switchMap((appConfig) => {
                const header = this.cmsService.getHeader({
                    id: appConfig.header || '',
                    locale: headers[H.Locale],
                });

                const footer = this.cmsService.getFooter({
                    id: appConfig.footer || '',
                    locale: headers[H.Locale],
                });

                return forkJoin([header, footer]).pipe(
                    map(([header, footer]) => {
                        return mapInit(
                            appConfig.locales,
                            header,
                            footer,
                            appConfig.labels,
                            appConfig.themes,
                            userRoles,
                        );
                    }),
                );
            }),
        );
    }

    getPage(query: GetPageQuery, headers: Models.Headers.AppHeaders): Observable<Page | NotFound> {
        const page = this.cmsService.getPage({ slug: query.slug, locale: headers[H.Locale] });
        const userRoles = this.authService.getRoles(headers[H.Authorization]);

        return forkJoin([page]).pipe(
            concatMap(([page]) => {
                if (!page) {
                    return this.articlesService.getArticle({ slug: query.slug, locale: headers[H.Locale] }).pipe(
                        concatMap((article) => {
                            if (!article) {
                                throw new NotFoundException();
                            }

                            Auth.Service.requireRoles(article.roles, userRoles);

                            return this.processArticle(article, query, headers);
                        }),
                    );
                }

                Auth.Service.requireRoles(page.roles, userRoles);

                return this.processPage(page, query, headers);
            }),
        );
    }

    private processPage = (page: CMS.Model.Page.Page, query: GetPageQuery, headers: Models.Headers.AppHeaders) => {
        const alternatePages = this.cmsService
            .getAlternativePages({ id: page.id, slug: query.slug, locale: headers[H.Locale] })
            .pipe(map((pages) => pages.filter((p) => p.id === page.id)));

        return forkJoin([of(page), alternatePages]).pipe(
            map(([page, alternatePages]) => {
                const alternates = alternatePages?.filter((p) => p?.id === page.id);
                return mapPage(page, headers[H.Locale], alternates);
            }),
        );
    };

    private processArticle = (
        article: Articles.Model.Article,
        query: GetPageQuery,
        headers: Models.Headers.AppHeaders,
    ) => {
        if (!article.category) {
            throw new NotFoundException();
        }

        const category = this.articlesService.getCategory({ id: article.category.id, locale: headers[H.Locale] });

        return forkJoin([category]).pipe(
            map(([category]) => {
                // Extract base path from URL: /basePath/categorySlug/articleSlug -> /basePath
                const slugParts = query.slug.split('/').filter(Boolean);
                // Remove article slug (last segment) and category slug (second to last)
                const basePath = slugParts.length > 2 ? '/' + slugParts.slice(0, -2).join('/') : '/';

                return mapArticle(article, category, headers[H.Locale], basePath);
            }),
        );
    };
}
