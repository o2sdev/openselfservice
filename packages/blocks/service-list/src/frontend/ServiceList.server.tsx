import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '../sdk';

import { ServiceListProps } from './ServiceList.types';

export const ServiceListDynamic = dynamic(() =>
    import('./ServiceList.client').then((module) => module.ServiceListPure),
);

export const ServiceList = async ({ id, accessToken, locale, routing, hasPriority }: ServiceListProps) => {
    try {
        const data = await sdk.blocks.getServiceList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
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
    } catch (_error) {
        return null;
    }
};
