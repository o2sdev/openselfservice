import { IconName, DynamicIcon as LucideDynamicIcon, dynamicIconImports } from 'lucide-react/dynamic';
import React from 'react';

import { DynamicIconProps } from './DynamicIcon.types';

const toKebabCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

export const DynamicIcon: React.FC<DynamicIconProps> = ({
    name,
    size = 24,
    color = 'currentColor',
    className,
    strokeWidth = 2,
}) => {
    const iconName = toKebabCase(name) as IconName;

    if (!(iconName in dynamicIconImports)) {
        return null;
    }

    return (
        <span
            style={{
                width: size,
                height: size,
                display: 'inline-flex',
            }}
        >
            <LucideDynamicIcon
                name={iconName}
                size={size}
                color={color}
                className={className}
                strokeWidth={strokeWidth}
            />
        </span>
    );
};
