import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { Label } from '@o2s/ui/elements/label';
import { Typography } from '@o2s/ui/elements/typography';

import type { RadioTileGroupProps } from './RadioTile.types';

export const RadioTileGroup: React.FC<Readonly<RadioTileGroupProps>> = ({
    value,
    onValueChange,
    options,
    hasError,
    disabled,
    className,
}) => {
    return (
        <RadioGroupPrimitive.Root
            value={value}
            onValueChange={onValueChange}
            disabled={disabled}
            className={cn('flex flex-col gap-3', className)}
        >
            {options.map((option) => {
                const isSelected = value === option.id;
                const itemId = `radio-tile-${option.id}`;
                return (
                    <div
                        key={option.id}
                        className={cn(
                            'rounded-lg border-2 transition-colors',
                            isSelected
                                ? 'border-primary bg-primary/5'
                                : 'border-border bg-background hover:border-primary/50',
                            hasError && !isSelected && 'border-destructive',
                            disabled && 'opacity-50 cursor-not-allowed',
                        )}
                    >
                        <Label htmlFor={itemId} className="flex items-start gap-3 cursor-pointer w-full p-4">
                            <RadioGroupPrimitive.Item
                                id={itemId}
                                value={option.id}
                                className={cn(
                                    'mt-0.5 shrink-0 aspect-square h-4 w-4 rounded-full border border-primary text-primary',
                                    'ring-offset-background focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                    'disabled:cursor-not-allowed cursor-pointer',
                                )}
                            >
                                <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                                    <Circle className="h-2.5 w-2.5 fill-current text-current" />
                                </RadioGroupPrimitive.Indicator>
                            </RadioGroupPrimitive.Item>
                            <div className="flex items-start justify-between gap-4 min-w-0 flex-1">
                                <div className="flex flex-col gap-1 min-w-0">
                                    <Typography variant="p" className="font-medium leading-tight">
                                        {option.label}
                                    </Typography>
                                    {option.description && (
                                        <Typography variant="small" className="text-muted-foreground">
                                            {option.description}
                                        </Typography>
                                    )}
                                </div>
                                {option.extra && <div className="shrink-0">{option.extra}</div>}
                            </div>
                        </Label>
                    </div>
                );
            })}
        </RadioGroupPrimitive.Root>
    );
};
