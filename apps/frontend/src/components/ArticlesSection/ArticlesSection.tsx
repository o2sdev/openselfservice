import Link from 'next/link';
import React from 'react';

import { Typography } from '@o2s/ui/components/typography';

import { ArticlesSectionProps } from './ArticlesSection.types';

export const ArticlesSection: React.FC<Readonly<ArticlesSectionProps>> = ({
    title,
    description,
    allArticlesLink,
    children,
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex w-full  justify-between gap-4">
                <div className="flex flex-col gap-2">
                    {title && <Typography variant="h2">{title}</Typography>}
                    {description && <Typography variant="body">{description}</Typography>}
                </div>
                {allArticlesLink && <Link href={allArticlesLink}>All articles</Link>}
            </div>
            <div className="flex w-full">{children}</div>
        </div>
    );
};
