import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/kpis.client';
import { sdk } from '../sdk';

import { KpisProps } from './Kpis.types';

export const KpisDynamic = dynamic(() => import('./Kpis.client').then((module) => module.KpisPure));

export const Kpis: React.FC<KpisProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.KpisBlock;
    try {
        data = await sdk.blocks.getKpis(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching Kpis block', error);
        return null;
    }

    return <KpisDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
