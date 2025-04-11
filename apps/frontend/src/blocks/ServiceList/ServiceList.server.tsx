import dynamic from 'next/dynamic';
import React from 'react';

import { sdk } from '@/api/sdk';

import { ServiceListProps } from './ServiceList.types';

export const ServiceListDynamic = dynamic(() =>
    import('./ServiceList.client').then((module) => module.ServiceListPure),
);

export const ServiceList: React.FC<ServiceListProps> = async ({ id, accessToken, locale }) => {
    try {
        const data = await sdk.blocks.getServiceList(
            {
                id,
            },
            { 'x-locale': locale },
            accessToken,
        );
        return <ServiceListDynamic {...data} id={id} accessToken={accessToken} locale={locale} />;
    } catch (_error) {
        return null;
    }
};
