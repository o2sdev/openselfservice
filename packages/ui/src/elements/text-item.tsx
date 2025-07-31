import React, { JSX } from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Typography } from '@o2s/ui/elements/typography';

interface TextItemContentProps {
    title: string;
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
}

export function TextItem({ title, children, tag = 'div', className, ...props }: Readonly<TextItemContentProps>) {
    const Comp = tag;

    return (
        <Comp
            className={cn(
                'flex flex-col gap-2 md:grid md:grid-cols-2 items-baseline pt-4 not-last:border-b not-last:pb-4',
                className,
            )}
            {...props}
        >
            <div>
                <Typography variant="small" className="font-semibold">
                    {title}
                </Typography>
            </div>
            <div>{children}</div>
        </Comp>
    );
}
