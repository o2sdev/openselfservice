import { afterEach, describe, expect, it, vi } from 'vitest';

import {
    areValuesEqual,
    deserializeParamsToFilters,
    filtersToPage,
    isEmptyValue,
    liveUrlParams,
    pageToOffset,
    parseFiltersFromSearchParams,
    replaceUrlParams,
    searchParamsKey,
    serializeFiltersToParams,
} from './use-url-filters.utils';

/**
 * The shape a list block starts from: block-describing keys plus the filters it defaults to. The
 * CMS-driven keys (`status` here) have no default, exactly as in a real block.
 */
interface TicketFilters {
    id: string;
    offset: number;
    limit: number;
    search: string;
    status?: string[];
}

const INITIAL: TicketFilters = { id: 'ticket-list-1', offset: 0, limit: 5, search: '' };

const params = (query: string) => new URLSearchParams(query);

describe('filtersToPage / pageToOffset', () => {
    it('translates between an offset and a 1-based page', () => {
        expect(filtersToPage(0, 5)).toBe(1);
        expect(filtersToPage(5, 5)).toBe(2);
        expect(filtersToPage(12, 5)).toBe(3);

        expect(pageToOffset(1, 5)).toBe(0);
        expect(pageToOffset(3, 5)).toBe(10);
    });

    it('falls back to the first page without a usable limit or page', () => {
        expect(filtersToPage(10, 0)).toBe(1);
        expect(pageToOffset(3, 0)).toBe(0);
        expect(pageToOffset(0, 5)).toBe(0);
        expect(pageToOffset(-2, 5)).toBe(0);
    });

    it('rejects pages that are not whole numbers, so no fractional offset travels on', () => {
        expect(pageToOffset(2.5, 5)).toBe(0);
        expect(pageToOffset(Infinity, 5)).toBe(0);
        expect(pageToOffset(Number.MAX_VALUE, 5)).toBe(0);
        expect(pageToOffset(Number.NaN, 5)).toBe(0);
    });
});

describe('isEmptyValue', () => {
    it('treats a missing value, an empty string and an empty array as no value', () => {
        expect(isEmptyValue(undefined)).toBe(true);
        expect(isEmptyValue('')).toBe(true);
        expect(isEmptyValue([])).toBe(true);
    });

    it('keeps values a user actually chose, zero included', () => {
        expect(isEmptyValue(0)).toBe(false);
        expect(isEmptyValue('OPEN')).toBe(false);
        expect(isEmptyValue(['OPEN'])).toBe(false);
    });
});

describe('areValuesEqual', () => {
    it('compares multi-value filters by contents, not by reference or order', () => {
        expect(areValuesEqual(['A', 'B'], ['B', 'A'])).toBe(true);
        expect(areValuesEqual(['A'], ['A', 'B'])).toBe(false);
        expect(areValuesEqual([], '')).toBe(true);
        expect(areValuesEqual(['A'], '')).toBe(false);
    });

    it('compares single values as they are', () => {
        expect(areValuesEqual('A', 'A')).toBe(true);
        expect(areValuesEqual('A', 'B')).toBe(false);
        expect(areValuesEqual(0, 0)).toBe(true);
    });
});

