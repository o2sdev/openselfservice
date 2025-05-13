import * as Icons from 'lucide-react';

import { IconProps } from './DynamicIcon.types';

export const DynamicIcon = ({ name, size = 24, color = 'currentColor', className }: Readonly<IconProps>) => {
    const Icon = Icons[name as keyof typeof Icons] as React.ComponentType<{
        size?: number;
        color?: string;
        className?: string;
    }>;

    if (!Icon) {
        return null;
    }

    return <Icon size={size} color={color} className={className} />;
};
