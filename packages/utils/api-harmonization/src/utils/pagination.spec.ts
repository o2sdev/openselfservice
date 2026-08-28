import { describe, expect, it } from 'vitest';

import { DEFAULT_LIMIT, resolvePagination } from './pagination';

const OPTIONS = { cmsLimit: 5, defaultLimit: 12 };

describe('resolvePagination', () => {
    describe('limit', () => {
        it('prefers the query, then the CMS config, then the block default', () => {
            expect(resolvePagination({ limit: 20 }, OPTIONS).limit).toBe(20);
            expect(resolvePagination({}, OPTIONS).limit).toBe(5);
            expect(resolvePagination({}, { defaultLimit: 12 }).limit).toBe(12);
        });

        it('falls back to a shared page size for a block that names none', () => {
            expect(resolvePagination({}).limit).toBe(DEFAULT_LIMIT);
            expect(resolvePagination({}, {}).limit).toBe(DEFAULT_LIMIT);
            expect(DEFAULT_LIMIT).toBeGreaterThan(1);
        });

        it('takes a limit arriving as a query string', () => {
            expect(resolvePagination({ limit: '20' as unknown as number }, OPTIONS).limit).toBe(20);
        });

        it('falls back for a limit that cannot be one', () => {
            for (const limit of [0, -5, 'nonsense' as unknown as number]) {
                expect(resolvePagination({ limit }, OPTIONS).limit, `limit ${limit}`).toBe(5);
            }
        });
    });

    describe('offset', () => {
        it('starts at the beginning when the query says nothing', () => {
            expect(resolvePagination({}, OPTIONS).offset).toBe(0);
        });

        it('uses an offset it was given', () => {
            expect(resolvePagination({ offset: 7 }, OPTIONS).offset).toBe(7);
            expect(resolvePagination({ offset: '7' as unknown as number }, OPTIONS).offset).toBe(7);
        });

        it('honours an explicit offset of 0 over a page', () => {
            expect(resolvePagination({ offset: 0, page: 3 }, OPTIONS).offset).toBe(0);
        });

        it('prefers an offset over a page', () => {
            expect(resolvePagination({ offset: 7, page: 3 }, OPTIONS).offset).toBe(7);
        });

        it('resolves a 1-based page with the page size in force', () => {
            expect(resolvePagination({ page: 3 }, OPTIONS).offset).toBe(10);
            expect(resolvePagination({ page: '2' as unknown as number }, OPTIONS).offset).toBe(5);
            expect(resolvePagination({ page: 3, limit: 20 }, OPTIONS).offset).toBe(40);
        });

        it('stays on the first page for a page that is not a whole one past it', () => {
            for (const page of [1, 0, -2, 2.5, Infinity, Number.MAX_VALUE, 'nonsense' as unknown as number]) {
                expect(resolvePagination({ page }, OPTIONS).offset, `page ${page}`).toBe(0);
            }
        });

        it('falls back to the page for an offset that cannot be one', () => {
            for (const offset of ['' as unknown as number, -5, 'nonsense' as unknown as number]) {
                expect(resolvePagination({ offset, page: 3 }, OPTIONS).offset, `offset ${offset}`).toBe(10);
            }
        });
    });
});
