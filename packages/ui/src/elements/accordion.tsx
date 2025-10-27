import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { JSX } from 'react';

import { cn } from '@o2s/ui/lib/utils';

const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    ref?: React.Ref<React.ComponentRef<typeof AccordionPrimitive.Item>>;
};
const AccordionItem = ({ className, ref, ...props }: AccordionItemProps) => (
    <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
);

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    tag?: keyof JSX.IntrinsicElements;
}

type AccordionTriggerOwnProps = AccordionTriggerProps & {
    ref?: React.Ref<React.ComponentRef<typeof AccordionPrimitive.Trigger>>;
};
const AccordionTrigger = ({ className, tag = 'h3', children, ref, ...props }: AccordionTriggerOwnProps) => {
    const Comp = tag;

    return (
        <AccordionPrimitive.Header className="flex" asChild>
            <Comp>
                <AccordionPrimitive.Trigger
                    ref={ref}
                    className={cn(
                        'flex flex-1 gap-2 items-center justify-between py-4 font-medium text-left transition-all underline-offset-4 hover:underline [&[data-state=open]>svg]:rotate-180',
                        className,
                    )}
                    {...props}
                >
                    {children}
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
            </Comp>
        </AccordionPrimitive.Header>
    );
};

type AccordionContentProps = React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> & {
    ref?: React.Ref<React.ComponentRef<typeof AccordionPrimitive.Content>>;
};
const AccordionContent = ({ className, children, ref, ...props }: AccordionContentProps) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
