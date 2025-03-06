'use client';

import { Modules } from '@o2s/api-harmonization';
import React, { ReactNode, createContext, useContext } from 'react';

import { PriceService, usePriceService } from '@/hooks/usePriceService';

interface GlobalProviderProps {
    config: Modules.Page.Model.Init;
    children: ReactNode;
    locale: string;
}

export interface GlobalContextType {
    config: Modules.Page.Model.Init;
    priceService: PriceService;
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({ config, locale, children }: GlobalProviderProps) => {
    const priceService = usePriceService(locale);

    return <GlobalContext.Provider value={{ config, priceService }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
