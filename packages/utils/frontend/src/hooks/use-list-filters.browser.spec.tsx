import React, { act, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, describe, expect, it } from 'vitest';

import { UseUrlFiltersResult } from '@o2s/ui/hooks/use-url-filters';

import { ListFilterConfig, UseListFiltersOptions, useListFilters } from './use-list-filters';

// Tells React that updates are wrapped in `act`, so it flushes them instead of warning about it.
(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;

const cleanups: Array<() => void> = [];

/** The hook has no markup of its own, so a probe component publishes what it returns. */
const renderListFilters = <TFilters extends object>(options: UseListFiltersOptions<TFilters>) => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    const root = createRoot(container);
    const published = { current: undefined as unknown as UseUrlFiltersResult<TFilters> };

    const Probe: React.FC = () => {
        const value = useListFilters(options);

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

const INITIAL = { id: 'ticket-list-1', offset: 0, limit: 5, search: '' };

/** A filter config as the CMS hands it to a block. */
const CONFIG: ListFilterConfig = {
    items: [
        { __typename: 'FilterToggleGroup', id: 'status', allowMultiple: true },
        { __typename: 'FilterSelect', id: 'topic', allowMultiple: true },
        { __typename: 'FilterViewModeToggle', id: 'viewMode', value: 'grid' },
    ],
};

/** The block's own two reads from `next/navigation`, which the hook takes as input. */
const location = (query: string) => ({
    pathname: window.location.pathname,
    searchParams: new URLSearchParams(query),
});

const currentParams = () => new URLSearchParams(window.location.search);

afterEach(() => {
    cleanups.splice(0).forEach((cleanup) => cleanup());
    window.history.replaceState(null, '', window.location.pathname);
});

describe('useListFilters', () => {
    it('writes a prefixed param for a block that has a namespace', () => {
        const hook = renderListFilters({ initialFilters: INITIAL, namespace: 'ticket', ...location('') });

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
        });

        expect(currentParams().get('ticket_search')).toBe('pump');
    });

    it('restores and writes plain params for a block without one', () => {
        const initialFilters = { id: 'product-list-1', offset: 0, limit: 12 };
        const config: ListFilterConfig = { items: [{ __typename: 'FilterSelect', id: 'category' }] };

        const hook = renderListFilters({
            initialFilters,
            filterConfig: config,
            ...location('category=TOOLS'),
        });

        expect(hook.current.filters).toMatchObject({ category: 'TOOLS' });

        act(() => {
            hook.current.setFilters({ ...initialFilters, category: 'CLOUD' } as typeof initialFilters);
        });

        expect(currentParams().get('category')).toBe('CLOUD');
    });

    it('restores a toggle group as an array and a select as a single value', () => {
        const hook = renderListFilters({
            initialFilters: INITIAL,
            namespace: 'ticket',
            filterConfig: CONFIG,
            ...location('ticket_status=OPEN&ticket_topic=CONTACT_US'),
        });

        expect(hook.current.filters).toMatchObject({ status: ['OPEN'], topic: 'CONTACT_US' });
    });

    it('starts in the view mode the filter config names', () => {
        const hook = renderListFilters({
            initialFilters: INITIAL,
            namespace: 'ticket',
            filterConfig: CONFIG,
            ...location(''),
        });

        expect(hook.current.viewMode).toBe('grid');
    });

    it('falls back to the given view mode when the config carries no toggle', () => {
        const hook = renderListFilters({
            initialFilters: INITIAL,
            namespace: 'ticket',
            filterConfig: { items: [{ __typename: 'FilterSelect', id: 'topic' }] },
            defaultViewMode: 'grid',
            ...location(''),
        });

        expect(hook.current.viewMode).toBe('grid');
    });

    it('lets the URL override the view mode from the config', () => {
        const hook = renderListFilters({
            initialFilters: INITIAL,
            namespace: 'ticket',
            filterConfig: CONFIG,
            ...location('ticket_view=list'),
        });

        expect(hook.current.viewMode).toBe('list');
    });

    it('writes without navigating, so filtering adds no history entry', () => {
        const hook = renderListFilters({ initialFilters: INITIAL, namespace: 'ticket', ...location('') });
        const before = window.history.length;

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
        });

        expect(window.history.length).toBe(before);
        expect(currentParams().get('ticket_search')).toBe('pump');
    });

    it('keeps params of other blocks and of the page', () => {
        window.history.replaceState(null, '', `${window.location.pathname}?order_status=NEW&tab=details`);

        const hook = renderListFilters({
            initialFilters: INITIAL,
            namespace: 'ticket',
            ...location('order_status=NEW&tab=details'),
        });

        act(() => {
            hook.current.setFilters({ ...INITIAL, search: 'pump' });
        });

        expect(currentParams().get('order_status')).toBe('NEW');
        expect(currentParams().get('tab')).toBe('details');
        expect(currentParams().get('ticket_search')).toBe('pump');
    });
});
