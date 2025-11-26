'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';
import React from 'react';

import { RichText } from '@o2s/ui/components/RichText';

import { Button } from '@o2s/ui/elements/button';
import { Typography } from '@o2s/ui/elements/typography';

import { ContentSectionProps } from './ContentSection.types';

export const ContentSection: React.FC<Readonly<ContentSectionProps>> = ({
    title,
    description,
    categoryLink,
    children,
    LinkComponent,
    meta,
}) => {
    const inspector = LivePreview.useInspector();

    return (
        <div className="flex flex-col gap-6 w-full">
            {(title || description || categoryLink) && (
                <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
                    {(title || description) && (
                        <div className="flex flex-col gap-2">
                            {title && (
                                <Typography variant="h2" {...inspector(meta, 'title')}>
                                    {title}
                                </Typography>
                            )}
                            {description && <RichText content={description} {...inspector(meta, 'description')} />}
                        </div>
                    )}
                    {categoryLink && (
                        <Button asChild variant="secondary">
                            <LinkComponent href={categoryLink.url} {...inspector(meta, 'categoryLink')}>
                                {categoryLink.label}
                            </LinkComponent>
                        </Button>
                    )}
                </div>
            )}
            <div className="flex w-full">{children}</div>
        </div>
    );
};
