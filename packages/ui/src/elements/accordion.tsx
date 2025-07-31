import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import * as React from 'react';
import { JSX } from 'react';

import { cn } from '@o2s/ui/lib/utils';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item ref={ref} className={cn('border-b', className)} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

export interface AccordionTriggerProps extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> {
    tag?: keyof JSX.IntrinsicElements;
}

const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, AccordionTriggerProps>(
    ({ className, tag = 'h3', children, ...props }, ref) => {
        const Comp = tag;

        return (
            <AccordionPrimitive.Header className="flex" asChild>
                <Comp>
                    <AccordionPrimitive.Trigger
                        ref={ref}
                        className={cn(
                            'flex flex-1 gap-2 items-center justify-between py-4 font-medium text-left transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
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
    },
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
    React.ElementRef<typeof AccordionPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Content
        ref={ref}
        className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
        {...props}
    >
        <div className={cn('pb-4 pt-0', className)}>{children}</div>
    </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
