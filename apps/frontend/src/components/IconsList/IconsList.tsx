import React from 'react';

import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '../DynamicIcon/DynamicIcon';

import { IconsListProps } from './IconsList.types';

export const IconsList: React.FC<Readonly<IconsListProps>> = ({
    header,
    icons,
    className,
    listClassName,
    listItemClassName,
}) => {
    return (
        <div className={cn('flex flex-col gap-6', className)}>
            {header && <div className="flex flex-col gap-2">{header}</div>}

            <ul className={cn('flex flex-col gap-6', listClassName)}>
                {icons.map((icon, index) => (
                    <li key={`${icon.name}-${index}`} className={cn('flex items-start gap-5', listItemClassName)}>
                        <div className="flex size-10 items-center justify-center bg-background rounded-md shadow-sm">
                            <DynamicIcon
                                name={icon.name}
                                size={icon.size || 24}
                                color={icon.color}
                                className={icon.className}
                            />
                        </div>

                        <div className="flex flex-col gap-2 flex-1">
                            <Typography variant="body" className="font-medium text-foreground">
                                {icon.title}
                            </Typography>
                            <Typography variant="body" className="font-normal text-muted-foreground">
                                {icon.description}
                            </Typography>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
