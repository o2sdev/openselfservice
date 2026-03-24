import React from 'react';

import { Badge } from '@o2s/ui/elements/badge';
import { Typography } from '@o2s/ui/elements/typography';

interface ProductInfoProps {
    name: string;
    subtitle?: string;
    badges?: { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }[];
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ name, subtitle, badges }) => {
    return (
        <>
            <Typography variant="h1">{name}</Typography>
            {subtitle && (
                <Typography variant="large" className="text-muted-foreground">
                    {subtitle}
                </Typography>
            )}
            {badges && badges.length > 0 && (
                <ul className="flex flex-wrap gap-2 list-none">
                    {badges.map((badge, index) => (
                        <li key={index}>
                            <Badge variant={badge.variant}>{badge.label}</Badge>
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};
