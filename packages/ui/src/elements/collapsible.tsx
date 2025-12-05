import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import { cx } from 'class-variance-authority';
import * as React from 'react';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

export interface CollapsibleContentProps extends React.ComponentPropsWithoutRef<
    typeof CollapsiblePrimitive.CollapsibleContent
> {
    defaultOpen?: boolean;
}

const CollapsibleContent = ({ defaultOpen, ...props }: CollapsibleContentProps) => (
    <CollapsiblePrimitive.CollapsibleContent
        className={cx(
            'overflow-hidden transition-all data-[state=closed]:animate-collapsible-up',
            !defaultOpen && 'data-[state=open]:animate-collapsible-down',
        )}
        {...props}
    />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
