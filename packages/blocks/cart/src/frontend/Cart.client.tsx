'use client';

import React from 'react';

import { Price } from '@o2s/ui/components/Price';

import { Typography } from '@o2s/ui/elements/typography';

import { CartPureProps } from './Cart.types';

type PriceProps = React.ComponentProps<typeof Price>;
type PriceCurrency = NonNullable<PriceProps['price']>['currency'];

/**
 * CartClient
 *
 * Minimal client-side renderer for the cart block.
 * For now it only renders basic summary information based on block props and
 * does not integrate with a real cart API yet.
 * TODO: Wire this component to a real cart data source (SDK/integration) and
 *       extend the UI with full cart items listing.
 */

interface CartViewProps {
    title?: string;
    subtitle?: string;
    summary?: {
        title: string;
        subtotalLabel: string;
        taxLabel: string;
        totalLabel: string;
    };
    empty?: {
        title: string;
        description?: string;
    };
    /**
     * Currency code used for displaying prices (e.g. "PLN", "EUR").
     * If not provided, the component will fall back to "PLN".
     */
    currency?: PriceCurrency;
}

export const CartClient: React.FC<CartPureProps> = (props) => {
    const { title, subtitle, summary, empty, currency: providedCurrency } = props as CartViewProps;
    const currency: PriceCurrency = (providedCurrency ?? 'PLN') as PriceCurrency;

    // If there is no summary data yet, show a simple empty state.
    if (!summary) {
        if (!empty) {
            return null;
        }

        return (
            <div className="w-full flex flex-col gap-4 items-center justify-center py-8">
                <Typography variant="h2">{empty.title}</Typography>
                {empty.description && (
                    <Typography variant="body" className="text-muted-foreground text-center max-w-md">
                        {empty.description}
                    </Typography>
                )}
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <Typography variant="h1">{title}</Typography>
                {subtitle && (
                    <Typography variant="large" className="text-muted-foreground">
                        {subtitle}
                    </Typography>
                )}
            </div>

            <div className="flex flex-col gap-3 p-4 rounded-lg border border-border bg-card max-w-md">
                <div className="flex items-center justify-between">
                    <Typography variant="small" className="text-muted-foreground">
                        {summary.subtotalLabel}
                    </Typography>
                    <Typography variant="body">
                        <Price price={{ value: 0, currency }} />
                    </Typography>
                </div>
                <div className="flex items-center justify-between">
                    <Typography variant="small" className="text-muted-foreground">
                        {summary.taxLabel}
                    </Typography>
                    <Typography variant="body">
                        <Price price={{ value: 0, currency }} />
                    </Typography>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-border mt-1">
                    <Typography variant="h3">{summary.totalLabel}</Typography>
                    <Typography variant="h2" className="text-primary">
                        <Price price={{ value: 0, currency }} />
                    </Typography>
                </div>
            </div>
        </div>
    );
};
