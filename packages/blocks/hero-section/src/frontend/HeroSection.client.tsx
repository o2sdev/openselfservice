'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { Utils } from '@o2s/utils.frontend';

import { cn } from '@o2s/ui/lib/utils';

import { Image } from '@o2s/ui/components/Image';
import { LinkList } from '@o2s/ui/components/LinkList';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { HeroSectionPureProps } from './HeroSection.types';

export const HeroSectionPure: React.FC<HeroSectionPureProps> = ({
    locale,
    accessToken,
    routing,
    hasPriority,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    const { title, highlightedText, subtitle, description, image, links, headingType, preTitle, inverted } = component;

    const HeadingComponent = headingType ? headingType : 'h2';
    const isImageAvailable = image && image.url;

    return (
        <div
            className={cn(
                'h-full w-full flex flex-col lg:flex-row gap-12 lg:gap-16',
                inverted && 'lg:flex-row-reverse',
            )}
        >
            <div className="w-full flex flex-col justify-center flex-1">
                <div className={cn('w-full flex flex-col gap-8 md:gap-6', !isImageAvailable && 'mx-auto max-w-2xl')}>
                    <div
                        className={cn(
                            'h-full flex flex-col gap-5 md:gap-4',
                            !isImageAvailable && 'items-center text-center',
                        )}
                    >
                        {preTitle && (
                            <Typography variant="body" className="text-muted-foreground">
                                {preTitle}
                            </Typography>
                        )}

                        {title && (
                            <Typography variant={headingType === 'h1' ? 'highlightedBig' : 'highlightedMedium'} asChild>
                                <HeadingComponent>
                                    {Utils.StringReplace.reactStringReplace(title, {
                                        highlightedText: <span className="text-primary">{highlightedText}</span>,
                                    })}
                                </HeadingComponent>
                            </Typography>
                        )}

                        {subtitle && (
                            <Typography variant="body" className="text-muted-foreground">
                                {subtitle}
                            </Typography>
                        )}

                        {description && (
                            <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                        )}
                    </div>

                    <LinkList
                        className={cn(!isImageAvailable && 'justify-center')}
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
                        priority={hasPriority}
                        sizes="(max-width: 64rem): 100vw, 50vw"
                    />
                </div>
            )}
        </div>
    );
};
