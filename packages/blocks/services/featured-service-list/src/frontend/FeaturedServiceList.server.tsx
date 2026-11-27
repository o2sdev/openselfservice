import dynamic from 'next/dynamic';
import React from 'react';

import type { Model } from '../api-harmonization/featured-service-list.client';
import { sdk } from '../sdk';

import { FeaturedServiceListProps } from './FeaturedServiceList.types';

export const FeaturedServiceListDynamic = dynamic(() =>
    import('./FeaturedServiceList.client').then((module) => module.FeaturedServiceListPure),
);

export const FeaturedServiceList: React.FC<FeaturedServiceListProps> = async ({
    isDraftModeEnabled,
    id,
    accessToken,
    locale,
    routing,
    hasPriority,
}) => {
    let data: Model.FeaturedServiceListBlock;
    try {
        data = await sdk.blocks.getFeaturedServiceList(
            {
                preview: isDraftModeEnabled,
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
    } catch (_error) {
        return null;
    }

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
};
