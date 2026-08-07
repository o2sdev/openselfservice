'use client';

import * as React from 'react';

type QueryValue = string | number | boolean | null | undefined;
type QueryValueList = QueryValue[];
type QueryRecord = Record<string, QueryValue | QueryValueList>;

export type UrlSearchParamsLike = {
    forEach: (callback: (value: string, key: string) => void) => void;
    get: (key: string) => string | null;
    getAll: (key: string) => string[];
    toString: () => string;
};

type UrlFilterConfig<TFilters extends object, TViewMode extends string> = {
    namespace: string;
    initialFilters: TFilters;
    filterKeys?: Array<keyof TFilters | string>;
    initialViewMode: TViewMode;
    defaultViewMode?: TViewMode;
    searchParams: UrlSearchParamsLike;
    pathname: string;
    onUrlChange: (url: string) => void;
};

const PAGE_KEY = 'page';
const VIEW_KEY = 'view';

const scopedKey = (namespace: string, key: string) => `${namespace}_${key}`;

const toSearchParams = (searchParams: UrlSearchParamsLike) => {
    const params = new URLSearchParams();

    searchParams.forEach((value, key) => {
        params.append(key, value);
    });

    return params;
};

const coerceValue = (value: string, defaultValue: unknown): QueryValue => {
    if (typeof defaultValue === 'number') {
        const numericValue = Number(value);
        return Number.isNaN(numericValue) ? defaultValue : numericValue;
    }

    if (typeof defaultValue === 'boolean') {
        return value === 'true';
    }

    return value;
};

const normalizeValue = (value: unknown): string | undefined => {
    if (value === null || value === undefined || value === '') {
        return undefined;
    }

    return String(value);
};

const areEqualValues = (value: unknown, defaultValue: unknown) => {
    if (Array.isArray(value) || Array.isArray(defaultValue)) {
        const values = Array.isArray(value) ? value : [value];
        const defaultValues = Array.isArray(defaultValue) ? defaultValue : [defaultValue];

        return values.map(String).join('\u0000') === defaultValues.map(String).join('\u0000');
    }

    return String(value ?? '') === String(defaultValue ?? '');
};

const appendValue = (params: URLSearchParams, key: string, value: unknown) => {
    if (Array.isArray(value)) {
        value.forEach((item) => {
            const normalizedValue = normalizeValue(item);

            if (normalizedValue !== undefined) {
                params.append(key, normalizedValue);
            }
        });
        return;
    }

    const normalizedValue = normalizeValue(value);

    if (normalizedValue !== undefined) {
        params.set(key, normalizedValue);
    }
};

export const hasUrlFilterValues = (namespace: string, searchParams: UrlSearchParamsLike) => {
    const prefix = `${namespace}_`;
    let hasValues = false;

    searchParams.forEach((_value, key) => {
        if (key.startsWith(prefix)) {
            hasValues = true;
        }
    });

    return hasValues;
};

export const parseUrlFilters = <TFilters extends object>({
    namespace,
    initialFilters,
    filterKeys,
    searchParams,
}: {
    namespace: string;
    initialFilters: TFilters;
    filterKeys?: Array<keyof TFilters | string>;
    searchParams: UrlSearchParamsLike;
}): TFilters => {
    const nextFilters = { ...initialFilters } as QueryRecord;
    const initialFilterRecord = initialFilters as QueryRecord;
    const keys = (filterKeys ?? Object.keys(initialFilterRecord)).map(String);
    const pageValue = searchParams.get(scopedKey(namespace, PAGE_KEY));
    const limit = Number(initialFilterRecord.limit ?? 1);

    if (pageValue) {
        const page = Number(pageValue);

        if (Number.isInteger(page) && page > 0) {
            nextFilters.offset = (page - 1) * limit;
        }
    }

    keys.forEach((key) => {
        if (key === 'offset') {
            return;
        }

        const values = searchParams.getAll(scopedKey(namespace, key));

        if (!values.length) {
            return;
        }

        const defaultValue = initialFilterRecord[key];

        if (Array.isArray(defaultValue)) {
            nextFilters[key] = values.map((value) => coerceValue(value, defaultValue[0]));
            return;
        }

        nextFilters[key] = values.length > 1 ? values : coerceValue(values[0], defaultValue);
    });

    return nextFilters as TFilters;
};

export const parseUrlViewMode = <TViewMode extends string>({
    namespace,
    initialViewMode,
    searchParams,
}: {
    namespace: string;
    initialViewMode: TViewMode;
    searchParams: UrlSearchParamsLike;
}): TViewMode => {
    return (searchParams.get(scopedKey(namespace, VIEW_KEY)) as TViewMode | null) ?? initialViewMode;
};

