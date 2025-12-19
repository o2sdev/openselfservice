import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/media-section.client';
import { sdk } from '../sdk';

import { MediaSectionProps } from './MediaSection.types';

export const MediaSectionDynamic = dynamic(() =>
    import('./MediaSection.client').then((module) => module.MediaSectionPure),
);

export const MediaSection: React.FC<MediaSectionProps> = async ({ id, accessToken, locale, routing }) => {
    let data: Model.MediaSectionBlock;
    try {
        data = await sdk.blocks.getMediaSection(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (error) {
        console.error('Error fetching MediaSection block', error);
        return null;
    }

    return <MediaSectionDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
};
