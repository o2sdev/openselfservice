import React from 'react';

import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<QuickLinksPureProps> = ({ ...component }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="border p-4">
                {component.__typename}: {component.id}
                <Typography>{component.title}</Typography>
                <Typography>{component.description}</Typography>
                <ul>
                    {component.items.map((item, index) => (
                        <li key={index}>
                            <Link asChild>
                                <NextLink href={item.url}>{item.label}</NextLink>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
