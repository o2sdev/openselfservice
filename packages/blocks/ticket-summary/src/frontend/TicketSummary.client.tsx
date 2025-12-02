'use client';

import React from 'react';

import { Mappings } from '@o2s/utils.frontend';

import { cn } from '@o2s/ui/lib/utils';

import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { DynamicIcon, DynamicIconProps } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { TicketSummaryPureProps } from './TicketSummary.types';

export const TicketSummaryPure = ({ ...component }: TicketSummaryPureProps) => {
    const { infoCards, layout } = component;

    if (!infoCards || infoCards.length === 0) {
        return null;
    }

    const isVertical = layout === 'vertical';
    const containerClass = cn('w-full gap-6', isVertical ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-3');

    return (
        <div className={containerClass}>
            {infoCards.map((infoCard, index) => {
                const colorClass =
                    infoCard.variant &&
                    Mappings.TicketSummary.ticketSummaryVariants[
                        infoCard.variant as keyof typeof Mappings.TicketSummary.ticketSummaryVariants
                    ];

                return (
                    <InfoCard
                        key={index}
                        title={infoCard.title}
                        value={
                            <Typography variant="highlightedBig" className={colorClass}>
                                {infoCard.value}
                            </Typography>
                        }
                        description={
                            infoCard.description ? (
                                <div className="line-clamp-3">
                                    <RichText content={infoCard.description} className={colorClass} />
                                </div>
                            ) : undefined
                        }
                        icon={
                            infoCard.icon ? (
                                <DynamicIcon name={infoCard.icon as DynamicIconProps['name']} className={colorClass} />
                            ) : undefined
                        }
                    />
                );
            })}
        </div>
    );
};
