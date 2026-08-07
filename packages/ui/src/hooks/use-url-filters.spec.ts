import { describe, expect, it } from 'vitest';

import { parseUrlFilters, parseUrlViewMode, serializeUrlFilters } from './use-url-filters';

describe('use-url-filters utilities', () => {
    it('parses namespaced filters and 1-based page values from URL params', () => {
        const initialFilters = {
            id: 'ticket-list',
            offset: 0,
            limit: 5,
            search: '',
            status: [] as string[],
        };
        const searchParams = new URLSearchParams(
            'tickets_search=refund&tickets_status=open&tickets_status=pending&tickets_page=3&tickets_view=grid',
        );

        expect(parseUrlFilters({ namespace: 'tickets', initialFilters, searchParams })).toEqual({
            id: 'ticket-list',
            limit: 5,
            offset: 10,
            search: 'refund',
            status: ['open', 'pending'],
        });
        expect(parseUrlViewMode({ namespace: 'tickets', initialViewMode: 'list', searchParams })).toBe('grid');
    });

    it('serializes only non-default values and preserves unrelated query params', () => {
        const initialFilters = {
            id: 'ticket-list',
            offset: 0,
            limit: 5,
            search: '',
            status: [] as string[],
        };
        const searchParams = new URLSearchParams('locale=en&orders_page=2&tickets_search=old');

        const result = serializeUrlFilters({
            namespace: 'tickets',
            initialFilters,
            filters: {
                ...initialFilters,
                offset: 5,
                search: 'refund',
                status: ['open', 'pending'],
            },
            viewMode: 'grid',
            defaultViewMode: 'list',
            searchParams,
        });

        expect(result).toBe(
            [
                'locale=en',
                'orders_page=2',
                'tickets_page=2',
                'tickets_search=refund',
                'tickets_status=open',
                'tickets_status=pending',
                'tickets_view=grid',
            ].join('&'),
        );
    });

    it('removes namespaced params when filters return to defaults', () => {
        const initialFilters = {
            id: 'product-list',
            offset: 0,
            limit: 12,
            category: '',
        };
        const searchParams = new URLSearchParams('products_page=4&products_category=coffee&keep=true');

        const result = serializeUrlFilters({
            namespace: 'products',
            initialFilters,
            filters: initialFilters,
            viewMode: 'list',
            defaultViewMode: 'list',
            searchParams,
        });

        expect(result).toBe('keep=true');
    });

    it('parses optional filter keys that are not present in initial values', () => {
        const initialFilters = {
            id: 'product-list',
            offset: 0,
            limit: 12,
        };
        const searchParams = new URLSearchParams('products_category=coffee&products_sort=name');

        expect(
            parseUrlFilters({
                namespace: 'products',
                initialFilters,
                filterKeys: ['id', 'offset', 'limit', 'category', 'sort'],
                searchParams,
            }),
        ).toEqual({
            id: 'product-list',
            offset: 0,
            limit: 12,
            category: 'coffee',
            sort: 'name',
        });
    });
});
