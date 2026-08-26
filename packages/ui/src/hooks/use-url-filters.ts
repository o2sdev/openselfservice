'use client';

import { useCallback, useState } from 'react';

import {
    DEFAULT_EXCLUDED_KEYS,
    ViewMode,
    deserializeParamsToFilters,
    liveUrlParams,
    serializeFiltersToParams,
} from './use-url-filters.utils';

export { replaceUrlParams } from './use-url-filters.utils';

export interface UseUrlFiltersOptions<TFilters extends object> {
    /** Block defaults. Values matching them are never written to the URL. */
    initialFilters: TFilters;
    /** Param prefix, e.g. `ticket` produces `?ticket_status=OPEN`. Required to keep two blocks on one page apart. */
    namespace?: string;
    /** Keys to keep out of the URL. Defaults to `id` and `limit`, which describe the block, not the filters. */
    excludeKeys?: readonly string[];
    /** Keys of multi-select filters, so a single URL value is restored as an array rather than a string. */
    multiValueKeys?: readonly string[];
    /** Query params of the current location, read on mount and used as a fallback when writing. */
    searchParams: URLSearchParams;
    /** Called with the next query string whenever filters change. Blocks wire this to `replaceUrlParams`. */
    onUrlChange: (params: string) => void;
    /** View mode used when the URL says nothing. Omitted from the URL while it is the active one. */
    defaultViewMode?: ViewMode;
}

export interface UseUrlFiltersResult<TFilters extends object> {
    filters: TFilters;
    setFilters: (filters: TFilters) => void;
    resetFilters: () => void;
    viewMode: ViewMode;
    setViewMode: (viewMode: ViewMode) => void;
    /** True when the URL already carried filters for this namespace on mount, so the block should refetch. */
    isRestoredFromUrl: boolean;
}

/**
 * Keeps list block filter state in sync with the URL query string.
 *
 * A drop-in replacement for `useState(initialFilters)`: state is seeded from the URL on mount and
 * every change is pushed back into it. Writing the URL is injected rather than imported, so the hook
 * stays free of `next/navigation` and can be used (and tested) outside a Next.js tree.
 *
 * The URL is read once, on mount. Filter changes are expected to be written with `replaceUrlParams`,
 * which neither adds history entries nor navigates, so there is no later URL change to read back.
 */
export const useUrlFilters = <TFilters extends object>({
    initialFilters,
    namespace,
    excludeKeys = DEFAULT_EXCLUDED_KEYS,
    multiValueKeys,
    searchParams,
    onUrlChange,
    defaultViewMode = 'list',
}: UseUrlFiltersOptions<TFilters>): UseUrlFiltersResult<TFilters> => {
    const [state, setState] = useState(() => {
        const restored = deserializeParamsToFilters(searchParams, {
            initialFilters,
            namespace,
            excludeKeys,
            multiValueKeys,
            defaultViewMode,
        });

        return {
            filters: restored.filters,
            viewMode: restored.viewMode,
            isRestoredFromUrl: restored.hasUrlState,
        };
    });

    // Merged into the live query string rather than into `searchParams`, which is only a snapshot of
    // the render this callback was created in and may already be behind the address bar.
    const writeUrl = useCallback(
        (filters: TFilters, viewMode: ViewMode) => {
            onUrlChange(
                serializeFiltersToParams(liveUrlParams(searchParams), {
                    filters,
                    initialFilters,
                    namespace,
                    excludeKeys,
                    viewMode,
                    defaultViewMode,
                }),
            );
        },
        [searchParams, onUrlChange, initialFilters, namespace, excludeKeys, defaultViewMode],
    );

    const setFilters = useCallback(
        (filters: TFilters) => {
            setState((state) => ({ ...state, filters }));
            writeUrl(filters, state.viewMode);
        },
        [state.viewMode, writeUrl],
    );

    const resetFilters = useCallback(() => {
        setState((state) => ({ ...state, filters: initialFilters }));
        writeUrl(initialFilters, state.viewMode);
    }, [initialFilters, state.viewMode, writeUrl]);

    const setViewMode = useCallback(
        (viewMode: ViewMode) => {
            setState((state) => ({ ...state, viewMode }));
            writeUrl(state.filters, viewMode);
        },
        [state.filters, writeUrl],
    );

    return {
        filters: state.filters,
        setFilters,
        resetFilters,
        viewMode: state.viewMode,
        setViewMode,
        isRestoredFromUrl: state.isRestoredFromUrl,
    };
};
