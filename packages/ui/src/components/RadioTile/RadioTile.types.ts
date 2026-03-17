import React from 'react';

export interface RadioTileOption {
    id: string;
    label: string;
    description?: string;
    extra?: React.ReactNode;
}

export interface RadioTileGroupProps {
    value: string;
    onValueChange: (value: string) => void;
    options: RadioTileOption[];
    hasError?: boolean;
    disabled?: boolean;
    className?: string;
}
