import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/bento-grid.client';
import { sdk } from '../sdk';

import { BentoGridProps } from './BentoGrid.types';

export const BentoGridDynamic = dynamic(() => import('./BentoGrid.client').then((module) => module.BentoGridPure));

export const BentoGrid: React.FC<BentoGridProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.BentoGridBlock;
    try {
        data = await sdk.blocks.getBentoGrid(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching BentoGrid block', error);
        return null;
    }

    return <BentoGridDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
