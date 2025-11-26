'use client';

import { ReactNode } from 'react';

interface LivePreviewProviderProps {
    children: ReactNode;
    locale: string;
    enableInspectorMode?: boolean;
    enableLiveUpdates?: boolean;
}

export function LivePreviewProvider({ children }: LivePreviewProviderProps) {
    return children;
}
