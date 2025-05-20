import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Container } from '@/components/Container/Container';
import { Loading } from '@/components/Loading/Loading';

import { SurveyJs } from './SurveyJs.server';

export interface SurveyJsRendererProps {
    id: string;
    accessToken?: string;
}

export const SurveyJsRenderer: React.FC<SurveyJsRendererProps> = ({ id, accessToken }) => {
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
            <SurveyJs id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};
