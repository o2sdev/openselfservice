import { describe, expect, it } from 'vitest';

import { CMS } from '@o2s/framework/modules';

import { getAllPages, getAlternativePages, mapPage } from './cms.page.mapper';

/**
 * The registry that replaced the hand-written switch of this mapper. The assertions marked "was"
 * describe what the switch answered before the migration.
 */

const LOCALES = ['en', 'pl', 'de'];

const identify = (page: CMS.Model.Page.Page | undefined) =>
    page && { id: page.id, locale: page.locale, slug: page.slug, title: page.seo.title };

describe('mapPage', () => {
    it('should return the home page of the requested locale, with its redirect', () => {
        expect(LOCALES.map((locale) => mapPage('/', locale)?.redirect)).toEqual([
            '/personal',
            '/indywidualny',
            '/personlich',
        ]);
    });

    it('should give the home page an id of its own', () => {
        // was: the home page and `/personal` both carried `personal-1`, so the sitemap grouped them
        // into one entry and each of them advertised the other one as its localized alternate
        expect(mapPage('/', 'en')?.id).toBe('home-1');
        expect(mapPage('/personal', 'en')?.id).toBe('personal-1');
    });

    it('should resolve a nested slug in every locale', () => {
        expect(
            [
                '/personal/accounts/savings-account',
                '/indywidualny/konta/konto-oszczednosciowe',
                '/personlich/konten/sparen-konto',
            ].map((slug, index) => identify(mapPage(slug, LOCALES[index]!))),
        ).toEqual([
            {
                id: 'personal-accounts-savings-account-1',
                locale: 'en',
                slug: '/personal/accounts/savings-account',
                title: 'Savings Account',
            },
            {
                id: 'personal-accounts-savings-account-1',
                locale: 'pl',
                slug: '/indywidualny/konta/konto-oszczednosciowe',
                title: 'Konto Oszczędnościowe',
            },
            {
                id: 'personal-accounts-savings-account-1',
                locale: 'de',
                slug: '/personlich/konten/sparen-konto',
                title: 'Sparen Konto',
            },
        ]);
    });

    it('should carry the theme of the page into every locale', () => {
        expect(mapPage('/personal/cards', 'en')?.theme).toBe('personal');
        expect(mapPage('/geschaftlich/karten', 'de')?.theme).toBe('business');
    });

    it('should build the breadcrumb out of the pages it points at', () => {
        // was: the chain was repeated by hand in every locale of every page, and the copies had
        // drifted — the German ones said "Geschäftlich" and "Personlich" while the pages they
        // pointed at were titled "Geschäft" and "Persönlich"
        expect(mapPage('/geschaftlich/konten/standard', 'de')?.parent).toEqual({
            slug: '/geschaftlich/konten',
            seo: { title: 'Konten' },
            parent: { slug: '/geschaftlich', seo: { title: 'Geschäft' }, parent: undefined },
        });
    });

    it('should give a page its breadcrumb in every locale', () => {
        // was: `/personal/accounts` declared its parent in English only
        expect(LOCALES.map((locale) => mapPage(mapPageSlug(locale), locale)?.parent?.seo.title)).toEqual([
            'Personal',
            'Indywidualny',
            'Persönlich',
        ]);
    });

    it('should return undefined for a slug it does not serve', () => {
        expect(mapPage('/nope', 'en')).toBeUndefined();
        expect(mapPage('/personal/accounts/nope', 'en')).toBeUndefined();
    });
});

const mapPageSlug = (locale: string) =>
    ({ en: '/personal/accounts', pl: '/indywidualny/konta', de: '/personlich/konten' })[locale]!;

describe('getAllPages', () => {
    it('should list every page of the requested locale', () => {
        // was: 12 of the 22 pages were listed, so the rest never reached the sitemap
        LOCALES.forEach((locale) => {
            const pages = getAllPages(locale);

            expect(pages).toHaveLength(22);
            expect([...new Set(pages.map((page) => page.locale))]).toEqual([locale]);
        });
    });

    it('should return nothing for a locale it does not know', () => {
        expect(getAllPages('fr')).toEqual([]);
    });

    it.each(LOCALES)('should resolve every slug it lists for %s back to the same page', (locale) => {
        const resolved = getAllPages(locale).map((page) => mapPage(page.slug, locale)?.id);

        expect(resolved).toEqual(getAllPages(locale).map((page) => page.id));
    });
});

describe('getAlternativePages', () => {
    it('should return the localized slugs of a page', () => {
        expect(getAlternativePages('personal-cards-1', '/personal/cards', 'en').map(identify)).toEqual([
            { id: 'personal-cards-1', locale: 'en', slug: '/personal/cards', title: 'Cards' },
            { id: 'personal-cards-1', locale: 'pl', slug: '/indywidualny/karty', title: 'Karty' },
            { id: 'personal-cards-1', locale: 'de', slug: '/personlich/karten', title: 'Karten' },
        ]);
    });

    it('should cover every page of the registry', () => {
        // was: the alternates came from a hand-kept list that had 12 of the 22 pages
        LOCALES.forEach((locale) => {
            getAllPages(locale).forEach((page) => {
                expect(getAlternativePages(page.id, page.slug, locale)).toHaveLength(LOCALES.length);
            });
        });
    });

    it('should return nothing for an unknown id', () => {
        expect(getAlternativePages('does-not-exist', '/personal', 'en')).toEqual([]);
    });
});
