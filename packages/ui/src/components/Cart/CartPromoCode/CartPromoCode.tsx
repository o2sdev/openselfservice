'use client';

import React, { useState } from 'react';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Button } from '@o2s/ui/elements/button';
import { Input } from '@o2s/ui/elements/input';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

import { CartPromoCodeProps } from './CartPromoCode.types';

export const CartPromoCode: React.FC<Readonly<CartPromoCodeProps>> = ({
    promotions,
    labels,
    isLoading = false,
    onApply,
    onRemove,
}) => {
    const [code, setCode] = useState('');
    const [error, setError] = useState<string | undefined>();

    const handleApply = async () => {
        const trimmed = code.trim();
        if (!trimmed) return;

        setError(undefined);
        try {
            await onApply(trimmed.toUpperCase());
            setCode('');
        } catch {
            setError(labels.invalidCodeError);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleApply();
        }
    };

    const hasPromotions = promotions && promotions.length > 0;

    return (
        <div className="flex flex-col gap-4 p-6 bg-card rounded-lg border border-border">
            <Typography variant="h2">{labels.title}</Typography>

            <div className="flex gap-2">
                <div className="flex-1">
                    <Input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={labels.inputPlaceholder}
                        disabled={isLoading}
                        hasError={!!error}
                        className="uppercase placeholder:normal-case"
                    />
                </div>
                <Button variant="outline" onClick={handleApply} disabled={isLoading || !code.trim()}>
                    {labels.applyButton}
                </Button>
            </div>

            {error && (
                <Typography variant="small" className="-mt-2 text-destructive">
                    {error}
                </Typography>
            )}

            {hasPromotions && (
                <>
                    <Separator />
                    <div className="flex flex-col gap-2">
                        {promotions.map((promo) => (
                            <div key={promo.code} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <DynamicIcon name="Tag" size={14} className="shrink-0 text-green-600" />
                                    <Typography variant="small" className="text-green-600">
                                        {promo.code}
                                        {promo.name && ` — ${promo.name}`}
                                    </Typography>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-6 w-6"
                                    disabled={isLoading}
                                    aria-label={labels.removeLabel}
                                    onClick={() => onRemove(promo.code)}
                                >
                                    <DynamicIcon name="X" size={14} />
                                </Button>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
