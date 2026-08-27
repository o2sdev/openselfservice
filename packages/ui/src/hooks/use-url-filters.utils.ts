/**
 * Serialization helpers behind `useUrlFilters`.
 *
 * URL contract:
 * - params are namespaced per block when a `namespace` is given: `{ns}_key=value`, so several list
 *   blocks can live on one page; a block that wants plain, linkable params (a public, indexed list)
 *   omits it and names its filter keys instead
 * - `{ns}_` below therefore stands for the prefix or for nothing at all
 * - multi-value filters repeat the key: `{ns}_status=OPEN&{ns}_status=PENDING`
 * - pagination is 1-based and human readable: `{ns}_page=2` (translated to/from `offset`)
 * - view mode is `{ns}_view=grid` and is omitted while it matches the block default
 * - only values differing from the block defaults are written, so URLs stay short
 */

export type FilterValue = string | number | string[];

export type FiltersRecord = Record<string, FilterValue | undefined>;

export type ViewMode = 'list' | 'grid';

/** Keys describing the block itself rather than a user filter. Never written to the URL. */
export const DEFAULT_EXCLUDED_KEYS = ['id', 'limit'] as const;

export const PAGE_KEY = 'page';
export const VIEW_KEY = 'view';
export const OFFSET_KEY = 'offset';
export const LIMIT_KEY = 'limit';

const VIEW_MODES: readonly ViewMode[] = ['list', 'grid'];

export const prefixKey = (key: string, namespace?: string): string => (namespace ? `${namespace}_${key}` : key);

/** Converts an `offset`/`limit` pair into a 1-based page number. */
export const filtersToPage = (offset = 0, limit = 0): number => {
    if (limit <= 0 || offset <= 0) {
        return 1;
    }

    return Math.floor(offset / limit) + 1;
};

/**
 * Converts a 1-based page number back into an `offset`.
 *
 * Only a whole number of pages resolves: a fraction or `Infinity` from a hand-written URL would become
 * an offset that no backend can use, and the first page is the safe reading of an unusable value.
 */
export const pageToOffset = (page: number, limit = 0): number => {
    if (limit <= 0 || !Number.isSafeInteger(page) || page <= 1) {
        return 0;
    }

    return (page - 1) * limit;
};

const toNumber = (value: FilterValue | undefined): number | undefined => {
    const parsed = Number(Array.isArray(value) ? value[0] : value);
    return Number.isFinite(parsed) ? parsed : undefined;
};

/** A filter with no value set: never written to the URL, never counted as active. */
export const isEmptyValue = (value: FilterValue | undefined): boolean =>
    value === undefined || value === null || value === '' || (Array.isArray(value) && value.length === 0);

/** Compares two filter values, multi-value ones by contents rather than by reference. */
export const areValuesEqual = (a: FilterValue | undefined, b: FilterValue | undefined): boolean => {
    if (Array.isArray(a) || Array.isArray(b)) {
        const arrayA = Array.isArray(a) ? [...a].sort() : [];
        const arrayB = Array.isArray(b) ? [...b].sort() : [];
        return arrayA.length === arrayB.length && arrayA.every((value, index) => value === arrayB[index]);
    }

    return a === b;
};

export interface SerializeFiltersOptions<TFilters extends object> {
    filters: TFilters;
    initialFilters: TFilters;
    namespace?: string;
    excludeKeys?: readonly string[];
    /** Filter keys the block owns beyond `initialFilters`, needed to clear them without a namespace. */
    filterKeys?: readonly string[];
    viewMode?: ViewMode;
    defaultViewMode?: ViewMode;
}

/**
 * Turns filter state into a query string, merged into `currentParams`.
 *
 * Params owned by this namespace are rewritten from scratch (so cleared filters disappear), while
 * every other param — another block's namespace, or something the page itself put there — is kept.
 */
