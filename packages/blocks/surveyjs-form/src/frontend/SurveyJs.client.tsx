'use client';

import { Survey } from '@o2s/modules.surveyjs/frontend';
import React from 'react';

import { useGlobalContext } from '@o2s/ui/providers/GlobalProvider';

import { Container } from '@o2s/ui/components/Container';

import { Typography } from '@o2s/ui/elements/typography';

import { SurveyJsFormPureProps } from './SurveyJs.types';

export const SurveyJsPure = ({ locale, accessToken, ...component }: SurveyJsFormPureProps) => {
    const { labels } = useGlobalContext();

    const { code, title } = component;

    return (
        <Container variant="narrow">
            <div className="flex flex-col gap-6">
                <Typography variant="h2" asChild>
                    <h2>{title}</h2>
                </Typography>

                <Survey code={code} labels={labels} locale={locale} accessToken={accessToken} />
            </div>
        </Container>
    );
};
