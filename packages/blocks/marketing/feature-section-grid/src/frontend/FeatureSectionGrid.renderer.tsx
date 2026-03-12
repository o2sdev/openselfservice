import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { FeatureSectionGrid } from './FeatureSectionGrid.server';
import { FeatureSectionGridRendererProps } from './FeatureSectionGrid.types';

export const FeatureSectionGridRenderer: React.FC<FeatureSectionGridRendererProps> = ({ id, accessToken, routing }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-12 lg:gap-16 lg:flex-row">
                    <Loading bars={12} />
                    <div className="w-full grid grid-rows-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                        <Loading bars={1} />
                        <Loading bars={1} />
                        <Loading bars={1} />
                        <Loading bars={1} />
                        <Loading bars={1} />
                        <Loading bars={1} />
                    </div>
                </div>
            }
        >
            <FeatureSectionGrid id={id} accessToken={accessToken} locale={locale} routing={routing} />
        </Suspense>
    );
};
