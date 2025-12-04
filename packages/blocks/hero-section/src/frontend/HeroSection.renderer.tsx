import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { HeroSection } from './HeroSection.server';
import { HeroSectionRendererProps } from './HeroSection.types';

export const HeroSectionRenderer: React.FC<HeroSectionRendererProps> = ({ id, accessToken, routing, hasPriority }) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="h-full w-full flex flex-col lg:flex-row gap-12 lg:gap-16'">
                    <Loading bars={13} />
                    <Loading bars={13} />
                </div>
            }
        >
            <HeroSection
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};
