import * as Icons from 'lucide-react';

import { IconProps } from './DynamicIcon.types';

export const DynamicIcon = ({ name, size = 24, color = 'currentColor', className }: Readonly<IconProps>) => {
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
            style={{ minWidth: size, minHeight: size }}
        />
    );
};
