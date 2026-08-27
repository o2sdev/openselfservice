'use client';

import { useCallback, useMemo } from 'react';

import { UseUrlFiltersResult, replaceUrlParams, useUrlFilters } from '@o2s/ui/hooks/use-url-filters';
import { ViewMode } from '@o2s/ui/hooks/use-url-filters.utils';

/** Just enough of a block's CMS filter config to derive its URL behaviour from. */
export interface ListFilterConfig {
    items?: ReadonlyArray<{
        __typename: string;
        id?: unknown;
        allowMultiple?: boolean;
        value?: string;
    }>;
}

export interface UseListFiltersOptions<TFilters extends object> {
    /** Block defaults. Values matching them are never written to the URL. */
    initialFilters: TFilters;
    /**
     * The block's CMS filter config. Which filters take several values and which view mode the block
     * starts in are read from it, so a block does not restate what the CMS already says.
     */
    filterConfig?: ListFilterConfig;
    /**
     * Param prefix, e.g. `order` produces `?order_status=NEW`, so several list blocks can share a page.
     * Left out by a list whose URLs are public and linkable, which names its filter keys instead.
     */
    namespace?: string;
    /** View mode to fall back on when the filter config carries no view mode toggle. */
    defaultViewMode?: ViewMode;
    /** `usePathname()` of the page the block sits on. */
    pathname: string;
    /** `useSearchParams()` of the current request. Only its string form is used. */
    searchParams: { toString: () => string };
}

/**
 * Wires a list block's filters to the URL: the same handful of derivations every list block needs
 * around `useUrlFilters`, which is deliberately framework-agnostic and therefore takes them as input.
 *
 * Only the two values that come from `next/navigation` stay with the block, so this package needs no
 * dependency on Next.
 */
export const useListFilters = <TFilters extends object>({
    initialFilters,
    filterConfig,
    namespace,
    defaultViewMode = 'list',
    pathname,
    searchParams,
}: UseListFiltersOptions<TFilters>): UseUrlFiltersResult<TFilters> => {
    const searchParamsString = searchParams.toString();
    const urlSearchParams = useMemo(() => new URLSearchParams(searchParamsString), [searchParamsString]);

    // Written with the History API, not `router.replace`: the block fetches its own data, so a filter
    // change must not trigger an RSC navigation that re-renders the whole page.
    const onUrlChange = useCallback((params: string) => replaceUrlParams(pathname, params), [pathname]);

    const items = filterConfig?.items;

    // Toggle groups must be restored from the URL as arrays: they iterate the value, and a string would
    // be walked character by character. A select is single-value whatever the CMS config says (it writes
    // one string back), so handing it an array only trips React's <select> check.
    const multiValueKeys = useMemo(
        () =>
            (items ?? [])
                .filter((item) => item.__typename === 'FilterToggleGroup' && item.allowMultiple)
                .map((item) => String(item.id)),
        [items],
    );

    // Without a namespace these keys are the only way to tell the block's params from anything else in
    // the query string, so a public list gets plain, linkable ones (`?category=TOOLS`).
    const filterKeys = useMemo(
        () =>
            namespace
                ? undefined
                : (items ?? [])
                      .filter((item) => item.__typename !== 'FilterViewModeToggle')
                      .map((item) => String(item.id)),
        [items, namespace],
    );

    const viewModeFromConfig = useMemo(() => {
        const value = items?.find((item) => item.__typename === 'FilterViewModeToggle')?.value;

        return value === 'grid' || value === 'list' ? value : defaultViewMode;
    }, [items, defaultViewMode]);

    return useUrlFilters({
        initialFilters,
        namespace,
        multiValueKeys,
        filterKeys,
        defaultViewMode: viewModeFromConfig,
        searchParams: urlSearchParams,
        onUrlChange,
    });
};
