import { ReactNode } from 'react';

export interface FieldsetProps {
    legend: string;
    children: ReactNode;
    ariaLabel?: string;
    optionalLabel?: string;
}

export type FieldsetVariant = 'primary' | 'secondary';
