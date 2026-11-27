import { describe, expect, it } from 'vitest';

import { CMS } from '@o2s/framework/modules';

import { getAllPages, getAlternativePages, mapPage } from './cms.page.mapper';

/**
 * These started as characterization tests of the hand-written switch this mapper used to be, and now
 * describe the registry that replaced it. The assertions marked "was" are the ones the migration
 * flipped: the switch answered differently there, and the note says how.
 */

const LOCALES = ['en', 'pl', 'de'];

const identify = (page: CMS.Model.Page.Page | undefined) =>
    page && { id: page.id, locale: page.locale, slug: page.slug, title: page.seo.title };

const slugsOf = (pages: CMS.Model.Page.Page[]) => pages.map((page) => page.slug);

describe('mapPage', () => {
    it('should return the dashboard of the requested locale', () => {
        expect(LOCALES.map((locale) => identify(mapPage('/', locale)))).toEqual([
            { id: '1', locale: 'en', slug: '/', title: 'Dashboard' },
            { id: '1', locale: 'pl', slug: '/', title: 'Strona główna' },
            { id: '1', locale: 'de', slug: '/', title: 'Startseite' },
        ]);
    });

    it('should fall back to the English dashboard for a locale it does not know', () => {
        expect(identify(mapPage('/', 'fr'))).toEqual({ id: '1', locale: 'en', slug: '/', title: 'Dashboard' });
    });

    it('should resolve a localized slug to the page of that slug, whatever locale is requested', () => {
        // a localized slug belongs to one locale, so a slug/locale mismatch still resolves — to the
        // page that owns the slug (`matchOtherLocales`)
        expect(identify(mapPage('/cases', 'pl'))).toEqual({ id: '2', locale: 'en', slug: '/cases', title: 'Cases' });
        expect(identify(mapPage('/zgloszenia', 'en'))).toEqual({
            id: '2',
            locale: 'pl',
            slug: '/zgloszenia',
            title: 'Zgłoszenia',
        });
    });

    it('should return undefined for a slug it does not serve', () => {
        expect(mapPage('/unknown', 'en')).toBeUndefined();
        expect(mapPage('', 'en')).toBeUndefined();
        // a details route needs a non-empty id segment
        expect(mapPage('/cases/', 'en')).toBeUndefined();
    });

    it('should put the concrete id back into the slug of a details page', () => {
        const page = mapPage('/cases/123', 'en');

        expect(identify(page)).toEqual({ id: '3', locale: 'en', slug: '/cases/123', title: 'Ticket Details' });
        expect(page?.updatedAt).toBe('2025-01-01');
    });

    it('should resolve a details page by its slug as well', () => {
        expect(identify(mapPage('/cases/123', 'pl'))).toEqual({
            id: '3',
            locale: 'en',
            slug: '/cases/123',
            title: 'Ticket Details',
        });
    });

    it('should not serve a slug deeper than the route', () => {
        // was: `/cases/.+` matched any depth and the page came back with the slug `/cases/b`, so a
        // nested slug resolved to a page that does not live under it
        expect(mapPage('/cases/a/b', 'en')).toBeUndefined();
    });

    it('should answer the order confirmation slug it was asked about', () => {
        // was: the requested locale won over the requested slug, so an English slug came back as
        // `/potwierdzenie-zamowienia/o-1` under `pl`
        expect(identify(mapPage('/order-confirmation/o-1', 'en'))).toEqual({
            id: 'order-confirmation-1',
            locale: 'en',
            slug: '/order-confirmation/o-1',
            title: 'Order confirmation',
        });
        expect(identify(mapPage('/order-confirmation/o-1', 'pl'))).toEqual({
            id: 'order-confirmation-1',
            locale: 'en',
            slug: '/order-confirmation/o-1',
            title: 'Order confirmation',
        });
        expect(identify(mapPage('/potwierdzenie-zamowienia/o-1', 'pl'))).toEqual({
            id: 'order-confirmation-1',
            locale: 'pl',
            slug: '/potwierdzenie-zamowienia/o-1',
            title: 'Potwierdzenie zamówienia',
        });
    });

    it('should serve the knowledge base pages', () => {
        expect(mapPage('/help-and-support', 'en')?.id).toBe('help-and-support');
        expect(mapPage('/help-and-support/troubleshooting', 'en')?.id).toBe('troubleshooting');
    });

    it.each(LOCALES)('should resolve every slug it lists for %s back to the same page', (locale) => {
        // walks every route of the locale, so that a change here cannot silently drop one of them
        const resolved = getAllPages(locale).map((page) => ({
            slug: page.slug,
            id: mapPage(page.slug, locale)?.id,
            locale: mapPage(page.slug, locale)?.locale,
        }));

        expect(resolved).toEqual(
            getAllPages(locale).map((page) => ({ slug: page.slug, id: page.id, locale: page.locale })),
        );
    });
});

