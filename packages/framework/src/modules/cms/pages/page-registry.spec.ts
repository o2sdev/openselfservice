import { describe, expect, it } from 'vitest';

import { PageTemplate } from '../models/page.model';

import { PageDefinitionInput, createPageRegistry, definePage } from './page-registry';

const TEMPLATE: PageTemplate = {
    __typename: 'OneColumnTemplate',
    slots: { main: [{ __typename: 'FaqBlock', id: 'faq-1' }] },
};

const page = (definition: Partial<PageDefinitionInput> & Pick<PageDefinitionInput, 'id' | 'locales'>) =>
    definePage({ template: TEMPLATE, ...definition });

const ticketList = page({
    id: '2',
    locales: {
        en: { slug: '/cases', seo: { title: 'Cases' } },
        pl: { slug: '/zgloszenia', seo: { title: 'Zgłoszenia' } },
        de: { slug: '/faelle', seo: { title: 'Fälle' } },
    },
});

const ticketDetails = page({
    id: '3',
    parent: ticketList,
    hasOwnTitle: true,
    roles: ['ORG_USER'],
    updatedAt: '2025-01-01',
    locales: {
        en: { slug: '/cases/:id', seo: { title: 'Ticket details' } },
        pl: { slug: '/zgloszenia/:id', seo: { title: 'Szczegóły zgłoszenia' } },
        de: { slug: '/faelle/:id', seo: { title: 'Anfragedetails' } },
    },
});

const dashboard = page({
    id: '1',
    locales: {
        en: { slug: '/', seo: { title: 'Dashboard' } },
        pl: { slug: '/', seo: { title: 'Strona główna' } },
        de: { slug: '/', seo: { title: 'Startseite' } },
    },
});

const ticketArchive = page({
    id: '4',
    locales: { en: { slug: '/cases/archive', seo: { title: 'Archive' } } },
});

const registry = createPageRegistry([dashboard, ticketList, ticketDetails, ticketArchive]);

const identify = (found: { id: string; locale: string; slug: string; seo: { title: string } } | undefined) =>
    found && { id: found.id, locale: found.locale, slug: found.slug, title: found.seo.title };

