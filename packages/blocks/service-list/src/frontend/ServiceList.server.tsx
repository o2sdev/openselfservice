import dynamic from 'next/dynamic';
import React from 'react';

import { Model } from '../api-harmonization/service-list.client';
import { sdk } from '../sdk';

import { ServiceListProps } from './ServiceList.types';

export const ServiceListDynamic = dynamic(() =>
    import('./ServiceList.client').then((module) => module.ServiceListPure),
);

export const ServiceList: React.FC<ServiceListProps> = async ({ id, accessToken, locale, routing, hasPriority }) => {
    let data: Model.ServiceListBlock;
    try {
        data = await sdk.blocks.getServiceList(
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
        <ServiceListDynamic
            {...data}
            id={id}
            accessToken={accessToken}
            locale={locale}
            routing={routing}
            hasPriority={hasPriority}
        />
    );
};
