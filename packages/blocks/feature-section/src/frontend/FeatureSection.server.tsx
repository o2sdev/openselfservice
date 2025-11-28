import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { FeatureSectionProps } from './FeatureSection.types';

export const FeatureSectionDynamic = dynamic(() =>
    import('./FeatureSection.client').then((module) => module.FeatureSectionPure),
);

export const FeatureSection: React.FC<FeatureSectionProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getFeatureSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <FeatureSectionDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (error) {
        console.error('Error fetching FeatureSection block', error);
        return null;
    }
};
