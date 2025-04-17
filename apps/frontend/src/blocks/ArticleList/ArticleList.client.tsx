import React from 'react';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure: React.FC<ArticleListPureProps> = ({ ...component }) => {
    return <div className="w-full flex flex-col gap-4">ArticleList: {component.id}</div>;
};
