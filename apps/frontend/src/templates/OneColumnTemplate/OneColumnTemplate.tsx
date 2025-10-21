import React from 'react';

import { renderBlocks } from '@/blocks/renderBlocks';

import { OneColumnTemplateProps } from './OneColumnTemplate.types';

export const OneColumnTemplate: React.FC<OneColumnTemplateProps> = async ({ slug, data }) => {
    return (
        <div className="flex flex-col gap-12 row-start-2 items-center sm:items-start w-full">
            {renderBlocks(data.slots.main, slug)}
        </div>
    );
};
