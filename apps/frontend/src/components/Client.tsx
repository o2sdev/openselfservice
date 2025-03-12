'use client';

import { Modules } from '@o2s/api-harmonization';
import React, { useEffect } from 'react';

import { useGlobalContext } from '@/providers/GlobalProvider';

interface ClientProps {
    page?: Modules.Page.Model.PageData;
}

export const Client: React.FC<ClientProps> = ({ page }) => {
    const { alternativeUrls } = useGlobalContext();

    // since locale switcher is placed inside the layout, we cannot access page-specific data there,
    // so pasing of alternative urls has to be done on client side (because layouts are not re-rendered on route change)
    useEffect(() => {
        page && alternativeUrls.set(page.alternativeUrls);
    }, [alternativeUrls, page]);

    return null;
};
