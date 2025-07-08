import dynamic from 'next/dynamic';
import React from 'react';

import { extendSdk } from '@o2s/framework/sdk';

import { faq } from '../sdk/faq';

import { FaqProps } from './Faq.types';

export const FaqDynamic = dynamic(() => import('./Faq.client').then((module) => module.FaqPure));

export const Faq: React.FC<FaqProps> = async ({ id, accessToken, locale, sdk: internalSdk, LinkComponent }) => {
    const sdk = extendSdk(internalSdk, {
        blocks: {
            getFaq: faq(internalSdk).blocks.getFaq,
        },
    });

    try {
        const data = await sdk.blocks.getFaq(
            {
                id,
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
                sdk={sdk}
                LinkComponent={LinkComponent}
            />
        );
    } catch (_error) {
        return null;
    }
};
