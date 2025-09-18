import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { ServiceList } from './ServiceList.server';
import { ServiceListRendererProps } from './ServiceList.types';

export const Renderer: React.FC<ServiceListRendererProps> = ({ id, accessToken, slug, routing, hasPriority }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={32} />
                </>
            }
        >
            <ServiceList
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};