describe('getAllPages', () => {
    it('should return every page of the requested locale that has a real url', () => {
        LOCALES.forEach((locale) => {
            const pages = getAllPages(locale);

            expect(pages).toHaveLength(24);
            expect([...new Set(pages.map((page) => page.locale))]).toEqual([locale]);
        });
    });

    it('should return the same page ids for every locale', () => {
        const [en, pl, de] = LOCALES.map((locale) => getAllPages(locale).map((page) => page.id));

        expect(pl).toEqual(en);
        expect(de).toEqual(en);
    });

    it('should return nothing for a locale it does not know', () => {
        expect(getAllPages('fr')).toEqual([]);
    });

    it('should leave the pages with a dynamic slug out', () => {
        // was: the pattern reached the sitemap verbatim (`SitemapService.getSitemap`), which
        // published `https://host/cases/(.+)` as a URL
        expect(slugsOf(getAllPages('en')).filter((slug) => slug.includes(':') || slug.includes('(.+)'))).toEqual([]);
        expect(slugsOf(getAllPages('en'))).not.toContain('/cases/(.+)');
    });

    it('should list every knowledge base page that mapPage serves', () => {
        // was: the same pages were listed three times by hand and these two had fallen out of the
        // sitemap list while `mapPage` kept serving them
        const slugs = slugsOf(getAllPages('en'));

        expect(slugs).toContain('/help-and-support');
        expect(slugs).toContain('/help-and-support/troubleshooting');
    });
});

describe('getAlternativePages', () => {
    it('should return the localized slugs of a details page', () => {
        expect(getAlternativePages('3', '/cases/123', 'en').map(identify)).toEqual([
            { id: '3', locale: 'en', slug: '/cases/123', title: 'Ticket Details' },
            { id: '3', locale: 'pl', slug: '/zgloszenia/123', title: 'Szczegóły zgłoszenia' },
            { id: '3', locale: 'de', slug: '/faelle/123', title: 'Anfragedetails' },
        ]);
    });

    it('should return the same alternates whichever localized slug is asked for', () => {
        expect(getAlternativePages('3', '/zgloszenia/123', 'pl').map(identify)).toEqual(
            getAlternativePages('3', '/cases/123', 'en').map(identify),
        );
    });

    it('should return one page per locale for a page whose slug is not localized', () => {
        // was: the alternates went through `mapPage(page.slug, locale)`, and a slug shared by every
        // locale (`/`) came back as the requested locale three times, so the hreflang list
        // advertised `en` three times and never `pl` or `de`
        expect(getAlternativePages('1', '/', 'en').map(identify)).toEqual([
            { id: '1', locale: 'en', slug: '/', title: 'Dashboard' },
            { id: '1', locale: 'pl', slug: '/', title: 'Strona główna' },
            { id: '1', locale: 'de', slug: '/', title: 'Startseite' },
        ]);
    });

    it('should return the alternates of every page it serves', () => {
        // was: the product details page (id `21`) was served by `mapPage` and listed by
        // `getAllPages`, but had been forgotten here, so it had no hreflang alternates at all
        expect(mapPage('/products/p-1', 'en')?.id).toBe('21');
        expect(getAlternativePages('21', '/products/p-1', 'en').map((page) => page.slug)).toEqual([
            '/products/p-1',
            '/produkty/p-1',
            '/produkte/p-1',
        ]);
    });

    it('should cover every page of the registry', () => {
        LOCALES.forEach((locale) => {
            getAllPages(locale).forEach((page) => {
                expect(getAlternativePages(page.id, page.slug, locale).map((alternate) => alternate.locale)).toEqual([
                    'en',
                    'pl',
                    'de',
                ]);
            });
        });
    });

    it('should return nothing for an unknown id', () => {
        expect(getAlternativePages('does-not-exist', '/whatever', 'en')).toEqual([]);
    });
});
