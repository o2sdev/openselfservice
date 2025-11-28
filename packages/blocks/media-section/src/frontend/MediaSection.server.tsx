import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { MediaSectionProps } from './MediaSection.types';

export const MediaSectionDynamic = dynamic(() =>
    import('./MediaSection.client').then((module) => module.MediaSectionPure),
);

export const MediaSection: React.FC<MediaSectionProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getMediaSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <MediaSectionDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (error) {
        console.error('Error fetching MediaSection block', error);
        return null;
    }
};
