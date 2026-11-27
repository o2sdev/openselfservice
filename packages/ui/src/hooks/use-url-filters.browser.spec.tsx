import React, { act, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { UseUrlFiltersOptions, UseUrlFiltersResult, useUrlFilters } from './use-url-filters';

// Tells React that updates are wrapped in `act`, so it flushes them instead of warning about it.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

/**
 * `useUrlFilters` holds no markup of its own, so it is rendered through a probe component that only
 * exposes what the hook returns. A real browser gives it the address bar the hook reads back.
 */
const renderUrlFilters = <TFilters extends object>(options: UseUrlFiltersOptions<TFilters>) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const root = createRoot(container);
    const published = { current: undefined as unknown as UseUrlFiltersResult<TFilters> };

    // Published from an effect rather than during render: `act` flushes effects before it returns, so
    // the test still reads the value of the render it just triggered.
    const Probe: React.FC = () => {
        const value = useUrlFilters(options);

        useEffect(() => {
            published.current = value;
        }, [value]);

        return null;
    };

    act(() => {
        root.render(<Probe />);
    });

    cleanups.push(() => {
        act(() => {
            root.unmount();
        });
        container.remove();
    });

    return published;
};

const cleanups: Array<() => void> = [];

const INITIAL = { id: 'ticket-list-1', offset: 0, limit: 5, search: '' };

/** Options a list block passes, with the URL writes captured instead of touching the address bar. */
const blockOptions = (query: string) => {
    const onUrlChange = vi.fn();

    return {
        onUrlChange,
        options: {
            initialFilters: INITIAL,
            namespace: 'ticket',
            searchParams: new URLSearchParams(query),
            onUrlChange,
        },
        /** The query string of the most recent write. */
        lastWrite: () => new URLSearchParams(onUrlChange.mock.lastCall?.[0] ?? ''),
    };
};

afterEach(() => {
    cleanups.splice(0).forEach((cleanup) => cleanup());
    window.history.replaceState(null, '', window.location.pathname);
});

describe('useUrlFilters', () => {
    it('starts from the block defaults when the URL says nothing', () => {
        const { options } = blockOptions('');
        const hook = renderUrlFilters(options);

        expect(hook.current.filters).toEqual(INITIAL);
        expect(hook.current.viewMode).toBe('list');
        expect(hook.current.isRestoredFromUrl).toBe(false);
    });

    it('seeds its state from the URL, so a shared link opens filtered', () => {
        const { options } = blockOptions('ticket_search=pump&ticket_page=3&ticket_view=grid');
        const hook = renderUrlFilters({ ...options, multiValueKeys: ['status'] });

        expect(hook.current.filters).toMatchObject({ search: 'pump', offset: 10 });
        expect(hook.current.viewMode).toBe('grid');
        expect(hook.current.isRestoredFromUrl).toBe(true);
    });

    it('writes a filter change into the URL and keeps it in state', () => {
        const { options, lastWrite } = blockOptions('');
        const hook = renderUrlFilters(options);

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
        });

        expect(hook.current.filters).toMatchObject({ search: 'pump' });
        expect(lastWrite().get('ticket_search')).toBe('pump');
    });

    it('takes the block back to its defaults on reset', () => {
        const { options, lastWrite } = blockOptions('ticket_search=pump');
        const hook = renderUrlFilters(options);

        act(() => {
            hook.current.resetFilters();
        });

        expect(hook.current.filters).toEqual(INITIAL);
        expect(lastWrite().toString()).toBe('');
    });

    it('keeps the filters when only the view mode changes', () => {
        const { options, lastWrite } = blockOptions('');
        const hook = renderUrlFilters(options);

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
        });

        act(() => {
            hook.current.setViewMode('grid');
        });

        expect(hook.current.viewMode).toBe('grid');
        expect(lastWrite().get('ticket_search')).toBe('pump');
        expect(lastWrite().get('ticket_view')).toBe('grid');
    });

    it('survives a filter change and a view mode change applied in one batch', () => {
        const { options, lastWrite } = blockOptions('');
        const hook = renderUrlFilters(options);

        // Both setters see the same render, so neither may write the URL from the other's stale value.
        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
            hook.current.setViewMode('grid');
        });

        expect(hook.current.filters).toMatchObject({ search: 'pump' });
        expect(hook.current.viewMode).toBe('grid');
        expect(lastWrite().get('ticket_search')).toBe('pump');
        expect(lastWrite().get('ticket_view')).toBe('grid');
    });

    it('merges into the live URL, not the snapshot it mounted with', () => {
        const { options, lastWrite } = blockOptions('');
        const hook = renderUrlFilters(options);

        // Something else wrote to the address bar after this block mounted — another list block on the
        // same page, whose params must survive this block's next write.
        window.history.replaceState(null, '', `${window.location.pathname}?order_status=NEW`);

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
        });

        expect(lastWrite().get('order_status')).toBe('NEW');
        expect(lastWrite().get('ticket_search')).toBe('pump');
    });

    it('leaves the params of other blocks alone while rewriting its own', () => {
        // The address bar is what a write merges into, so the page state has to live there — a block
        // gets the same string through `useSearchParams` and passes it in as the mount-time snapshot.
        const query = 'ticket_search=old&order_status=NEW';
        window.history.replaceState(null, '', `${window.location.pathname}?${query}`);

        const { options, lastWrite } = blockOptions(query);
        const hook = renderUrlFilters(options);

        expect(hook.current.filters).toMatchObject({ search: 'old' });

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'new' });
        });

        expect(lastWrite().get('ticket_search')).toBe('new');
        expect(lastWrite().get('order_status')).toBe('NEW');
    });

    it('restores unprefixed params for a block that names its filter keys', () => {
        const onUrlChange = vi.fn();
        const initialFilters = { id: 'product-list-1', offset: 0, limit: 12 };

        const hook = renderUrlFilters({
            initialFilters,
            filterKeys: ['category'],
            searchParams: new URLSearchParams('category=TOOLS'),
            onUrlChange,
        });

        expect(hook.current.filters).toMatchObject({ category: 'TOOLS' });
        expect(hook.current.isRestoredFromUrl).toBe(true);

        act(() => {
            hook.current.setFilters({ ...initialFilters, category: 'CLOUD' } as typeof initialFilters);
        });

        expect(new URLSearchParams(onUrlChange.mock.lastCall?.[0]).get('category')).toBe('CLOUD');
    });
});
