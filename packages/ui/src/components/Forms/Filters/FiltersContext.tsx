import React, { createContext, useContext, useMemo, useState } from 'react';

export interface InitialFilters {
    [key: string]: string | string[] | number;
}

type FiltersContextType = {
    activeFilters: number;
    countActiveFilters: (currentFilters: InitialFilters) => void;
    initialFilters: InitialFilters;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

const countFilters = (currentFilters: InitialFilters, initialFilters: InitialFilters): number => {
    let activeFilterCount = 0;

    for (const key in currentFilters) {
        if (key === 'offset' || key === 'limit' || key === 'id') {
            continue;
        } else if (currentFilters[key as keyof InitialFilters] === '') {
            continue;
        }

        if (currentFilters[key as keyof InitialFilters] !== initialFilters[key as keyof InitialFilters]) {
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