describe('definePage', () => {
    it('should compile one route per locale, in declaration order', () => {
        expect(ticketDetails.routes.map((route) => [route.locale, route.pattern, route.params])).toEqual([
            ['en', '/cases/:id', ['id']],
            ['pl', '/zgloszenia/:id', ['id']],
            ['de', '/faelle/:id', ['id']],
        ]);
    });

    it('should compile the root slug into a route without segments', () => {
        expect(dashboard.routes[0]?.segments).toEqual([]);
    });

    it('should reject a definition without an id', () => {
        expect(() => page({ id: '', locales: { en: { slug: '/', seo: { title: 'X' } } } })).toThrow(/needs an id/);
    });

    it('should reject a definition without a locale', () => {
        expect(() => page({ id: 'x', locales: {} })).toThrow(/at least one locale/);
    });

    it('should reject a slug that does not start with a slash', () => {
        expect(() => page({ id: 'x', locales: { en: { slug: 'cases', seo: { title: 'X' } } } })).toThrow(
            /has to start with "\/"/,
        );
    });

    it('should reject a slug with an empty segment', () => {
        expect(() => page({ id: 'x', locales: { en: { slug: '/cases/', seo: { title: 'X' } } } })).toThrow(
            /empty segment/,
        );
    });

    it('should reject an invalid param name', () => {
        expect(() => page({ id: 'x', locales: { en: { slug: '/cases/:', seo: { title: 'X' } } } })).toThrow(
            /invalid param/,
        );
    });

    it('should reject a slug that repeats a param', () => {
        expect(() => page({ id: 'x', locales: { en: { slug: '/cases/:id/:id', seo: { title: 'X' } } } })).toThrow(
            /repeats the param ":id"/,
        );
    });

    it('should reject a locale whose slug drops a param the other locales declare', () => {
        expect(() =>
            page({
                id: 'x',
                locales: {
                    en: { slug: '/cases/:id', seo: { title: 'X' } },
                    pl: { slug: '/zgloszenia', seo: { title: 'X' } },
                },
            }),
        ).toThrow(/declares the params \[\] while the en one declares \[id\]/);
    });

    it('should reject a parent that does not cover every locale of its child', () => {
        expect(() =>
            page({
                id: 'x',
                parent: ticketArchive,
                locales: {
                    en: { slug: '/cases/archive/:id', seo: { title: 'X' } },
                    pl: { slug: '/zgloszenia/archiwum/:id', seo: { title: 'X' } },
                },
            }),
        ).toThrow(/missing the locale\(s\) pl/);
    });

    it('should reject a parent whose slug needs a param the page does not declare', () => {
        // the breadcrumb renders the parent slug out of the params of the page, so a param only
        // the parent declares would show up in the breadcrumb as `:caseId`
        const comments = page({
            id: 'comments',
            parent: ticketDetails,
            locales: {
                en: { slug: '/cases/:id/comments/:comment', seo: { title: 'Comments' } },
                pl: { slug: '/zgloszenia/:id/komentarze/:comment', seo: { title: 'Komentarze' } },
                de: { slug: '/faelle/:id/kommentare/:comment', seo: { title: 'Kommentare' } },
            },
        });

        expect(comments.routes[0]?.params).toEqual(['id', 'comment']);

        const renamed = page({
            id: 'renamed',
            locales: {
                en: { slug: '/cases/:caseId', seo: { title: 'Renamed' } },
                pl: { slug: '/zgloszenia/:caseId', seo: { title: 'Renamed' } },
                de: { slug: '/faelle/:caseId', seo: { title: 'Renamed' } },
            },
        });

        expect(() =>
            page({
                id: 'x',
                parent: renamed,
                locales: {
                    en: { slug: '/cases/:id/comments', seo: { title: 'Comments' } },
                    pl: { slug: '/zgloszenia/:id/komentarze', seo: { title: 'Komentarze' } },
                    de: { slug: '/faelle/:id/kommentare', seo: { title: 'Kommentare' } },
                },
            }),
        ).toThrow(/its parent "renamed" needs the param\(s\) caseId, which this page does not declare/);
    });

    it('should reject a parent chain deeper than the model allows', () => {
        const first = page({ id: 'p1', locales: { en: { slug: '/a', seo: { title: 'A' } } } });
        const second = page({ id: 'p2', parent: first, locales: { en: { slug: '/a/b', seo: { title: 'B' } } } });
        const third = page({ id: 'p3', parent: second, locales: { en: { slug: '/a/b/c', seo: { title: 'C' } } } });
        const fourth = page({ id: 'p4', parent: third, locales: { en: { slug: '/a/b/c/d', seo: { title: 'D' } } } });

        expect(() =>
            page({ id: 'p5', parent: fourth, locales: { en: { slug: '/a/b/c/d/e', seo: { title: 'E' } } } }),
        ).toThrow(/deeper than 3 pages/);
    });

    it('should reject a parent chain that loops', () => {
        const first = page({ id: 'loop-1', locales: { en: { slug: '/a', seo: { title: 'A' } } } });
        // a cycle can only be built by mutating a definition after the fact
        first.parent = first;

        expect(() =>
            page({ id: 'loop-2', parent: first, locales: { en: { slug: '/a/b', seo: { title: 'B' } } } }),
        ).toThrow(/loops back to "loop-1"/);
    });
});

describe('createPageRegistry', () => {
    it('should reject two definitions sharing an id', () => {
        expect(() => createPageRegistry([ticketList, ticketList])).toThrow(/the id "2" is declared twice/);
    });

    it('should reject two definitions serving the same static slug in one locale', () => {
        const other = page({ id: 'other', locales: { en: { slug: '/cases', seo: { title: 'Other' } } } });

        expect(() => createPageRegistry([ticketList, other])).toThrow(
            /"\/cases" \(en\) of "other" collides with "\/cases" of "2"/,
        );
    });

    it('should reject two definitions whose dynamic slugs match the same paths', () => {
        // the param names differ, the routes do not: whichever came first would win silently
        const other = page({ id: 'other', locales: { en: { slug: '/cases/:number', seo: { title: 'Other' } } } });

        expect(() => createPageRegistry([ticketDetails, other])).toThrow(
            /"\/cases\/:number" \(en\) of "other" collides with "\/cases\/:id" of "3"/,
        );
    });
});

