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
    spinner: {
        isVisible: boolean;
        toggle: (show: boolean) => void;
    };
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({ config, locale, children }: GlobalProviderProps) => {
    const [alternativeUrls, setAlternativeUrls] = useState<{
        [key: string]: string;
    }>({});

    const priceService = usePriceService(locale);

    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                config,
                priceService,
                alternativeUrls: {
                    values: alternativeUrls,
                    set: setAlternativeUrls,
                },
                spinner: {
                    isVisible: isSpinnerVisible,
                    toggle: setIsSpinnerVisible,
                },
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
