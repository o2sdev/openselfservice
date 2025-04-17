import React from 'react';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<QuickLinksPureProps> = ({ ...component }) => {
    return <div className="w-full flex flex-col gap-4">QuickLinks: {component.id}</div>;
};