describe('mapPage', () => {
    it('should return the page of the requested locale', () => {
        expect(['en', 'pl', 'de'].map((locale) => identify(registry.mapPage('/', locale)))).toEqual([
            { id: '1', locale: 'en', slug: '/', title: 'Dashboard' },
            { id: '1', locale: 'pl', slug: '/', title: 'Strona główna' },
            { id: '1', locale: 'de', slug: '/', title: 'Startseite' },
        ]);
    });

    it('should fill the params back into the slug', () => {
        expect(identify(registry.mapPage('/zgloszenia/T-1', 'pl'))).toEqual({
            id: '3',
            locale: 'pl',
            slug: '/zgloszenia/T-1',
            title: 'Szczegóły zgłoszenia',
        });
    });

    it('should answer a slug of another locale with the page that owns it', () => {
        expect(identify(registry.mapPage('/zgloszenia', 'en'))).toEqual({
            id: '2',
            locale: 'pl',
            slug: '/zgloszenia',
            title: 'Zgłoszenia',
        });
    });

    it('should not look into the other locales when the fallback is off', () => {
        const strict = createPageRegistry([ticketList], { matchOtherLocales: false });

        expect(strict.mapPage('/cases', 'en')?.locale).toBe('en');
        expect(strict.mapPage('/zgloszenia', 'en')).toBeUndefined();
    });

    it('should prefer a static route over a dynamic one that also matches', () => {
        expect(identify(registry.mapPage('/cases/archive', 'en'))).toEqual({
            id: '4',
            locale: 'en',
            slug: '/cases/archive',
            title: 'Archive',
        });
    });

    it('should match a dynamic segment only within its own path depth', () => {
        expect(registry.mapPage('/cases/T-1/comments', 'en')).toBeUndefined();
        expect(registry.mapPage('/cases/', 'en')).toBeUndefined();
    });

    it('should return undefined for a slug nobody serves', () => {
        expect(registry.mapPage('/unknown', 'en')).toBeUndefined();
        expect(registry.mapPage('', 'en')).toBeUndefined();
        expect(registry.mapPage('cases', 'en')).toBeUndefined();
    });

    it('should return undefined for a locale the registry does not know', () => {
        expect(registry.mapPage('/nothing-here', 'fr')).toBeUndefined();
    });

    it('should build the whole page out of the definition', () => {
        expect(registry.mapPage('/cases/T-1', 'en')).toEqual({
            id: '3',
            slug: '/cases/T-1',
            locale: 'en',
            template: TEMPLATE,
            createdAt: '',
            updatedAt: '2025-01-01',
            seo: {
                title: 'Ticket details',
                description: '',
                keywords: [],
                noIndex: false,
                noFollow: false,
                image: undefined,
            },
            hasOwnTitle: true,
            roles: ['ORG_USER'],
            theme: undefined,
            redirect: undefined,
            parent: { slug: '/cases', seo: { title: 'Cases' }, parent: undefined },
        });
    });

    it('should resolve the breadcrumb parent in the locale of the page', () => {
        expect(registry.mapPage('/faelle/T-1', 'de')?.parent).toEqual({
            slug: '/faelle',
            seo: { title: 'Fälle' },
            parent: undefined,
        });
    });

    it('should fill the registry defaults into the fields a locale leaves out', () => {
        const withDefaults = createPageRegistry([ticketList], {
            defaults: {
                createdAt: '2024-01-01',
                updatedAt: '2024-06-01',
                seo: { noIndex: true, noFollow: true, description: 'Default', keywords: ['a'] },
            },
        });

        expect(withDefaults.mapPage('/cases', 'en')).toMatchObject({
            createdAt: '2024-01-01',
            updatedAt: '2024-06-01',
            seo: { title: 'Cases', description: 'Default', keywords: ['a'], noIndex: true, noFollow: true },
        });
    });

    it('should let a locale override a default', () => {
        const withDefaults = createPageRegistry(
            [page({ id: 'x', locales: { en: { slug: '/x', seo: { title: 'X', noIndex: true } } } })],
            { defaults: { seo: { noIndex: false } } },
        );

        expect(withDefaults.mapPage('/x', 'en')?.seo.noIndex).toBe(true);
    });
});

