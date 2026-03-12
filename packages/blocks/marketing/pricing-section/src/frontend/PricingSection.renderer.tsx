import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Loading';

import { PricingSection } from './PricingSection.server';
import { PricingSectionRendererProps } from './PricingSection.types';

export const PricingSectionRenderer: React.FC<PricingSectionRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
}) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <div className="w-full flex flex-col gap-16">
                    <Loading bars={5} />
                    <div className="flex flex-col lg:flex-row gap-4">
                        <Loading bars={20} />
                        <Loading bars={20} />
                        <Loading bars={20} />
                    </div>
                </div>
            }
        >
            <PricingSection
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};
