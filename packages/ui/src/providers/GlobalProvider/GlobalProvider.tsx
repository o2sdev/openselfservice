'use client';

import { CMS } from '@o2s/framework/modules';
import React, { ReactNode, createContext, useContext, useState } from 'react';

import { PriceService, usePriceService } from '@o2s/ui/components/Price';

// TODO: reowrk model for `config` to a) not duplicate `page.model.ts` and b) not have `@o2s/api-harmonization`
// TODO: dependency as it creates circular dependency problem
export interface GlobalProviderProps {
    config: {
        locales: {
            value: string;
            label: string;
        }[];
        common: {
            header: CMS.Model.Header.Header;
            footer: CMS.Model.Footer.Footer;
        };
        labels: CMS.Model.AppConfig.Labels;
    };
    labels: CMS.Model.AppConfig.Labels;
    locale: string;
    children: ReactNode;
}

export interface GlobalContextType {
    config: {
        locales: {
            value: string;
            label: string;
        }[];
        common: {
            header: CMS.Model.Header.Header;
            footer: CMS.Model.Footer.Footer;
        };
        labels: CMS.Model.AppConfig.Labels;
    };
    labels: CMS.Model.AppConfig.Labels;
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
