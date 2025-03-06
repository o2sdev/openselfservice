import React from 'react';

import { renderComponents } from '@/utils/renderComponents';

import { OneColumnTemplateProps } from './OneColumnTemplate.types';

export const OneColumnTemplate: React.FC<OneColumnTemplateProps> = async ({ slug, data, session }) => {
    return (
        <div className="flex flex-col gap-6 row-start-2 items-center sm:items-start w-full">
            {renderComponents(data.slots.main, slug, session.accessToken)}
        </div>
    );
};
