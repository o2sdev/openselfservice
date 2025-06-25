import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { FeaturedServiceListProps } from './FeaturedServiceList.types';

export const FeaturedServiceListDynamic = dynamic(() =>
    import('./FeaturedServiceList.client').then((module) => module.FeaturedServiceListPure),
);

export const FeaturedServiceList: React.FC<FeaturedServiceListProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getFeaturedServiceList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return <FeaturedServiceListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
