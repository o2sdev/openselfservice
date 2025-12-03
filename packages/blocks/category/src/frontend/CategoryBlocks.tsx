import React from 'react';

import { CategoryBlocksProps } from './Category.types';

export const CategoryBlocks = ({ components, slug, renderBlocks }: CategoryBlocksProps) => {
    if (!components?.length) return null;

    return <div>{renderBlocks(components, slug)}</div>;
};
