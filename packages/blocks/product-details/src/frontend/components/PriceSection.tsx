import { useTranslations } from 'next-intl';
import React from 'react';

import type { Models } from '@o2s/framework/modules';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Price } from '@o2s/ui/components/Price';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Button } from '@o2s/ui/elements/button';
import { Separator } from '@o2s/ui/elements/separator';
import { Typography } from '@o2s/ui/elements/typography';

interface PriceSectionProps {
    price: Models.Price.Price;
    priceLabel: string;
    actionButton?: {
        label: string;
        variant?: 'default' | 'secondary' | 'destructive' | 'outline';
        icon?: string;
    };
    onAddToCart?: () => void;
    addToCartLabel?: string;
    isOutOfStock?: boolean;
    isAddingToCart?: boolean;
    className?: string;
}

export const PriceSection: React.FC<PriceSectionProps> = ({
    price,
    priceLabel,
    actionButton,
    onAddToCart,
    addToCartLabel,
    isOutOfStock = false,
    isAddingToCart = false,
    className,
}) => {
    const t = useTranslations();

    return (
        <div className={className}>
            <div className="flex flex-col gap-1 mb-4 items-end">
                <Typography className="text-muted-foreground">{priceLabel}</Typography>
                <Typography variant="h2" className="text-primary whitespace-nowrap">
                    <Price price={price} />
                </Typography>
            </div>
            {(actionButton || onAddToCart) && (
                <>
                    <Separator />
                    <div className="flex flex-col gap-3 mt-6">
                        {onAddToCart && addToCartLabel ? (
                            <Button
                                variant="default"
                                size="lg"
                                className="w-full"
                                onClick={onAddToCart}
                                disabled={isOutOfStock || isAddingToCart}
                            >
                                {addToCartLabel}
                            </Button>
                        ) : actionButton ? (
                            <TooltipHover
                                trigger={(setIsOpen) => (
                                    <Button
                                        variant={actionButton.variant || 'default'}
                                        size="lg"
                                        className="w-full"
                                        onClick={() => setIsOpen(true)}
                                        disabled={isOutOfStock}
                                    >
                                        {actionButton.icon && (
                                            <DynamicIcon name={actionButton.icon} size={20} className="mr-2" />
                                        )}
                                        {actionButton.label}
                                    </Button>
                                )}
                                content={<p>{t('general.comingSoon')}</p>}
                            />
                        ) : null}
                    </div>
                </>
            )}
        </div>
    );
};
