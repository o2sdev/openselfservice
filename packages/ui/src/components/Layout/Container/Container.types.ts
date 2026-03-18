import React from 'react';

export interface ContainerProps {
    variant?: 'full' | 'narrow' | 'wide';
    children: React.ReactNode;
    className?: string;
    spacing?: 'none' | 'small' | 'medium' | 'large';
    background?: 'none' | 'light' | 'dark' | 'brand';
    theme?: string;
}
