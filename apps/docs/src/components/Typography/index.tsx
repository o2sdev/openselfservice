import clsx from 'clsx';
import React from 'react';

interface TypographyProps {
    children: React.ReactNode;
    className?: string;
}

export function H1({ children, className }: TypographyProps) {
    return <h1 className={clsx('mb-12 font-extrabold leading-110', className)}>{children}</h1>;
}

export function H2({ children, className }: TypographyProps) {
    return <h2 className={clsx(className, 'mb-10 md:mb-20 font-semibold leading-120')}>{children}</h2>;
}

export function H3({ children, className }: TypographyProps) {
    return <h3 className={clsx('mb-6 font-semibold  leading-150', className)}>{children}</h3>;
}

export function H4({ children, className }: TypographyProps) {
    return <h4 className={clsx('mb-6 font-normal  leading-120', className)}>{children}</h4>;
}

export function Body({ children, className }: TypographyProps) {
    return <p className={clsx('', className)}>{children}</p>;
}

export function InputCaption({ children, className }: TypographyProps) {
    return <span className={clsx('', className)}>{children}</span>;
}
