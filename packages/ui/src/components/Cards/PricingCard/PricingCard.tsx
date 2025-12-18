'use client';

import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';
import { Image } from '@o2s/ui/components/Image';
import { LinkList } from '@o2s/ui/components/LinkList';
import { Price } from '@o2s/ui/components/Price';
import { RichText } from '@o2s/ui/components/RichText';
import { TooltipHover } from '@o2s/ui/components/TooltipHover';

import { Badge } from '@o2s/ui/elements/badge';
import { Button } from '@o2s/ui/elements/button';
import { Typography } from '@o2s/ui/elements/typography';

import { FeatureItemProps, PricingCardProps } from './PricingCard.types';

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, description, icon }) => {
    return (
        <div className="flex flex-row gap-3 w-full justify-between">
            <div className="flex flex-row gap-3">
                <div className="mt-0.5">
                    <DynamicIcon name={icon || 'Check'} size={20} className="text-success" />
                </div>

                <Typography variant="small">{title}</Typography>
            </div>

            {description && (
                <TooltipHover
                    key={description}
                    trigger={(setIsOpen) => (
                        <Button
                            variant="link"
                            onClick={() => setIsOpen(true)}
                            className="no-underline hover:no-underline h-auto p-0 pt-0.5 self-start text-muted-foreground"
                        >
                            {icon && <DynamicIcon name="Info" size={16} />}
                        </Button>
                    )}
                    content={<p>{description}</p>}
                />
            )}
        </div>
    );
};

export const PricingCard: React.FC<Readonly<PricingCardProps>> = (props) => {
    const {
        title,
        titleType: TitleTag = 'h3',
        description,
        image,
        price,
        isPromoted,
        tags,
        links,
        featureListTitle,
        featureList,
        LinkComponent,
        hasPriority,
    } = props;

    return (
        <div
            className={cn(
                'flex-1 border-1 border-border rounded-xl h-full',
                isPromoted && 'border-2 border-badge-default-background shadow-lg',
            )}
        >
            <div className="relative flex flex-col gap-8 p-6 h-full">
                {image?.url && (
                    <div className="relative overflow-hidden h-[264px] flex-shrink-0 rounded-lg">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            className="object-cover object-center w-full h-full"
                            priority={hasPriority}
                        />
                    </div>
                )}

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                        {title && (
                            <Typography variant="highlightedSmall" asChild className={cn(isPromoted && 'text-primary')}>
                                <TitleTag>{title}</TitleTag>
                            </Typography>
                        )}

                        {description && (
                            <RichText content={description} baseFontSize="small" className="text-muted-foreground" />
                        )}

                        {tags && tags.length > 0 && (
                            <div className="flex flex-row gap-2 absolute top-0 right-0 p-7">
                                {tags.map((tag) => (
                                    <Badge key={tag.label} variant={tag.variant}>
                                        {tag.label}
                                    </Badge>
                                ))}
                            </div>
                        )}
                    </div>

                    {price?.value !== 0 && (
                        <Typography variant="highlightedMedium">
                            <Price price={price} />
                        </Typography>
                    )}

                    <LinkList className="justify-center sm:flex-col" links={links} LinkComponent={LinkComponent} />
                </div>

                <div className="flex flex-col gap-4">
                    {featureListTitle && <Typography variant="subtitle">{featureListTitle}</Typography>}

                    {featureList && featureList.length > 0 && (
                        <ul className="flex flex-col gap-4">
                            {featureList.map((feature, index) => (
                                <li key={`${feature.title}-${index}`}>
                                    <FeatureItem {...feature} />
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
