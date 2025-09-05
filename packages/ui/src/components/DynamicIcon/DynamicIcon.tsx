import * as Icons from 'lucide-react';
import React from 'react';

import { DynamicIconProps } from './DynamicIcon.types';

export const DynamicIcon: React.FC<DynamicIconProps> = ({
    name,
    size = 24,
    color = 'currentColor',
    className,
    strokeWidth = 2,
}) => {
    const Icon = Icons[name as keyof typeof Icons] as React.ComponentType<{
        width?: number;
        height?: number;
        color?: string;
        className?: string;
        style?: React.CSSProperties;
    }>;

    if (!Icon) {
        return null;
    }

    return (
        <Icon
            width={size}
            height={size}
            color={color}
            className={className}
            style={{ minWidth: size, minHeight: size, strokeWidth: strokeWidth }}
        />
    );
};
