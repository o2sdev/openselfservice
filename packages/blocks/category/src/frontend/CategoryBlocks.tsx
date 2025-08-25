import React from 'react';

import { CategoryBlocksProps } from './Category.types';

export const CategoryBlocks: React.FC<CategoryBlocksProps> = ({ components, slug, renderBlocks }) => {
    if (!components?.length) return null;

    return <div>{renderBlocks(components, slug)}</div>;
};
