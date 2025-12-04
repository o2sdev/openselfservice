import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { CtaSectionProps } from './CtaSection.types';

export const CtaSectionDynamic = dynamic(() => import('./CtaSection.client').then((module) => module.CtaSectionPure));

export const CtaSection: React.FC<CtaSectionProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getCtaSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <CtaSectionDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (error) {
        console.error('Error fetching CtaSection block', error);
        return null;
    }
};
