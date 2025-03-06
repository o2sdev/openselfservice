import React from 'react';

import { sdk } from '@/api/sdk';

import { FaqDynamic } from './Faq.dynamic';
import { FaqProps } from './Faq.types';

export const Faq: React.FC<FaqProps> = async ({ id, accessToken, locale }) => {
    const data = await sdk.components.getFaq(
        {
            id,
        },
        { 'x-locale': locale },
        accessToken,
    );

    return <FaqDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
};
