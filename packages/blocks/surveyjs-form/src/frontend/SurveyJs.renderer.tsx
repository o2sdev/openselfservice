import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Loading } from '@o2s/ui/components/Loading';

import { SurveyJsServer } from './SurveyJs.server';
import { SurveyJsFormRendererProps } from './SurveyJs.types';

export const SurveyJsRenderer = ({ id, accessToken, routing, hasPriority }: SurveyJsFormRendererProps) => {
    const locale = useLocale();

    return (
        <Suspense
            key={id}
            fallback={
                <>
                    <Loading bars={0} />
                    <Container variant="narrow">
                        <Loading bars={12} />
                    </Container>
                </>
            }
        >
            <SurveyJsServer
                id={id}
                accessToken={accessToken}
                locale={locale}
                routing={routing}
                hasPriority={hasPriority}
            />
        </Suspense>
    );
};
