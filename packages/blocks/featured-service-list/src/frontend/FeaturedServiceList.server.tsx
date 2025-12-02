import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { FeaturedServiceListProps } from './FeaturedServiceList.types';

export const FeaturedServiceListDynamic = dynamic(() =>
    import('./FeaturedServiceList.client').then((module) => module.FeaturedServiceListPure),
);

export const FeaturedServiceList = async ({
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}: FeaturedServiceListProps) => {
    try {
        const data = await sdk.blocks.getFeaturedServiceList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );

        return (
            <FeaturedServiceListDynamic
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
