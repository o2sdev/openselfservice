import React from 'react';

import { OneColumnTemplate } from '@/templates/OneColumnTemplate/OneColumnTemplate';
import { TwoColumnTemplate } from '@/templates/TwoColumnTemplate/TwoColumnTemplate';

import { PageTemplateProps } from './PageTemplate.types';

export const PageTemplate: React.FC<PageTemplateProps> = ({ slug, data, session }) => {
    const getTemplate = () => {
        switch (data.template.__typename) {
            case 'OneColumnTemplate':
                return <OneColumnTemplate slug={slug} data={data.template} session={session} />;
            case 'TwoColumnTemplate':
                return <TwoColumnTemplate slug={slug} data={data.template} session={session} />;
        }
    };

    return getTemplate();
};
