import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@o2s/ui/elements/dropdown-menu';

import type { MoreActionsMenuProps } from './MoreActionsMenu.types';

export const MoreActionsMenu: React.FC<Readonly<MoreActionsMenuProps>> = ({
    className,
    showMoreLabel,
    actions,
    triggerVariant = 'ghost',
    triggerIcon = 'MoreVertical',
    open,
    onOpenChange,
}) => {
    if (actions.length === 0) return null;

    return (
        <DropdownMenu open={open} onOpenChange={onOpenChange}>
            <DropdownMenuTrigger asChild>
                <Button variant={triggerVariant} size="icon" aria-label={showMoreLabel} className={className}>
                    <DynamicIcon name={triggerIcon} size={16} />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="min-w-50 flex flex-col">
                {actions.map((action, index) => (
                    <DropdownMenuItem asChild key={index.toString()}>
                        {action}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
