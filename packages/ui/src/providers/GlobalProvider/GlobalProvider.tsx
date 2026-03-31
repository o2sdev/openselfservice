'use client';

import { CMS } from '@o2s/configs.integrations';
import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react';

import { Utils } from '@o2s/utils.frontend';

import { PriceService, usePriceService } from '@o2s/ui/components/Products/Price';

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
    themes: CMS.Model.AppConfig.Themes;
    currentTheme?: string;
    user?: {
        orgId?: string;
    };
    cartStorageKey?: string;
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
    themes: {
        available: CMS.Model.AppConfig.Themes;
        current?: string;
    };
    user?: {
        orgId?: string;
    };
}

export const GlobalContext = createContext({} as GlobalContextType);

export const GlobalProvider = ({
    config,
    labels,
    locale,
    themes,
    currentTheme,
    user,
    cartStorageKey,
    children,
}: GlobalProviderProps) => {
    const priceService = usePriceService(locale);

    const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

    useEffect(() => {
        Utils.CartStorage.configureCartStorage({ storageKey: cartStorageKey, orgId: user?.orgId });

        if (user?.orgId) {
            sessionStorage.setItem('wasAuthenticated', '1');
        } else if (sessionStorage.getItem('wasAuthenticated')) {
            sessionStorage.removeItem('wasAuthenticated');
            Utils.CartStorage.removeAllCartIds();
        }
    }, [cartStorageKey, user?.orgId]);

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
                themes: {
                    available: themes,
                    current: currentTheme,
                },
                user,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);
