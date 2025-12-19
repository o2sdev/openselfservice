import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/hero-section.client';
import { sdk } from '../sdk';

import { HeroSectionProps } from './HeroSection.types';

export const HeroSectionDynamic = dynamic(() =>
    import('./HeroSection.client').then((module) => module.HeroSectionPure),
);

export const HeroSection: React.FC<HeroSectionProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    let data: Model.HeroSectionBlock;
    try {
        data = await sdk.blocks.getHeroSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching HeroSection block', error);
        return null;
    }

    return (
        <HeroSectionDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
