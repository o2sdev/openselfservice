import React, { JSX } from 'react';

export interface FormFieldWrapperProps {
    title: string;
    className?: string;
    tag?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
    requiredLabel?: string;
    optionalLabel?: string;
    labelClassName?: string;
    htmlFor?: string;
}
