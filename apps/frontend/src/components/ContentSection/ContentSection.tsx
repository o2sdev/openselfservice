import React from 'react';
import { RichText } from 'src/components/RichText/RichText';

import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { ContentSectionProps } from './ContentSection.types';

export const ContentSection: React.FC<Readonly<ContentSectionProps>> = ({
    title,
    description,
    additionalLink,
    children,
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
                {additionalLink && (
                    <Button asChild variant="outline">
                        <NextLink href={additionalLink.url}>{additionalLink.label}</NextLink>
                    </Button>
                )}
            </div>
            <div className="flex w-full">{children}</div>
        </div>
    );
};
