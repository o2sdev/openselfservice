import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { FaqProps } from './Faq.types';

export const FaqDynamic = dynamic(() => import('./Faq.client').then((module) => module.FaqPure));

export const Faq: React.FC<FaqProps> = async ({ id, accessToken, locale, routing }) => {
    try {
        const data = await sdk.blocks.getFaq(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <FaqDynamic {...data} id={id} accessToken={accessToken} locale={locale} routing={routing} />;
    } catch (_error) {
        return null;
    }
};
