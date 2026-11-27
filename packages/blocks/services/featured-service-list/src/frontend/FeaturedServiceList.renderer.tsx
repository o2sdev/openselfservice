import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';

import { FeaturedServiceList } from './FeaturedServiceList.server';
import { FeaturedServiceListRendererProps } from './FeaturedServiceList.types';

export const Renderer: React.FC<FeaturedServiceListRendererProps> = ({
    isDraftModeEnabled,
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
                <>
                    <Loading bars={8} />
                </>
            }
        >
            <FeaturedServiceList
                id={id}
                isDraftModeEnabled={isDraftModeEnabled}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};
