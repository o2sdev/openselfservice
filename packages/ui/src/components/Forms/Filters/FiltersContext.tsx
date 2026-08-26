import React, { createContext, useContext, useMemo, useState } from 'react';

import { areValuesEqual, isEmptyValue } from '@o2s/ui/hooks/use-url-filters.utils';

export interface InitialFilters {
    [key: string]: string | string[] | number;
}

type FiltersContextType = {
    activeFilters: number;
    countActiveFilters: (currentFilters: InitialFilters) => void;
    initialFilters: InitialFilters;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

/** Keys describing the block rather than a user filter. */
const EXCLUDED_KEYS = ['offset', 'limit', 'id'];

const countFilters = (currentFilters: InitialFilters, initialFilters: InitialFilters): number => {
    let activeFilterCount = 0;

    for (const key in currentFilters) {
        const value = currentFilters[key as keyof InitialFilters];

        if (EXCLUDED_KEYS.includes(key) || isEmptyValue(value)) {
            continue;
        }

        if (!areValuesEqual(value, initialFilters[key as keyof InitialFilters])) {
            activeFilterCount++;
        }
    }

    return activeFilterCount;
};

export default function FiltersContextProvider({
    children,
    initialFilters,
    currentFilters,
}: Readonly<{
    children: React.ReactNode;
    initialFilters: InitialFilters;
    /** Filters the block starts with. Differs from `initialFilters` when they were restored from the URL. */
    currentFilters?: InitialFilters;
}>) {
    const [activeFilters, setActiveFilters] = useState<number>(() =>
        currentFilters ? countFilters(currentFilters, initialFilters) : 0,
    );

    const contextValue = useMemo(() => {
        const countActiveFilters = (currentFilters: InitialFilters) => {
            setActiveFilters(countFilters(currentFilters, initialFilters));
        };

        return {
            activeFilters,
            countActiveFilters,
            initialFilters,
        };
    }, [activeFilters, initialFilters]);

    return <FiltersContext.Provider value={contextValue}>{children}</FiltersContext.Provider>;
}

export const useFiltersContext = () => {
    const context = useContext(FiltersContext);
    if (!context) {
        throw new Error('useFiltersContext must be used within a FiltersContextProvider');
    }
    return context;
};
