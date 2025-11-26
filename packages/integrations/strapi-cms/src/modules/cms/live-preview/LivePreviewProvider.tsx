'use client';

import { ReactNode } from 'react';

interface LivePreviewProviderProps {
    children: ReactNode;
}

export function LivePreviewProvider({ children }: LivePreviewProviderProps) {
    return children;
}
