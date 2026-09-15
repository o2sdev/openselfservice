import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/feature-section-grid.client';
import { sdk } from '../sdk';

import { FeatureSectionGridProps } from './FeatureSectionGrid.types';

export const FeatureSectionGridDynamic = dynamic(() =>
    import('./FeatureSectionGrid.client').then((module) => module.FeatureSectionGridPure),
);

export const FeatureSectionGrid: React.FC<FeatureSectionGridProps> = async ({
    isDraftModeEnabled,
    id,
    accessToken,
    locale,
    routing,
}) => {
    let data: Model.FeatureSectionGridBlock;
    try {
        data = await sdk.blocks.getFeatureSectionGrid(
            {
                preview: isDraftModeEnabled,
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching FeatureSectionGrid block', error);
        return null;
    }

    return <FeatureSectionGridDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
