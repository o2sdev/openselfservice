'use client';

import React from 'react';

import { DynamicIcon } from '@o2s/ui/components/Media/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import { Input } from '@o2s/ui/elements/input';

import { QuantityInputProps } from './QuantityInput.types';

export const QuantityInput: React.FC<Readonly<QuantityInputProps>> = ({ value, onChange, min = 1, labels }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(e.target.value, 10) || min;
        onChange(newQuantity);
    };

    return (
        <div className="flex items-end gap-2">
            <Button
                variant="outline"
                size="icon"
                onClick={() => onChange(value - 1)}
                disabled={value <= min}
                aria-label={labels.decrease}
            >
                <DynamicIcon name="Minus" size={16} />
            </Button>
            <Input
                type="number"
                min={min}
                value={value}
                onChange={handleInputChange}
                className="w-16 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                aria-label={labels.quantity}
            />
            <Button variant="outline" size="icon" onClick={() => onChange(value + 1)} aria-label={labels.increase}>
                <DynamicIcon name="Plus" size={16} />
            </Button>
        </div>
    );
};
