'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { FeatureCard } from '@o2s/ui/components/Cards';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { BentoGridPureProps } from './BentoGrid.types';

export const BentoGridPure: React.FC<BentoGridPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { title, description, items, preTitle } = component;
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <div className="w-full flex flex-col gap-8 md:gap-12">
            <div className={cn('h-full max-w-xl mx-auto flex flex-col gap-5 md:gap-4 text-center')}>
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
            {items && items.length > 0 && (
                <ul
                    className={cn(
                        'grid grid-flow-row mx-auto gap-3 grid-cols-[repeat(1,minmax(250px,500px))]',
                        items.length === 2 && 'lg:grid-cols-[repeat(2,minmax(250px,500px))]',
                        items.length >= 3 && 'lg:grid-cols-[repeat(3,minmax(250px,500px))]',
                    )}
                >
                    {items.map(
                        (item, index) =>
                            item.title && (
                                <li
                                    key={`${item.title}-${index}`}
                                    className={cn(
                                        'w-full h-full',
                                        index === 3 || index === 6 || index === 10 ? 'lg:col-span-2' : '',
                                    )}
                                >
                                    <FeatureCard
                                        title={item.title}
                                        description={item.description}
                                        image={item.image}
                                        link={item.link}
                                        LinkComponent={LinkComponent}
                                    />
                                </li>
                            ),
                    )}
                </ul>
            )}
        </div>
    );
};
