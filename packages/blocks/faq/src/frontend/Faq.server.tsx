import dynamic from 'next/dynamic';
import React from 'react';

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
    try {
        const data = await sdk.blocks.getFaq(
            {
                id,
                preview: isDraftModeEnabled,
            },
            { 'x-locale': locale },
            accessToken,
        );

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
    } catch (_error) {
        return null;
    }
};
