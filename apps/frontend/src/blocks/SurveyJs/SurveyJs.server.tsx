import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { SurveyJsProps } from './SurveyJs.types';

export const SurveyJsDynamic = dynamic(() => import('./SurveyJs.client').then((module) => module.SurveyJsPure));

export const SurveyJs: React.FC<SurveyJsProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getSurveyJsBlock(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <SurveyJsDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
