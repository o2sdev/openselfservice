import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { ServiceList } from './ServiceList.server';
import { ServiceListRendererProps } from './ServiceList.types';

export const Renderer = ({ id, accessToken, routing, hasPriority }: ServiceListRendererProps) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <div className="w-full flex flex-col md:flex-row gap-6">
                        <Loading bars={21} />
                        <Loading bars={21} />
                        <Loading bars={21} />
                    </div>
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
