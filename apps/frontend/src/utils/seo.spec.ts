import { describe, expect, it } from 'vitest';

import { generateSeo } from './seo';

const SITE_URL = 'https://example.test';

const seo = (searchParams?: Record<string, string | string[] | undefined>) =>
    generateSeo({ locale: 'en', slug: '/products', title: 'Products', searchParams });

const canonical = (searchParams?: Record<string, string | string[] | undefined>) =>
    seo(searchParams).alternates?.canonical;

const robots = (searchParams?: Record<string, string | string[] | undefined>) => seo(searchParams).robots;

describe('generateSeo', () => {
    describe('a page without filters', () => {
        it('is self-canonical and indexable', () => {
            expect(canonical()).toBe(`${SITE_URL}/en/products`);
            expect(robots()).toMatchObject({ index: true, follow: true });
        });

        it('honours the flags the CMS set', () => {
            const result = generateSeo({ locale: 'en', slug: '/products', noIndex: true, noFollow: true });

            expect(result.robots).toMatchObject({ index: false, follow: false });
        });
    });

    describe('an indexable facet', () => {
        it('keeps its own canonical and stays in the index', () => {
            expect(canonical({ category: 'TOOLS' })).toBe(`${SITE_URL}/en/products?category=TOOLS`);
            expect(robots({ category: 'TOOLS' })).toMatchObject({ index: true, follow: true });
        });

        it('encodes a value that needs it', () => {
            expect(canonical({ category: 'hand tools & more' })).toBe(
                `${SITE_URL}/en/products?category=hand%20tools%20%26%20more`,
            );
        });

        it('is a variant, not a page, once it carries several values', () => {
            expect(canonical({ category: ['TOOLS', 'CLOUD'] })).toBe(`${SITE_URL}/en/products`);
            expect(robots({ category: ['TOOLS', 'CLOUD'] })).toMatchObject({ index: false, follow: true });
        });
    });

    describe('params that change the listing', () => {
        it('keeps a deep page or a different order out of the index', () => {
            for (const params of [{ page: '3' }, { sort: 'price_asc' }, { view: 'grid' }]) {
                expect(robots(params), JSON.stringify(params)).toMatchObject({ index: false, follow: true });
            }
        });

        it('canonicalises a deep page of a facet back to the facet itself', () => {
            expect(canonical({ category: 'TOOLS', page: '3' })).toBe(`${SITE_URL}/en/products?category=TOOLS`);
            expect(robots({ category: 'TOOLS', page: '3' })).toMatchObject({ index: false, follow: true });
        });
    });

    describe('params SEO has no opinion about', () => {
        it('ignores tracking params on a bare page', () => {
            const params = { utm_source: 'newsletter', utm_medium: 'email', gclid: 'abc123' };

            expect(canonical(params)).toBe(`${SITE_URL}/en/products`);
            expect(robots(params)).toMatchObject({ index: true, follow: true });
        });

        it('leaves a facet URL indexable and canonical next to them', () => {
            const params = { category: 'TOOLS', utm_source: 'newsletter', tab: 'details' };

            expect(canonical(params)).toBe(`${SITE_URL}/en/products?category=TOOLS`);
            expect(robots(params)).toMatchObject({ index: true, follow: true });
        });

        it("ignores another block's params, which describe a list this page does not index", () => {
            const params = { ticket_status: 'OPEN', ticket_page: '2' };

            expect(canonical(params)).toBe(`${SITE_URL}/en/products`);
            expect(robots(params)).toMatchObject({ index: true, follow: true });
        });
    });

    describe('params with nothing in them', () => {
        it('reads an empty value as absent', () => {
            expect(canonical({ category: '', page: '' })).toBe(`${SITE_URL}/en/products`);
            expect(robots({ category: '', page: '' })).toMatchObject({ index: true, follow: true });
            expect(robots({ category: 'TOOLS', page: '' })).toMatchObject({ index: true, follow: true });
            expect(canonical({ category: 'TOOLS', page: '' })).toBe(`${SITE_URL}/en/products?category=TOOLS`);
        });

        it('reads an empty repeated value as absent', () => {
            expect(canonical({ category: [] })).toBe(`${SITE_URL}/en/products`);
            expect(robots({ category: [] })).toMatchObject({ index: true, follow: true });
        });
    });

    describe('the rest of the metadata', () => {
        it('points Open Graph at the canonical URL', () => {
            expect(seo({ category: 'TOOLS', utm_source: 'x' }).openGraph).toMatchObject({
                url: `${SITE_URL}/en/products?category=TOOLS`,
            });
        });

        it('lists the alternate locales without the filter params', () => {
            const result = generateSeo({
                locale: 'en',
                slug: '/products',
                searchParams: { category: 'TOOLS' },
                translations: ['en', 'pl'],
                alternates: { pl: '/produkty' },
            });

            expect(result.alternates?.languages).toMatchObject({ pl: `${SITE_URL}/pl/produkty` });
        });
    });
});