export const serializeFiltersToParams = <TFilters extends object>(
    currentParams: URLSearchParams,
    {
        filters,
        initialFilters,
        namespace,
        excludeKeys = DEFAULT_EXCLUDED_KEYS,
        filterKeys = [],
        viewMode,
        defaultViewMode = 'list',
    }: SerializeFiltersOptions<TFilters>,
): string => {
    const params = new URLSearchParams(currentParams.toString());
    const excluded = new Set<string>(excludeKeys);
    const defaults = initialFilters as FiltersRecord;
    const current = filters as FiltersRecord;

    // With a namespace every prefixed param is ours, so clearing by prefix also removes filters that
    // are no longer part of the state (CMS-driven keys have no default to enumerate them from).
    // Without one, only keys we know about can safely be touched.
    const ownedKeys = namespace
        ? [...params.keys()].filter((key) => key.startsWith(`${namespace}_`))
        : [
              PAGE_KEY,
              VIEW_KEY,
              ...[...Object.keys(initialFilters), ...Object.keys(filters), ...filterKeys].filter(
                  (key) => !excluded.has(key) && key !== OFFSET_KEY,
              ),
          ];

    new Set(ownedKeys).forEach((key) => params.delete(key));

    for (const [key, value] of Object.entries(current)) {
        if (excluded.has(key) || key === OFFSET_KEY || isEmptyValue(value)) {
            continue;
        }

        if (areValuesEqual(value, defaults[key])) {
            continue;
        }

        const paramKey = prefixKey(key, namespace);

        if (Array.isArray(value)) {
            value.forEach((entry) => params.append(paramKey, entry));
        } else {
            params.set(paramKey, String(value));
        }
    }

    const page = filtersToPage(toNumber(current[OFFSET_KEY]), toNumber(current[LIMIT_KEY] ?? defaults[LIMIT_KEY]));

    if (page > 1) {
        params.set(prefixKey(PAGE_KEY, namespace), String(page));
    }

    if (viewMode && viewMode !== defaultViewMode) {
        params.set(prefixKey(VIEW_KEY, namespace), viewMode);
    }

    return params.toString();
};

export interface DeserializeFiltersOptions<TFilters extends object> {
    initialFilters: TFilters;
    namespace?: string;
    excludeKeys?: readonly string[];
    /**
     * Keys of multi-select filters (`allowMultiple` in the CMS filter config). A single URL value is
     * restored as a one-element array for them, because the filter components expect an array and
     * would otherwise iterate the string character by character.
     */
    multiValueKeys?: readonly string[];
    /**
     * Filter keys the block owns beyond `initialFilters` — the CMS-driven ones (`category`, `sort`, …).
     * Without a namespace they are the only way to tell the block's params from unrelated ones, so an
     * unprefixed URL (`?category=tools`) needs them to restore anything at all.
     */
    filterKeys?: readonly string[];
    defaultViewMode?: ViewMode;
}

export interface DeserializeFiltersResult<TFilters extends object> {
    filters: TFilters;
    viewMode: ViewMode;
    /** True when the query string carried at least one param owned by this namespace. */
    hasUrlState: boolean;
}

/**
 * Rebuilds filter state from a query string, falling back to `initialFilters` for anything absent.
 *
 * Filter keys are not limited to `initialFilters` — list blocks accumulate keys driven by the CMS
 * filter config (`status`, `sort`, `topic`, …) that have no default. Such keys are picked up when a
 * `namespace` is given, or when `filterKeys` names them: without either there is no way to tell a
 * block's params from unrelated ones already on the page.
 */
export const deserializeParamsToFilters = <TFilters extends object>(
    params: URLSearchParams,
    {
        initialFilters,
        namespace,
        excludeKeys = DEFAULT_EXCLUDED_KEYS,
        multiValueKeys = [],
        filterKeys = [],
        defaultViewMode = 'list',
    }: DeserializeFiltersOptions<TFilters>,
): DeserializeFiltersResult<TFilters> => {
    const prefix = namespace ? `${namespace}_` : '';
    const excluded = new Set<string>(excludeKeys);
    const multiValue = new Set<string>(multiValueKeys);
    const defaults = initialFilters as FiltersRecord;
    const filters: FiltersRecord = { ...defaults };

    const ownParams = new Map<string, string[]>();

    params.forEach((value, key) => {
        if (prefix && !key.startsWith(prefix)) {
            return;
        }

        const plainKey = prefix ? key.slice(prefix.length) : key;

        if (!plainKey) {
            return;
        }

        const isKnownKey =
            plainKey in initialFilters ||
            filterKeys.includes(plainKey) ||
            plainKey === PAGE_KEY ||
            plainKey === VIEW_KEY;

        if (!prefix && !isKnownKey) {
            return;
        }

        ownParams.set(plainKey, [...(ownParams.get(plainKey) ?? []), value]);
    });

    let hasUrlState = false;

    for (const [key, values] of ownParams) {
        if (excluded.has(key) || key === OFFSET_KEY) {
            continue;
        }

        hasUrlState = true;

        if (key === PAGE_KEY || key === VIEW_KEY) {
            continue;
        }

        const initialValue = defaults[key];

        if (multiValue.has(key) || Array.isArray(initialValue) || values.length > 1) {
            filters[key] = values;
        } else if (typeof initialValue === 'number') {
            filters[key] = toNumber(values[0]) ?? initialValue;
        } else {
            filters[key] = values[0];
        }
    }

    if (OFFSET_KEY in defaults) {
        const page = toNumber(ownParams.get(PAGE_KEY)?.[0]);
        const limit = toNumber(filters[LIMIT_KEY] ?? defaults[LIMIT_KEY]);

        filters[OFFSET_KEY] = page && page > 1 ? pageToOffset(page, limit) : defaults[OFFSET_KEY];
    }

    const rawViewMode = ownParams.get(VIEW_KEY)?.[0] as ViewMode | undefined;

    return {
        filters: filters as TFilters,
        viewMode: rawViewMode && VIEW_MODES.includes(rawViewMode) ? rawViewMode : defaultViewMode,
        hasUrlState,
    };
};

