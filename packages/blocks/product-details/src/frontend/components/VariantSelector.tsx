import React from 'react';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@o2s/ui/elements/select';
import { Typography } from '@o2s/ui/elements/typography';

interface VariantSelectorProps {
    variants: { id: string; title: string; slug: string; link?: string; options?: Record<string, string> }[];
    currentSlug?: string;
    label: string;
    onVariantChange: (link: string) => void;
}

export const VariantSelector: React.FC<VariantSelectorProps> = ({ variants, currentSlug, label, onVariantChange }) => {
    return (
        <div className="flex flex-col gap-2">
            <Typography className="text-sm text-muted-foreground">{label}</Typography>
            <Select
                value={currentSlug}
                onValueChange={(slug) => {
                    const variant = variants.find((v) => v.slug === slug);
                    if (variant?.link) {
                        onVariantChange(variant.link);
                    }
                }}
            >
                <SelectTrigger>
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    {variants.map((variant) => (
                        <SelectItem key={variant.id} value={variant.slug}>
                            {variant.title}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
