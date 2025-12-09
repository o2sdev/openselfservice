'use client';

import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { Image } from '@o2s/ui/components/Image';
import { LinkList } from '@o2s/ui/components/LinkList';
import { RichText } from '@o2s/ui/components/RichText';

import { Typography } from '@o2s/ui/elements/typography';

import { MediaSectionPureProps } from './MediaSection.types';

export const MediaSectionPure: React.FC<MediaSectionPureProps> = ({ locale, accessToken, routing, ...component }) => {
    const { preTitle, title, description, media, links } = component;
    const { Link: LinkComponent } = createNavigation(routing);

    const isMediaAvailable = media && media.url;

    return (
        <div className="w-full flex flex-col gap-12 md:gap-16">
            <div className="w-full flex flex-col gap-6 md:gap-8">
                <div className="h-full max-w-2xl mx-auto flex flex-col gap-4 md:gap-5 text-center">
                    {preTitle && (
                        <Typography variant="body" className="text-muted-foreground font-semibold">
                            {preTitle}
                        </Typography>
                    )}

                    {title && (
                        <Typography variant="highlightedBig" asChild>
                            <h2>{title}</h2>
                        </Typography>
                    )}

                    {description && (
                        <RichText content={description} baseFontSize="body" className="text-muted-foreground" />
                    )}
                </div>

                <LinkList className="justify-center" links={links} LinkComponent={LinkComponent} />
            </div>

            {isMediaAvailable && (
                <div className="w-full max-w-5xl mx-auto">
                    <div className="w-full flex flex-col justify-center flex-1">
                        <Image
                            src={media.url}
                            alt={media.alt}
                            width={media.width}
                            height={media.height}
                            className="object-scale-down rounded-3xl shadow-xl/20"
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
