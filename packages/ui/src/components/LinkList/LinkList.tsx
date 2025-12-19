import React from 'react';

import { cn } from '@o2s/ui/lib/utils';

import { DynamicIcon } from '@o2s/ui/components/DynamicIcon';

import { Link } from '@o2s/ui/elements/link';

import { LinkListProps } from './LinkList.types';

export const LinkList: React.FC<Readonly<LinkListProps>> = ({ className, links, LinkComponent, children }) => {
    if (!links && !children) {
        return null;
    }

    return (
        <div className={cn('w-full sm:w-auto flex flex-col sm:flex-row gap-4', className)}>
            {links?.map(
                (link) =>
                    link.label && (
                        <Link asChild variant={link.variant} key={link.label}>
                            <LinkComponent href={link.url}>
                                <>
                                    {link.label}
                                    {link.icon && <DynamicIcon name={link.icon} size={16} />}
                                </>
                            </LinkComponent>
                        </Link>
                    ),
            )}
            {children}
        </div>
    );
};
