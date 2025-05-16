'use client';

import { Modules } from '@o2s/api-harmonization';
import React, { ReactNode, createContext, useContext, useState } from 'react';

import { PriceService, usePriceService } from '@/hooks/usePriceService';

interface GlobalProviderProps {
    config: Omit<Modules.Page.Model.Init, 'labels'>;
    labels: Modules.Page.Model.Init['labels'];
    locale: string;
    children: ReactNode;
}

export interface GlobalContextType {
    config: Omit<Modules.Page.Model.Init, 'labels'>;
    labels: Modules.Page.Model.Init['labels'];
    priceService: PriceService;
    spinner: {
        isVisible: boolean;
        toggle: (show: boolean) => void;
    };
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({ config, labels, locale, children }: GlobalProviderProps) => {
    const priceService = usePriceService(locale);

    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

    return (
        <GlobalContext.Provider
            value={{
                config,
                labels,
                priceService,
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
