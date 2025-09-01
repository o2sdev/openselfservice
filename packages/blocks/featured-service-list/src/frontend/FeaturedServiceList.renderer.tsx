import { useLocale } from 'next-intl';
import { createNavigation } from 'next-intl/navigation';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { FeaturedServiceList } from './FeaturedServiceList.server';
import { FeaturedServiceListRendererProps } from './FeaturedServiceList.types';

export const Renderer: React.FC<FeaturedServiceListRendererProps> = ({ id, accessToken, slug, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={8} />
                </>
            }
        >
            <FeaturedServiceList id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};
