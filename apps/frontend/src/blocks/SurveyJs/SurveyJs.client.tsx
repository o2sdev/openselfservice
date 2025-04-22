import React from 'react';

import { Separator } from '@o2s/ui/components/separator';
import { Typography } from '@o2s/ui/components/typography';

import { Survey } from '@/containers/SurveyJS/Survey';

import { SurveyJsPureProps } from './SurveyJs.types';

export const SurveyJsPure: React.FC<SurveyJsPureProps> = ({ ...component }) => {
    const { code, title } = component;
    return (
        <div className="w-full">
            <div className="flex flex-col gap-6">
                <div className="flex gap-2 sm:gap-4 flex-col sm:flex-row flex-wrap">
                    <Typography variant="h2" asChild>
                        <h1>{title}</h1>
                    </Typography>
                </div>

                <Separator />

                <Survey code={code} />
            </div>
        </div>
    );
};
