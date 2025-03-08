import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

import { AppHeaders } from '@o2s/api-harmonization/utils/headers';

import { CMS } from '../../models';

import { mapPage } from './page.mapper';
import { Init, Page } from './page.model';
import { GetPageParams } from './page.request';

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

    // TODO: remove mocked data and add real implementation
    getInit(_query: GetPageParams, _headers: AppHeaders): Observable<Init> {
        return of({
            locales: [
                {
                    value: 'en',
                    label: 'EN',
                },
                {
                    value: 'de',
                    label: 'DE',
                },
                {
                    value: 'pl',
                    label: 'PL',
                },
            ],
        });
    }

    getPage(query: GetPageParams, headers: AppHeaders): Observable<Page> {
        return this.cmsService.getAppConfig({ locale: headers['x-locale'] }).pipe(
            switchMap((appConfig) => {
                const header = this.cmsService.getHeader({
                    id: appConfig.signedIn.header || '',
                    locale: headers['x-locale'],
                });
                const footer = this.cmsService.getFooter({
                    id: appConfig.signedIn.footer || '',
                    locale: headers['x-locale'],
                });
                const page = this.cmsService.getPage({ slug: query.slug, locale: headers['x-locale'] });

                return forkJoin([header, footer, page]).pipe(
                    switchMap(([header, footer, page]) => {
                        if (!page) {
                            throw new NotFoundException();
                        }

                        const alternatePages = this.cmsService
                            .getAlternativePages({ id: page.id, slug: query.slug, locale: headers['x-locale'] })
                            .pipe(map((pages) => pages.filter((p) => p.id === page.id)));

                        return forkJoin([
                            of(header),
                            of(footer),
                            of({ page, locale: headers['x-locale'] }),
                            alternatePages,
                        ]).pipe(
                            map(([header, footer, mainPage, alternatePages]) => {
                                const alternates = alternatePages?.filter((p) => p?.id === page.id);
                                return mapPage(header, footer, mainPage.page, mainPage.locale, alternates);
                            }),
                        );
                    }),
                );
            }),
        );
    }
}
