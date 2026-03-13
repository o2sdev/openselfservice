import { cva } from 'class-variance-authority';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { ContainerProps } from './Container.types';

const containerVariants = cva('w-full mx-auto', {
    variants: {
        variant: {
            narrow: 'md:max-w-3xl',
            wide: 'md:max-w-7xl',
            full: 'md:max-w-10xl',
        },
        spacing: {
            none: '',
            small: 'py-6 md:py-6',
            medium: 'py-10 md:py-14',
            large: 'py-20 md:py-24',
        },
    },
    defaultVariants: {
        variant: 'full',
        spacing: 'medium',
    },
});

const containerBackgroundVariants = cva('w-full', {
    variants: {
        background: {
            none: '',
            light: 'bg-white !text-black',
            dark: 'bg-black/80 !text-white',
            brand: 'bg-primary/20',
        },
    },
    defaultVariants: {
        background: 'none',
    },
});

export const Container: React.FC<ContainerProps> = ({
    variant = 'full',
    children,
    className,
    spacing = 'none',
    background = 'none',
    theme,
}) => {
    let finalTheme = theme;
    if (theme) {
        finalTheme = `theme-${theme}`;
    }

    return (
        <div className={cn(finalTheme, containerBackgroundVariants({ background }), className)}>
            <div className={containerVariants({ variant, spacing })}>
                <div className="">{children}</div>
            </div>
        </div>
    );
};
