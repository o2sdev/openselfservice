'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Image } from '@o2s/ui/components/Image';
import { LinkList } from '@o2s/ui/components/LinkList';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { FeatureSectionPureProps } from './FeatureSection.types';

export const FeatureSectionPure: React.FC<FeatureSectionPureProps> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, description, image, featureList, links, preTitle, inverted, iconBorder } = component;

    const isImageAvailable = image && image.url;

    return (
        <div
            className={cn(
                'h-full w-full flex flex-col lg:flex-row gap-12 lg:gap-16',
                inverted && 'lg:flex-row-reverse',
            )}
        >
            <div className="w-full flex flex-col justify-center flex-1">
                <div className={cn('w-full flex flex-col gap-8 md:gap-6', !isImageAvailable && 'mx-auto md:gap-16')}>
                    {(preTitle || title || description) && (
                        <div
                            className={cn(
                                'h-full flex flex-col gap-5 md:gap-4',
                                !isImageAvailable && 'items-center text-center max-w-2xl mx-auto',
                            )}
                        >
                            {preTitle && (
                                <Typography variant="body" className="text-muted-foreground">
                                    {preTitle}
                                </Typography>
                            )}

                            {title && (
                                <Typography variant="highlightedMedium" asChild>
                                    <h2>{title}</h2>
                                </Typography>
                            )}

                            {description && (
                                <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                            )}
                        </div>
                    )}

                    {featureList && featureList.length > 0 && (
                        <ul
                            className={cn(
                                'grid grid-rows-1 gap-8 md:gap-4',
                                !isImageAvailable && 'grid-cols-1 gap-6',
                                !isImageAvailable && featureList.length === 2 && 'md:grid-cols-2',
                                !isImageAvailable && featureList.length === 3 && 'md:grid-cols-3',
                                !isImageAvailable && featureList.length >= 4 && 'md:grid-cols-2 lg:grid-cols-4',
                            )}
                        >
                            {featureList.map((feature, index) => (
                                <li
                                    key={`${feature.title}-${index}`}
                                    className={cn(
                                        'flex flex-row gap-3 items-start',
                                        !isImageAvailable && '!flex-col gap-5 items-center text-center',
                                    )}
                                >
                                    <div
                                        className={cn(
                                            iconBorder ? 'p-2 border-1 border-border rounded-sm shadow-xs' : 'mt-0.5',
                                        )}
                                    >
                                        <DynamicIcon
                                            name={feature.icon || 'Check'}
                                            size={20}
                                            className="text-primary"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Typography variant="subtitle">{feature.title}</Typography>
                                        <RichText content={feature.description} baseFontSize="body" />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}

                    <LinkList
                        className={cn(
                            !isImageAvailable && 'justify-center',
                            isImageAvailable &&
                                links &&
                                links.length === 1 &&
                                links[0]?.variant === 'link' &&
                                'items-start',
                        )}
                        links={links}
                        LinkComponent={LinkComponent}
                    />
                </div>
            </div>

            {isImageAvailable && (
                <div className="w-full flex flex-col justify-center flex-1">
                    <Image
                        src={image.url}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="object-scale-down rounded-xl"
                        sizes="(max-width: 64rem): 100vw, 50vw"
                    />
                </div>
            )}
        </div>
    );
};
