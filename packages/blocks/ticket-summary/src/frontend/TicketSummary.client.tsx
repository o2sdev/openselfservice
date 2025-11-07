'use client';

import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { DynamicIcon, DynamicIconProps } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { TicketSummaryPureProps } from './TicketSummary.types';

export const TicketSummaryPure: React.FC<TicketSummaryPureProps> = ({ ...component }) => {
    const { infoCards, layout } = component;

    const isVertical = layout === 'vertical';
    const containerClass = cn('w-full gap-6', isVertical ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-3');

    return (
        <div className={containerClass}>
            {infoCards.map((infoCard, index) => (
                <InfoCard
                    key={index}
                    title={infoCard.title}
                    value={
                        <Typography variant="highlightedBig" className={infoCard.color}>
                            {infoCard.value}
                        </Typography>
                    }
                    description={
                        infoCard.description ? (
                            <div className="line-clamp-3">
                                <RichText content={infoCard.description} className={infoCard.color} />
                            </div>
                        ) : undefined
                    }
                    icon={
                        infoCard.icon ? (
                            <DynamicIcon name={infoCard.icon as DynamicIconProps['name']} className={infoCard.color} />
                        ) : undefined
                    }
                />
            ))}
        </div>
    );
};
