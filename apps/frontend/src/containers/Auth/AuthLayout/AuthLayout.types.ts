import React from 'react';

export interface AuthLayoutProps {
    layout?: 'main-side' | 'side-main';
    toolbar?: React.ReactNode;
    children: [React.ReactNode, React.ReactNode];
}
