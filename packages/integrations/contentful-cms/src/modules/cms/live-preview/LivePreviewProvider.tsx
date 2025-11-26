'use client';

import { ContentfulLivePreviewInitConfig } from '@contentful/live-preview';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';
import React, { ReactNode } from 'react';

interface LivePreviewProviderProps extends Omit<ContentfulLivePreviewInitConfig, 'children'> {
    children: ReactNode;
    locale: string;
    enableInspectorMode?: boolean;
    enableLiveUpdates?: boolean;
}

export function LivePreviewProvider({ children, ...props }: LivePreviewProviderProps) {
    return React.createElement(ContentfulLivePreviewProvider, props, children);
}
