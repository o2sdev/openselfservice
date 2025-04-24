import React from 'react';

import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { ArticleListPureProps } from './ArticleList.types';

export const ArticleListPure: React.FC<ArticleListPureProps> = ({ ...component }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="border p-4">
                {component.__typename}: {component.id}
                <Typography>{component.title}</Typography>
                <Typography>{component.description}</Typography>
                <ul>
                    {component.items.data.map((item) => (
                        <li key={item.id}>
                            <Link asChild>
                                <NextLink href={item.slug}>{item.title}</NextLink>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
