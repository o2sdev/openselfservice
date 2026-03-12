'use client';

import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { FeatureSectionGridPureProps } from './FeatureSectionGrid.types';

export const FeatureSectionGridPure: React.FC<FeatureSectionGridPureProps> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { preTitle, title, description, featureList, inverted, iconBorder } = component;

    return (
        <div className={cn('w-full flex flex-col gap-12 lg:gap-16', inverted ? 'lg:flex-row-reverse' : ' lg:flex-row')}>
            <div className="h-full flex flex-col gap-4 md:gap-5">
                {preTitle && <Typography variant="subtitle">{preTitle}</Typography>}

                {title && (
                    <Typography variant="highlightedMedium" asChild>
                        <h2>{title}</h2>
                    </Typography>
                )}

                {description && (
                    <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                )}
            </div>

            {featureList && featureList.length > 0 && (
                <ul className="grid grid-rows-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                    {featureList.map((feature, index) => (
                        <li key={`${feature.title}-${index}`} className="flex flex-row gap-4 items-start">
                            <div
                                className={cn(
                                    iconBorder ? 'p-2 border-1 border-border rounded-sm shadow-xs' : 'mt-0.5',
                                )}
                            >
                                <DynamicIcon name={feature.icon || 'Check'} size={20} className="text-primary" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <Typography variant="subtitle">{feature.title}</Typography>
                                {feature.description && <RichText content={feature.description} baseFontSize="body" />}
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
