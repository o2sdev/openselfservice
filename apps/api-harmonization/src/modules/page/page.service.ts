import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapInit, mapPage } from './page.mapper';
import { Init, NotFound, Page } from './page.model';
import { GetInitQuery, GetPageQuery } from './page.request';

@Injectable()
export class PageService {
    private readonly SUPPORTED_LOCALES: string[];

    constructor(
        private readonly config: ConfigService,
        private readonly cmsService: CMS.Service,
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

    getInit(query: GetInitQuery, headers: AppHeaders): Observable<Init> {
        return this.cmsService.getAppConfig({ referrer: query.referrer, locale: headers['x-locale'] }).pipe(
            switchMap((appConfig) => {
                const header = this.cmsService.getHeader({
                    id: appConfig.header || '',
                    locale: headers['x-locale'],
                });

                const footer = this.cmsService.getFooter({
                    id: appConfig.footer || '',
                    locale: headers['x-locale'],
                });

                return forkJoin([header, footer]).pipe(
                    map(([header, footer]) => {
                        return mapInit(appConfig.locales, header, footer);
                    }),
                );
            }),
        );
    }

    getPage(query: GetPageQuery, headers: AppHeaders): Observable<Page | NotFound> {
        const page = this.cmsService.getPage({ slug: query.slug, locale: headers['x-locale'] });

        return forkJoin([page]).pipe(
            switchMap(([page]) => {
                if (!page) {
                    throw new NotFoundException();
                }

                const alternatePages = this.cmsService
                    .getAlternativePages({ id: page.id, slug: query.slug, locale: headers['x-locale'] })
                    .pipe(map((pages) => pages.filter((p) => p.id === page.id)));

                return forkJoin([of(page), alternatePages]).pipe(
                    map(([page, alternatePages]) => {
                        const alternates = alternatePages?.filter((p) => p?.id === page.id);
                        return mapPage(page, headers['x-locale'], alternates);
                    }),
                );
            }),
        );
    }
}
