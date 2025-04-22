import { useLocale } from 'next-intl';
import React, { Suspense } from 'react';

import { Loading } from '@/components/Loading/Loading';

import { SurveyJs } from './SurveyJs.server';

export interface SurveyJsRendererProps {
    id: string;
    accessToken: string;
}

export const SurveyJsRenderer: React.FC<SurveyJsRendererProps> = ({ id, accessToken }) => {
    const locale = useLocale();

    return (
        <Suspense key={id} fallback={<Loading bars={8} />}>
            <SurveyJs id={id} accessToken={accessToken} locale={locale} />
        </Suspense>
    );
};
