import { createContext, useContext, useMemo, useState } from 'react';

export interface InitialFilters {
    [key: string]: string | number;
}

type FiltersContextType = {
    activeFilters: number;
    countActiveFilters: (currentFilters: InitialFilters) => void;
    initialFilters: InitialFilters;
};

const FiltersContext = createContext<FiltersContextType | null>(null);

export default function FiltersContextProvider({
    children,
    initialFilters,
}: Readonly<{
    children: React.ReactNode;
    initialFilters: InitialFilters;
}>) {
    const [activeFilters, setActiveFilters] = useState<number>(0);

    const contextValue = useMemo(() => {
        const countActiveFilters = (currentFilters: InitialFilters) => {
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
            setActiveFilters(activeFilterCount);
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
