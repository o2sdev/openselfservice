import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';
import { Typography } from '@o2s/ui/elements/typography';

import { FormFieldWrapperProps } from './FormFieldWrapper.types';

export function FormFieldWrapper({
    title,
    children,
    tag = 'div',
    className,
    labelClassName,
    requiredLabel,
    optionalLabel,
    htmlFor,
    ...props
}: Readonly<FormFieldWrapperProps>) {
    const Comp = tag;

    const labelContent = (
        <>
            {title} {requiredLabel && `(${requiredLabel})`} {optionalLabel && `(${optionalLabel})`}
        </>
    );

    return (
        <Comp
            className={cn('flex flex-col gap-2 md:grid md:grid-cols-2 pt-4 not-last:border-b not-last:pb-4', className)}
            {...props}
        >
            <div>
                {htmlFor ? (
                    <Label htmlFor={htmlFor} className={cn('text-sm font-semibold', labelClassName)}>
                        {labelContent}
                    </Label>
                ) : (
                    <Typography variant="small" className={cn('font-semibold', labelClassName)}>
                        {labelContent}
                    </Typography>
                )}
            </div>
            <div>{children}</div>
        </Comp>
    );
}
