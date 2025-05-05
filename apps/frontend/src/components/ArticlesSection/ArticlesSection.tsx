import React from 'react';

import { Button } from '@o2s/ui/components/button';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { ArticlesSectionProps } from './ArticlesSection.types';

export const ArticlesSection: React.FC<Readonly<ArticlesSectionProps>> = ({
    title,
    description,
    allArticlesLink,
    children,
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex w-full items-end justify-between gap-4">
                <div className="flex flex-col gap-2">
                    {title && <Typography variant="h2">{title}</Typography>}
                    {description && <Typography variant="body">{description}</Typography>}
                </div>
                {allArticlesLink && (
                    <Button asChild variant="outline">
                        <NextLink href={allArticlesLink.url}>{allArticlesLink.label}</NextLink>
                    </Button>
                )}
            </div>
            <div className="flex w-full">{children}</div>
        </div>
    );
};
