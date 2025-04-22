import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { TailProps } from './Tail.types';

export const Tail: React.FC<TailProps> = ({ children, className }) => {
    const style = cn('rounded-lg border bg-card text-card-foreground !shadow-sm', className);
    // const style = cn('flex flex-col transition-colors duration-200 bg-white text-gray-900 rounded-lg', className);

    return <div className={style}>{children}</div>;
};
