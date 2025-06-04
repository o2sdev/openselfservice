import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { FeaturedServiceList } from './FeaturedServiceList.server';

export interface FeaturedServiceListRendererProps {
    slug: string[];
    id: string;
    accessToken?: string;
}

export const FeaturedServiceListRenderer: React.FC<FeaturedServiceListRendererProps> = ({ id, accessToken }) => {
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
            <FeaturedServiceList id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};
