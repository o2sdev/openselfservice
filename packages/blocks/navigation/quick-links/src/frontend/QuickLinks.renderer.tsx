import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { QuickLinks } from './QuickLinks.server';
import { QuickLinksRendererProps } from './QuickLinks.types';

export const QuickLinksRenderer: React.FC<QuickLinksRendererProps> = ({
    id,
    accessToken,
    routing,
    hasPriority,
    isDraftModeEnabled,
}) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <Container variant="narrow">
                    <Loading bars={[13, 14]} />
                </Container>
            }
        >
            <QuickLinks
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
                isDraftModeEnabled={isDraftModeEnabled}
            />
        </Suspense>
    );
};
