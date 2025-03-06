import { cva } from 'class-variance-authority';
import React from 'react';

import { ContainerProps } from './Container.types';

const containerVariants = cva('w-full m-auto', {
    variants: {
        variant: {
            full: 'w-full',
            narrow: 'max-w-3xl',
        },
    },
    defaultVariants: {
        variant: 'full',
    },
});

export const Container: React.FC<ContainerProps> = ({ variant = 'full', children }) => {
    return (
        <div className={containerVariants({ variant })}>
            <div className="">{children}</div>
        </div>
    );
};
