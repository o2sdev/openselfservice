import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { SurveyJsFormProps } from './SurveyJs.types';

export const SurveyJsDynamic = dynamic(() => import('./SurveyJs.client').then((module) => module.SurveyJsPure));

export const SurveyJsServer: React.FC<SurveyJsFormProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data;
    try {
        data = await sdk.blocks.getSurveyjsBlock(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <SurveyJsDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
