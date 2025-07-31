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
}) => {
    return (
        <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col sm:flex-row w-full sm:items-end justify-between gap-4">
                {(title || description) && (
                    <div className="flex flex-col gap-2">
                        {title && <Typography variant="h2">{title}</Typography>}
                        {description && <RichText content={description} />}
                    </div>
                )}
                {categoryLink && (
                    <Button asChild variant="secondary">
                        <LinkComponent href={categoryLink.url}>{categoryLink.label}</LinkComponent>
                    </Button>
                )}
            </div>
            <div className="flex w-full">{children}</div>
        </div>
    );
};
