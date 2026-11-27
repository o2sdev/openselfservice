import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@o2s/ui/components/Feedback/Loading';
import { Container } from '@o2s/ui/components/Layout/Container';

import { DocumentList } from './DocumentList.server';
import { DocumentListRendererProps } from './DocumentList.types';

export const DocumentListRenderer: React.FC<DocumentListRendererProps> = ({
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
                    <Loading bars={1} />
                    <Container variant="narrow">
                        <Loading bars={8} />
                    </Container>
                </>
            }
        >
            <DocumentList
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