/**
 * Writes a query string into the address bar without navigating.
 *
 * List blocks fetch their own data client-side, so a filter change needs nothing from the server.
 * `router.replace` would still trigger an RSC navigation and re-render the whole route on every
 * change, which reads as a page reload. The History API is picked up by Next.js, so
 * `useSearchParams` stays in sync while the render stays entirely on the client.
 */
export const replaceUrlParams = (pathname: string, params: string): void => {
    if (typeof window === 'undefined') {
        return;
    }

    const { hash } = window.location;

    window.history.replaceState(null, '', `${pathname}${params ? `?${params}` : ''}${hash}`);
};

/**
 * The params a write should be merged into: the live URL in the browser, the given snapshot outside it.
 *
 * A render-time snapshot of the query string can already be out of date by the time a write happens —
 * `useSearchParams` only catches up with a `replaceState` on a later render, so a write queued before
 * that (another block's filter change, or a debounced one from this block) would merge into params
 * that no longer exist and drop what was written in between. The address bar is the shared state, so
 * it is read back at write time; the snapshot stays the fallback for server renders and tests.
 */
export const liveUrlParams = (fallback: URLSearchParams): URLSearchParams =>
    typeof window === 'undefined' ? fallback : new URLSearchParams(window.location.search);

export interface ParseFiltersOptions {
    /** Param prefix the block writes with, if any. */
    namespace?: string;
    /** Filter keys the block's query understands. Anything else in the URL belongs to someone else. */
    keys: readonly string[];
    /**
     * Keys the block's query accepts more than one value for. Others take the first value in the URL,
     * because a repeated param would otherwise reach an API that compares it as a single value.
     */
    multiValueKeys?: readonly string[];
}

/**
 * Reads a block's filters out of the query params a server render receives, mirroring what
 * `useUrlFilters` restores on the client so both ends fetch the same list.
 *
 * Without this a filtered link renders as the default list and the client has to replace it, which
 * costs a second request and shows the wrong data first. `page` is returned as it is: turning it into
 * an `offset` needs the page size, which only the API knows.
 */
export const parseFiltersFromSearchParams = (
    searchParams: Record<string, string | string[] | undefined> = {},
    { namespace, keys, multiValueKeys = [] }: ParseFiltersOptions,
): Record<string, string | string[] | number> => {
    const filters: Record<string, string | string[] | number> = {};

    for (const key of keys) {
        const value = searchParams[prefixKey(key, namespace)];

        if (isEmptyValue(value)) {
            continue;
        }

        filters[key] = Array.isArray(value) && !multiValueKeys.includes(key) ? value[0]! : value!;
    }

    // A page is a whole number of pages past the first one. Anything else in the URL — a fraction,
    // `Infinity`, something too large to be exact — would travel on as a nonsense `offset`, so it is
    // dropped and the block renders the first page.
    const page = Number(searchParams[prefixKey(PAGE_KEY, namespace)]);

    if (Number.isSafeInteger(page) && page > 1) {
        filters[PAGE_KEY] = page;
    }

    return filters;
};

/**
 * A stable string for a set of query params, for keying a server-rendered block on them.
 *
 * Arriving with different filters has to rebuild the block, otherwise the client keeps the state it
 * was mounted with and shows the previous result set next to the new URL.
 */
export const searchParamsKey = (searchParams: Record<string, string | string[] | undefined> = {}): string =>
    new URLSearchParams(
        Object.entries(searchParams).flatMap(([key, value]): [string, string][] => {
            if (value === undefined) {
                return [];
            }

            return Array.isArray(value) ? value.map((entry): [string, string] => [key, entry]) : [[key, value]];
        }),
    ).toString();
