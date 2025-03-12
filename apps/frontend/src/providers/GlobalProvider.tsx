'use client';

import { Modules } from '@o2s/api-harmonization';
import React, { ReactNode, createContext, useContext, useState } from 'react';

import { PriceService, usePriceService } from '@/hooks/usePriceService';

interface GlobalProviderProps {
    config: Modules.Page.Model.Init;
    locale: string;
    children: ReactNode;
}

export interface GlobalContextType {
    config: Modules.Page.Model.Init;
    priceService: PriceService;
    alternativeUrls: {
        values: {
            [key: string]: string;
        };
        set: (values: { [key: string]: string }) => void;
    };
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({ config, locale, children }: GlobalProviderProps) => {
    const [alternativeUrls, setAlternativeUrls] = useState<{
        [key: string]: string;
    }>({});

    const priceService = usePriceService(locale);

    return (
        <GlobalContext.Provider
            value={{
                config,
                priceService,
                alternativeUrls: {
                    values: alternativeUrls,
                    set: setAlternativeUrls,
                },
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