describe('serializeFiltersToParams', () => {
    it('writes only what differs from the block defaults', () => {
        const result = serializeFiltersToParams(params(''), {
            filters: { ...INITIAL, search: 'pump' },
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(result).toBe('ticket_search=pump');
    });

    it('keeps the block-describing keys out of the URL', () => {
        const result = serializeFiltersToParams(params(''), {
            filters: { ...INITIAL, id: 'other', limit: 50 },
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(result).toBe('');
    });

    it('repeats the key for a multi-value filter', () => {
        const result = serializeFiltersToParams(params(''), {
            filters: { ...INITIAL, status: ['OPEN', 'CLOSED'] },
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(params(result).getAll('ticket_status')).toEqual(['OPEN', 'CLOSED']);
    });

    it('writes pagination as a 1-based page and omits the first one', () => {
        const onPageThree = serializeFiltersToParams(params(''), {
            filters: { ...INITIAL, offset: 10 },
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(onPageThree).toBe('ticket_page=3');

        const onPageOne = serializeFiltersToParams(params(''), {
            filters: { ...INITIAL, offset: 0 },
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(onPageOne).toBe('');
    });

    it('writes the view mode only while it differs from the block default', () => {
        const options = { filters: INITIAL, initialFilters: INITIAL, namespace: 'ticket' } as const;

        expect(serializeFiltersToParams(params(''), { ...options, viewMode: 'grid' })).toBe('ticket_view=grid');
        expect(serializeFiltersToParams(params(''), { ...options, viewMode: 'list' })).toBe('');
        expect(serializeFiltersToParams(params(''), { ...options, viewMode: 'list', defaultViewMode: 'grid' })).toBe(
            'ticket_view=list',
        );
    });

    it('rewrites its own namespace and keeps everything else in the query string', () => {
        const current = params('ticket_search=old&ticket_view=grid&order_status=NEW&utm_source=mail');

        const result = params(
            serializeFiltersToParams(current, {
                filters: { ...INITIAL, search: 'new' },
                initialFilters: INITIAL,
                namespace: 'ticket',
            }),
        );

        expect(result.get('ticket_search')).toBe('new');
        // cleared along with the rest of the namespace, because the new state no longer carries it
        expect(result.get('ticket_view')).toBeNull();
        expect(result.get('order_status')).toBe('NEW');
        expect(result.get('utm_source')).toBe('mail');
    });

    it('without a namespace clears the keys it was told it owns', () => {
        const current = params('category=OLD&utm_source=mail');

        const result = params(
            serializeFiltersToParams(current, {
                filters: { id: 'product-list-1', offset: 0, limit: 12 },
                initialFilters: { id: 'product-list-1', offset: 0, limit: 12 },
                filterKeys: ['category', 'sort'],
            }),
        );

        expect(result.get('category')).toBeNull();
        expect(result.get('utm_source')).toBe('mail');
    });
});

describe('deserializeParamsToFilters', () => {
    it('falls back to the block defaults for an empty query string', () => {
        const result = deserializeParamsToFilters(params(''), { initialFilters: INITIAL, namespace: 'ticket' });

        expect(result.filters).toEqual(INITIAL);
        expect(result.viewMode).toBe('list');
        expect(result.hasUrlState).toBe(false);
    });

    it('restores its own namespace and ignores anyone else', () => {
        const result = deserializeParamsToFilters(params('ticket_search=pump&order_status=NEW&utm_source=mail'), {
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(result.filters).toMatchObject({ search: 'pump' });
        expect(result.filters).not.toHaveProperty('status');
        expect(result.filters).not.toHaveProperty('utm_source');
        expect(result.hasUrlState).toBe(true);
    });

    it('restores a multi-select filter as an array even for a single value', () => {
        const result = deserializeParamsToFilters(params('ticket_status=OPEN'), {
            initialFilters: INITIAL,
            namespace: 'ticket',
            multiValueKeys: ['status'],
        });

        expect(result.filters).toMatchObject({ status: ['OPEN'] });
    });

    it('restores a repeated param as an array whatever the config says', () => {
        const result = deserializeParamsToFilters(params('ticket_status=OPEN&ticket_status=CLOSED'), {
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(result.filters).toMatchObject({ status: ['OPEN', 'CLOSED'] });
    });

    it('keeps a numeric default numeric', () => {
        const result = deserializeParamsToFilters(params('ticket_amount=42'), {
            initialFilters: { ...INITIAL, amount: 0 },
            namespace: 'ticket',
        });

        expect(result.filters).toMatchObject({ amount: 42 });
    });

    it('translates a page back into an offset with the block page size', () => {
        const result = deserializeParamsToFilters(params('ticket_page=3'), {
            initialFilters: INITIAL,
            namespace: 'ticket',
        });

        expect(result.filters).toMatchObject({ offset: 10 });
        expect(result.hasUrlState).toBe(true);
    });

    it('stays on the first page for a page that is not a whole number', () => {
        for (const page of ['2.5', 'Infinity', 'nonsense', '-2']) {
            const result = deserializeParamsToFilters(params(`ticket_page=${page}`), {
                initialFilters: INITIAL,
                namespace: 'ticket',
            });

            expect(result.filters, `page ${page}`).toMatchObject({ offset: 0 });
        }
    });

    it('accepts a known view mode and falls back for anything else', () => {
        const options = { initialFilters: INITIAL, namespace: 'ticket' } as const;

        expect(deserializeParamsToFilters(params('ticket_view=grid'), options).viewMode).toBe('grid');
        expect(deserializeParamsToFilters(params('ticket_view=carousel'), options).viewMode).toBe('list');
        expect(deserializeParamsToFilters(params(''), { ...options, defaultViewMode: 'grid' }).viewMode).toBe('grid');
    });

    it('without a namespace picks up the filter keys it was given, and nothing else', () => {
        const initialFilters = { id: 'product-list-1', offset: 0, limit: 12 };

        const withKeys = deserializeParamsToFilters(params('category=TOOLS&utm_source=mail'), {
            initialFilters,
            filterKeys: ['category'],
        });

        expect(withKeys.filters).toMatchObject({ category: 'TOOLS' });
        expect(withKeys.filters).not.toHaveProperty('utm_source');

        const withoutKeys = deserializeParamsToFilters(params('category=TOOLS'), { initialFilters });

        expect(withoutKeys.filters).not.toHaveProperty('category');
        expect(withoutKeys.hasUrlState).toBe(false);
    });

    it('round-trips a filter set through the URL', () => {
        const filters = { ...INITIAL, offset: 10, search: 'pump', status: ['OPEN', 'CLOSED'] };

        const query = serializeFiltersToParams(params(''), {
            filters,
            initialFilters: INITIAL,
            namespace: 'ticket',
            viewMode: 'grid',
        });

        const restored = deserializeParamsToFilters(params(query), {
            initialFilters: INITIAL,
            namespace: 'ticket',
            multiValueKeys: ['status'],
        });

        expect(restored.filters).toEqual(filters);
        expect(restored.viewMode).toBe('grid');
    });
});

describe('parseFiltersFromSearchParams', () => {
    it('reads the keys it was given, stripping the namespace', () => {
        const result = parseFiltersFromSearchParams(
            { ticket_status: 'OPEN', ticket_topic: 'CONTACT_US', utm_source: 'mail' },
            { namespace: 'ticket', keys: ['status', 'topic'] },
        );

        expect(result).toEqual({ status: 'OPEN', topic: 'CONTACT_US' });
    });

    it('ignores params outside its key list and its namespace', () => {
        const result = parseFiltersFromSearchParams(
            { status: 'OPEN', order_status: 'NEW' },
            { namespace: 'ticket', keys: ['status'] },
        );

        expect(result).toEqual({});
    });

    it('keeps a repeated param as an array only for a key that takes several values', () => {
        const options = { namespace: 'ticket', keys: ['status'] };

        expect(
            parseFiltersFromSearchParams(
                { ticket_status: ['OPEN', 'CLOSED'] },
                { ...options, multiValueKeys: ['status'] },
            ),
        ).toEqual({ status: ['OPEN', 'CLOSED'] });

        expect(parseFiltersFromSearchParams({ ticket_status: ['OPEN', 'CLOSED'] }, options)).toEqual({
            status: 'OPEN',
        });
    });

    it('skips params with nothing in them', () => {
        const result = parseFiltersFromSearchParams(
            { status: '', topic: undefined, sort: [] as unknown as string[] },
            { keys: ['status', 'topic', 'sort'] },
        );

        expect(result).toEqual({});
    });

    it('passes a page through for the API to resolve', () => {
        expect(parseFiltersFromSearchParams({ page: '3' }, { keys: [] })).toEqual({ page: 3 });
        expect(parseFiltersFromSearchParams({ ticket_page: '2' }, { namespace: 'ticket', keys: [] })).toEqual({
            page: 2,
        });
    });

    it('drops a page that is not a whole number past the first', () => {
        for (const page of ['1', '2.5', 'Infinity', '1e21', '-2', 'nonsense', '']) {
            expect(parseFiltersFromSearchParams({ page }, { keys: [] }), `page ${page}`).toEqual({});
        }
    });
});

describe('searchParamsKey', () => {
    it('turns params into a stable string, repeated values included', () => {
        expect(searchParamsKey({ category: 'TOOLS', page: '2' })).toBe('category=TOOLS&page=2');
        expect(searchParamsKey({ status: ['OPEN', 'CLOSED'] })).toBe('status=OPEN&status=CLOSED');
    });

    it('skips absent values and handles no params at all', () => {
        expect(searchParamsKey({ category: undefined })).toBe('');
        expect(searchParamsKey()).toBe('');
    });
});

describe('liveUrlParams and replaceUrlParams', () => {
    afterEach(() => {
        vi.unstubAllGlobals();
    });

    it('returns the given snapshot when there is no browser', () => {
        const fallback = params('category=TOOLS');

        expect(liveUrlParams(fallback)).toBe(fallback);
    });

    it('reads the address bar back when there is one', () => {
        vi.stubGlobal('window', { location: { search: '?category=CLOUD', hash: '' } });

        expect(liveUrlParams(params('category=TOOLS')).get('category')).toBe('CLOUD');
    });

    it('writes the query string without navigating, keeping the hash', () => {
        const replaceState = vi.fn();
        vi.stubGlobal('window', { location: { search: '', hash: '#results' }, history: { replaceState } });

        replaceUrlParams('/en/products', 'category=TOOLS');

        expect(replaceState).toHaveBeenCalledWith(null, '', '/en/products?category=TOOLS#results');
    });

    it('drops the question mark when nothing is left to write', () => {
        const replaceState = vi.fn();
        vi.stubGlobal('window', { location: { search: '?category=TOOLS', hash: '' }, history: { replaceState } });

        replaceUrlParams('/en/products', '');

        expect(replaceState).toHaveBeenCalledWith(null, '', '/en/products');
    });

    it('does nothing outside a browser', () => {
        expect(() => replaceUrlParams('/en/products', 'category=TOOLS')).not.toThrow();
    });
});