describe('themes', () => {
    it('should give every locale the theme of the definition', () => {
        const themed = createPageRegistry([
            page({
                id: 'themed',
                theme: 'business',
                locales: {
                    en: { slug: '/business', seo: { title: 'Business' } },
                    pl: { slug: '/firma', seo: { title: 'Firma' } },
                },
            }),
        ]);

        expect(themed.getAllPages('en')[0]?.theme).toBe('business');
        expect(themed.getAllPages('pl')[0]?.theme).toBe('business');
    });

    it('should let a locale override the theme of the definition', () => {
        const themed = createPageRegistry([
            page({
                id: 'themed',
                theme: 'business',
                locales: {
                    en: { slug: '/business', seo: { title: 'Business' } },
                    pl: { slug: '/firma', seo: { title: 'Firma' }, theme: 'personal' },
                },
            }),
        ]);

        expect(themed.mapPage('/firma', 'pl')?.theme).toBe('personal');
    });
});

describe('matchPage', () => {
    it('should expose the params next to the page instead of hiding them in the slug', () => {
        const match = registry.matchPage('/cases/T-1', 'en');

        expect(match?.definition.id).toBe('3');
        expect(match?.locale).toBe('en');
        expect(match?.params).toEqual({ id: 'T-1' });
        expect(match?.page.slug).toBe('/cases/T-1');
    });
});

describe('getAllPages', () => {
    it('should return every page of the locale, in declaration order', () => {
        expect(registry.getAllPages('en').map((found) => found.slug)).toEqual([
            '/',
            '/cases',
            '/cases/:id',
            '/cases/archive',
        ]);
    });

    it('should skip a page that does not declare the locale', () => {
        expect(registry.getAllPages('pl').map((found) => found.slug)).toEqual(['/', '/zgloszenia', '/zgloszenia/:id']);
    });

    it('should return nothing for a locale the registry does not know', () => {
        expect(registry.getAllPages('fr')).toEqual([]);
    });

    it('should be able to leave the dynamic pages out, for consumers that need real urls', () => {
        expect(registry.getAllPages('en', { includeDynamic: false }).map((found) => found.slug)).toEqual([
            '/',
            '/cases',
            '/cases/archive',
        ]);
    });
});

describe('getAlternativePages', () => {
    it('should return the page in each of its locales, with the params carried over', () => {
        expect(registry.getAlternativePages('3', '/cases/T-1', 'en').map(identify)).toEqual([
            { id: '3', locale: 'en', slug: '/cases/T-1', title: 'Ticket details' },
            { id: '3', locale: 'pl', slug: '/zgloszenia/T-1', title: 'Szczegóły zgłoszenia' },
            { id: '3', locale: 'de', slug: '/faelle/T-1', title: 'Anfragedetails' },
        ]);
    });

    it('should return the same alternates whichever localized slug is asked for', () => {
        expect(registry.getAlternativePages('3', '/faelle/T-1', 'de').map(identify)).toEqual(
            registry.getAlternativePages('3', '/cases/T-1', 'en').map(identify),
        );
    });

    it('should return one page per locale for a slug shared by every locale', () => {
        expect(registry.getAlternativePages('1', '/', 'en').map(identify)).toEqual([
            { id: '1', locale: 'en', slug: '/', title: 'Dashboard' },
            { id: '1', locale: 'pl', slug: '/', title: 'Strona główna' },
            { id: '1', locale: 'de', slug: '/', title: 'Startseite' },
        ]);
    });

    it('should keep the pattern when the slug carries no params to read', () => {
        expect(registry.getAlternativePages('3', '/cases', 'en').map((found) => found.slug)).toEqual([
            '/cases/:id',
            '/zgloszenia/:id',
            '/faelle/:id',
        ]);
    });

    it('should return nothing for an unknown id', () => {
        expect(registry.getAlternativePages('does-not-exist', '/cases', 'en')).toEqual([]);
    });
});

describe('getPageDefinition', () => {
    it('should return the definition behind an id', () => {
        expect(registry.getPageDefinition('3')).toBe(ticketDetails);
        expect(registry.getPageDefinition('nope')).toBeUndefined();
    });
});
