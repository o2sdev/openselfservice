import React from 'react';

import { renderBlocks } from '@/blocks/renderBlocks';

import { TwoColumnTemplateProps } from './TwoColumnTemplate.types';

export const TwoColumnTemplate: React.FC<TwoColumnTemplateProps> = async ({ slug, data, session }) => {
    return (
        <div className="flex flex-col gap-8 w-full">
            <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                {renderBlocks(data.slots.top, slug, session.accessToken)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center sm:items-start w-full">
                <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                    {renderBlocks(data.slots.left, slug, session.accessToken)}
                </div>

                <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                    {renderBlocks(data.slots.right, slug, session.accessToken)}
                </div>
            </div>

            <div className="flex flex-col gap-8 items-center sm:items-start w-full">
                {renderBlocks(data.slots.bottom, slug, session.accessToken)}
            </div>
        </div>
    );
};
