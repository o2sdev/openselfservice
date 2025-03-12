import React from 'react';

import { renderBlocks } from '@/blocks/renderBlocks';

import { OneColumnTemplateProps } from './OneColumnTemplate.types';

export const OneColumnTemplate: React.FC<OneColumnTemplateProps> = async ({ slug, data, session }) => {
    return (
        <div className="flex flex-col gap-6 row-start-2 items-center sm:items-start w-full">
            {renderBlocks(data.slots.main, slug, session.accessToken)}
        </div>
    );
};
