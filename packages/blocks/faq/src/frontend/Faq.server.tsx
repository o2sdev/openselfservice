import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/faq.client';
import { sdk } from '../sdk';

import { FaqProps } from './Faq.types';

export const FaqDynamic = dynamic(() => import('./Faq.client').then((module) => module.FaqPure));

export const Faq: React.FC<FaqProps> = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
    isDraftModeEnabled,
}) => {
    let data: Model.FaqBlock;
    try {
        data = await sdk.blocks.getFaq(
            {
                id,
                preview: isDraftModeEnabled,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

    return (
        <FaqDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
