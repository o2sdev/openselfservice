import { useState } from 'react';
import React from 'react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@o2s/ui/elements/tooltip';

import { TooltipHoverProps } from './TooltipHover.types';

export const TooltipHover = ({ trigger, content }: TooltipHoverProps) => {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);

    const handleOpenChange = (open: boolean) => {
        setIsTooltipOpen(open);
    };

    return (
        <Tooltip open={isTooltipOpen} onOpenChange={handleOpenChange}>
            <TooltipTrigger asChild>{trigger(setIsTooltipOpen)}</TooltipTrigger>
            <TooltipContent>{content}</TooltipContent>
        </Tooltip>
    );
};
