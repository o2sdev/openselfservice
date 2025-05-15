import React from 'react';

import { CMS } from '@o2s/framework/modules';

import { renderBlocks } from '@/blocks/renderBlocks';

export const CategoryBlocks: React.FC<{
    components?: CMS.Model.CategoryBlock.CategoryBlock['components'];
    slug: string[];
    accessToken: string;
}> = ({ components, slug, accessToken }) => {
    if (!components?.length) return null;

    return <div>{renderBlocks(components, slug, accessToken)}</div>;
};
