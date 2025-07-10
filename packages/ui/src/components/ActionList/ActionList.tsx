import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@o2s/ui/elements/dropdown-menu';

import { ActionListProps } from './ActionList.types';

export const ActionList: React.FC<Readonly<ActionListProps>> = ({
    className,
    showMoreLabel,
    visibleActions,
    dropdownActions,
    triggerVariant = 'outline',
}) => {
    if (!visibleActions.length && !dropdownActions.length) {
        return null;
    }

    return (
        <div className={cn('w-full sm:w-auto flex flex-col sm:flex-row-reverse gap-4 align-end', className)}>
            {visibleActions[0]}

            <div className="flex flex-row sm:flex-row-reverse gap-4">
                {visibleActions[1]}

                {dropdownActions.length > 0 && (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant={triggerVariant} size="icon" aria-label={showMoreLabel}>
                                <DynamicIcon name="MoreVertical" size={16} />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="min-w-50">
                            {dropdownActions.map((action) => (
                                <DropdownMenuItem asChild key={action?.toString()}>
                                    {action}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </div>
    );
};
