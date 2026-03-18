import { Models } from '@o2s/framework/modules';
import React from 'react';

import { Models as FrontendModels } from '@o2s/utils.frontend';

export interface ContentSectionMeta {
    __id: string;
    title?: string;
    description?: string;
    categoryLink?: string;
}

export interface ContentSectionProps {
    title?: string;
    description?: string;
    categoryLink?: Models.Link.Link;
    children: React.ReactNode;
    LinkComponent: FrontendModels.Link.LinkComponent;
    meta?: ContentSectionMeta;
}
