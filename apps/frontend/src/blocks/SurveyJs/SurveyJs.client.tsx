import React from 'react';

import { Container } from '@o2s/ui/components/Container';
import { Typography } from '@o2s/ui/elements/typography';

import { Survey } from '@/containers/SurveyJS/Survey';

import { SurveyJsPureProps } from './SurveyJs.types';

export const SurveyJsPure: React.FC<SurveyJsPureProps> = ({ ...component }) => {
    const { code, title } = component;

    return (
        <Container variant="narrow">
            <div className="flex flex-col gap-6">
                <Typography variant="h2" asChild>
                    <h2>{title}</h2>
                </Typography>

                <Survey code={code} />
            </div>
        </Container>
    );
};
