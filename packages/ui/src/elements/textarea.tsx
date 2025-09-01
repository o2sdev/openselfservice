import * as React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';

const Textarea = React.forwardRef<HTMLTextAreaElement, React.ComponentProps<'textarea'>>(
    ({ className, ...props }, ref) => {
        return (
            <textarea
                className={cn(
                    'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
                    className,
                )}
                ref={ref}
                {...props}
            />
        );
    },
);
Textarea.displayName = 'Textarea';

interface TextareaWithLabelProps extends React.ComponentProps<'textarea'> {
    label: string | React.ReactNode;
    labelClassName?: string;
}

const TextareaWithLabel = React.forwardRef<HTMLTextAreaElement, TextareaWithLabelProps>(
    ({ className, label, labelClassName, id, ...props }, ref) => {
        const generatedId = React.useId();
        const textareaId = id || generatedId;

        return (
            <div className="grid gap-2">
                <Label htmlFor={textareaId} className={labelClassName}>
                    {label}
                </Label>
                <Textarea id={textareaId} ref={ref} {...props} className={className} />
            </div>
        );
    },
);
TextareaWithLabel.displayName = 'TextareaWithLabel';

export { Textarea, TextareaWithLabel };
