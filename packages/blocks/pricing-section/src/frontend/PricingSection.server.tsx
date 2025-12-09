import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { PricingSectionProps } from './PricingSection.types';

export const PricingSectionDynamic = dynamic(() =>
    import('./PricingSection.client').then((module) => module.PricingSectionPure),
);

export const PricingSection: React.FC<PricingSectionProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data;
    try {
        data = await sdk.blocks.getPricingSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching PricingSection block', error);
        return null;
    }

    return (
        <PricingSectionDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
