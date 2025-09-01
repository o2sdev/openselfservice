import React from 'react';

import { renderBlocks } from '@/blocks/renderBlocks';

import { TwoColumnTemplateProps } from './TwoColumnTemplate.types';

export const TwoColumnTemplate: React.FC<TwoColumnTemplateProps> = async ({ slug, data }) => {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                {renderBlocks(data.slots.top, slug)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center sm:items-start w-full">
                <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                    {renderBlocks(data.slots.left, slug)}
                </div>

                <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                    {renderBlocks(data.slots.right, slug)}
                </div>
            </div>

            <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                {renderBlocks(data.slots.bottom, slug)}
            </div>
        </div>
    );
};
