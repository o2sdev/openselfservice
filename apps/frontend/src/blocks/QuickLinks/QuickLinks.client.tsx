import React from 'react';

import { Link } from '@o2s/ui/components/link';

import { Link as NextLink } from '@/i18n';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<QuickLinksPureProps> = ({ ...component }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="border p-4">
                QuickLinks: {component.id}
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
