import { AlertCircle, CircleCheckBig, Info } from 'lucide-react';
import React from 'react';

import { Typography } from '@o2s/ui/components/typography';
import { cn } from '@o2s/ui/lib/utils';

import { NotificationProps } from './Notification.types';

const ICON_MAP = {
    destructive: AlertCircle,
    positive: CircleCheckBig,
    default: Info,
} as const;

const VARIANT_STYLES = {
    destructive: 'text-destructive',
    positive: 'text-green-700',
    default: 'text-foreground',
} as const;

export const Notification: React.FC<Readonly<NotificationProps>> = ({
    title,
    variant = 'default',
    showIcon = true,
}) => {
    if (!title) {
        return null;
    }

    const Icon = ICON_MAP[variant];
    const iconStyles = cn('size-6', VARIANT_STYLES[variant]);
    const textStyles = cn(VARIANT_STYLES[variant]);

    return (
        <div className="flex gap-2">
            {showIcon && (
                <div className="size-6">
                    <Icon className={iconStyles} />
                </div>
            )}
            <div>
                <Typography className={textStyles}>{title}</Typography>
            </div>
        </div>
    );
};

Notification.displayName = 'Notification';
