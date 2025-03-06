import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as React from 'react';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;

const CollapsibleContent = (props: React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>) => (
    <CollapsiblePrimitive.CollapsibleContent
        className="overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down"
        {...props}
    />
);

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
