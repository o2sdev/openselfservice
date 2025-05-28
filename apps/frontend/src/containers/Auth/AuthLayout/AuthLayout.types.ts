import React from 'react';

export interface AuthLayoutProps {
    layout?: 'main-side' | 'side-main';
    toolbar?: React.ReactNode;
    sideVisibleOnMobile?: boolean;
    sideClassName?: string;
    children: [React.ReactNode, React.ReactNode];
}
