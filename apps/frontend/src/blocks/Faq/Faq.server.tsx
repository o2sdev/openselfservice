import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { FaqProps } from './Faq.types';

export const FaqDynamic = dynamic(() => import('./Faq.client').then((module) => module.FaqPure));

export const Faq: React.FC<FaqProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.blocks.getFaq(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <FaqDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};
