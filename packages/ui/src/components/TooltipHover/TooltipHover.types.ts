import React from 'react';

export type TooltipHoverProps = {
    trigger: (setIsOpen: (isOpen: boolean) => void) => React.ReactNode;
    content: React.ReactNode;
};
