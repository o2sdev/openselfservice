'use client';

import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { InfoCard } from '@o2s/ui/components/Cards/InfoCard';
import { DynamicIcon, DynamicIconProps } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { NotificationSummaryPureProps } from './NotificationSummary.types';

export const NotificationSummaryPure: React.FC<NotificationSummaryPureProps> = ({ ...component }) => {
    const { high, medium, low, critical, layout } = component;

    const isVertical = layout === 'vertical';
    const containerClass = cn('w-full gap-6', isVertical ? 'flex flex-col' : 'grid grid-cols-1 md:grid-cols-2');

    const priorityCards = [
        { key: 'critical' as const, data: critical },
        { key: 'high' as const, data: high },
        { key: 'medium' as const, data: medium },
        { key: 'low' as const, data: low },
    ].filter(({ data }) => data !== undefined);

    return (
        <div className={containerClass}>
            {priorityCards.map(({ key, data }) => (
                <InfoCard
                    key={key}
                    title={data!.title}
                    value={
                        <Typography variant="highlightedBig" className={data!.color}>
                            {data!.value}
                        </Typography>
                    }
                    description={
                        data!.description ? (
                            <div className="line-clamp-3">
                                <RichText content={data!.description} className={data!.color} />
                            </div>
                        ) : undefined
                    }
                    icon={
                        data!.icon ? (
                            <DynamicIcon name={data!.icon as DynamicIconProps['name']} className={data!.color} />
                        ) : undefined
                    }
                />
            ))}
        </div>
    );
};