export const serializeUrlFilters = <TFilters extends object, TViewMode extends string>({
    namespace,
    initialFilters,
    filterKeys,
    filters,
    viewMode,
    defaultViewMode,
    searchParams,
}: {
    namespace: string;
    initialFilters: TFilters;
    filterKeys?: Array<keyof TFilters | string>;
    filters: TFilters;
    viewMode: TViewMode;
    defaultViewMode: TViewMode;
    searchParams: UrlSearchParamsLike;
}) => {
    const params = toSearchParams(searchParams);
    const prefix = `${namespace}_`;
    const filterRecord = filters as QueryRecord;
    const initialFilterRecord = initialFilters as QueryRecord;
    const keys = Array.from(
        new Set([...Object.keys(initialFilterRecord), ...Object.keys(filterRecord), ...(filterKeys ?? []).map(String)]),
    );
    const limit = Number(filterRecord.limit ?? initialFilterRecord.limit ?? 1);

    Array.from(params.keys()).forEach((key) => {
        if (key.startsWith(prefix)) {
            params.delete(key);
        }
    });

    keys.forEach((key) => {
        const value = filterRecord[key];
        const defaultValue = initialFilterRecord[key];

        if (key === 'offset') {
            const offset = Number(value ?? 0);
            const page = Math.floor(offset / limit) + 1;

            if (page > 1) {
                params.set(scopedKey(namespace, PAGE_KEY), String(page));
            }

            return;
        }

        if (areEqualValues(value, defaultValue)) {
            return;
        }

        appendValue(params, scopedKey(namespace, key), value);
    });

    if (viewMode !== defaultViewMode) {
        params.set(scopedKey(namespace, VIEW_KEY), viewMode);
    }

    return params.toString();
};

export const useUrlFilters = <TFilters extends object, TViewMode extends string>({
    namespace,
    initialFilters,
    filterKeys,
    initialViewMode,
    defaultViewMode = 'list' as TViewMode,
    searchParams,
    pathname,
    onUrlChange,
}: UrlFilterConfig<TFilters, TViewMode>) => {
    const searchParamsString = searchParams.toString();
    const filterKeysKey = (filterKeys ?? []).map(String).join('\u0000');
    const normalizedFilterKeys = React.useMemo(
        () => (filterKeysKey ? filterKeysKey.split('\u0000') : undefined),
        [filterKeysKey],
    );

    const parsedFilters = React.useMemo(
        () => parseUrlFilters({ namespace, initialFilters, filterKeys: normalizedFilterKeys, searchParams }),
        [initialFilters, namespace, normalizedFilterKeys, searchParams, searchParamsString],
    );
    const parsedViewMode = React.useMemo(
        () => parseUrlViewMode({ namespace, initialViewMode, searchParams }),
        [initialViewMode, namespace, searchParams, searchParamsString],
    );

    const [filters, setFiltersState] = React.useState(parsedFilters);
    const [viewMode, setViewModeState] = React.useState(parsedViewMode);

    React.useEffect(() => {
        setFiltersState(parsedFilters);
    }, [parsedFilters]);

    React.useEffect(() => {
        setViewModeState(parsedViewMode);
    }, [parsedViewMode]);

    const updateUrl = React.useCallback(
        (nextFilters: TFilters, nextViewMode: TViewMode) => {
            const nextSearchParams = serializeUrlFilters({
                namespace,
                initialFilters,
                filterKeys: normalizedFilterKeys,
                filters: nextFilters,
                viewMode: nextViewMode,
                defaultViewMode,
                searchParams,
            });
            const nextUrl = nextSearchParams ? `${pathname}?${nextSearchParams}` : pathname;

            onUrlChange(nextUrl);
        },
        [defaultViewMode, initialFilters, namespace, normalizedFilterKeys, onUrlChange, pathname, searchParams],
    );

    const setFilters = React.useCallback(
        (nextFilters: TFilters) => {
            setFiltersState(nextFilters);
            updateUrl(nextFilters, viewMode);
        },
        [updateUrl, viewMode],
    );

    const setViewMode = React.useCallback(
        (nextViewMode: TViewMode) => {
            setViewModeState(nextViewMode);
            updateUrl(filters, nextViewMode);
        },
        [filters, updateUrl],
    );

    return {
        filters,
        setFilters,
        viewMode,
        setViewMode,
        hasUrlFilters: hasUrlFilterValues(namespace, searchParams),
    };
};
