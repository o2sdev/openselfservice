import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, map } from 'rxjs';
import { create } from 'xmlbuilder2';

import { PageService } from '../page/page.service';

import { AlternateUrl, SitemapEntry } from './models/sitemap.model';

@Injectable()
export class SitemapService {
    private readonly defaultLocale: string;
    private readonly baseUrl: string;

    constructor(
        private readonly pageService: PageService,
        private readonly configService: ConfigService,
    ) {
        this.defaultLocale = this.configService.get('DEFAULT_LOCALE') || 'pl';
        this.baseUrl = this.configService.get('FRONT_BASE_URL') as string;
    }

    getSitemap(): Observable<SitemapEntry[]> {
        return this.pageService.getAllPages().pipe(
            map((pagesMap) => {
                const sitemapEntries: SitemapEntry[] = [];

                Object.entries(pagesMap).forEach(([_documentId, pages]) => {
                    const mainPage = pages.find((p) => p.locale === this.defaultLocale);
                    if (!mainPage || mainPage.page.seo.noIndex) return;

                    const alternates: AlternateUrl[] = pages
                        .filter((p) => p.locale !== this.defaultLocale && !p.page.seo.noIndex)
                        .map((p) => ({
                            href: this.buildUrl(p.page.slug),
                            hreflang: p.locale,
                        }));

                    sitemapEntries.push({
                        loc: this.buildUrl(mainPage.page.slug),
                        lastMod: mainPage.page.updatedAt,
                        changefreq: 'daily',
                        priority: 0.7,
                        alternates: alternates.length > 0 ? alternates : undefined,
                    });
                });

                return sitemapEntries;
            }),
        );
    }

    getSitemapXml(entries: SitemapEntry[]): string {
        const root = create({ version: '1.0', encoding: 'UTF-8' }).ele('urlset', {
            xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
            'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
        });

        entries.forEach((entry: SitemapEntry) => {
            const url = root.ele('url');
            url.ele('loc').txt(entry.loc);

            if (entry.lastMod) {
                url.ele('lastmod').txt(entry.lastMod);
            }

            if (entry.changefreq) {
                url.ele('changefreq').txt(entry.changefreq);
            }

            if (entry.priority) {
                url.ele('priority').txt(entry.priority.toString());
            }

            if (entry.alternates?.length) {
                entry.alternates.forEach((alternate) => {
                    url.ele('xhtml:link', {
                        rel: 'alternate',
                        hreflang: alternate.hreflang,
                        href: alternate.href,
                    });
                });
            }
        });

        return root.end({ prettyPrint: true });
    }

    private buildUrl(slug: string): string {
        return `${this.baseUrl}${slug}`;
    }
}
