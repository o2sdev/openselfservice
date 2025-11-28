import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { FeatureSectionGridProps } from './FeatureSectionGrid.types';

export const FeatureSectionGridDynamic = dynamic(() =>
    import('./FeatureSectionGrid.client').then((module) => module.FeatureSectionGridPure),
);

export const FeatureSectionGrid: React.FC<FeatureSectionGridProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getFeatureSectionGrid(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <FeatureSectionGridDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />
        );
    } catch (error) {
        console.error('Error fetching FeatureSectionGrid block', error);
        return null;
    }
};
