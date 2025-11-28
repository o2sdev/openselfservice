import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { HeroSectionProps } from './HeroSection.types';

export const HeroSectionDynamic = dynamic(() =>
    import('./HeroSection.client').then((module) => module.HeroSectionPure),
);

export const HeroSection: React.FC<HeroSectionProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    try {
        const data = await sdk.blocks.getHeroSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (error) {
        console.error('Error fetching HeroSection block', error);
        return null;
    }
};
