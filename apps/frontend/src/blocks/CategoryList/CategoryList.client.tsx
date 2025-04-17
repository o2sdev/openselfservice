import React from 'react';

import { CategoryListPureProps } from './CategoryList.types';

export const CategoryListPure: React.FC<CategoryListPureProps> = ({ ...component }) => {
    return <div className="w-full flex flex-col gap-4">CategoryList: {component.id}</div>;
};
