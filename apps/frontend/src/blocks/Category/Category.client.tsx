// 'use client';
import React from 'react';

import { Link } from '@o2s/ui/components/link';
import { Typography } from '@o2s/ui/components/typography';

import { Link as NextLink } from '@/i18n';

import { Image } from '@/components/Image/Image';

import { CategoryPureProps } from './Category.types';

const { renderBlocks } = await import('@/blocks/renderBlocks');

export const CategoryPure: React.FC<CategoryPureProps> = ({ slug, accessToken, ...component }) => {
    console.log(component);
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="border p-4">
                {component.__typename}: {component.id}
                <Typography>{component.title}</Typography>
                {component.icon && (
                    <Image
                        src={component.icon.url}
                        alt={component.icon.alt}
                        width={component.icon.width}
                        height={component.icon.height}
                    />
                )}
                <Typography>{component.description}</Typography>
                <div>{component.components && <div>{renderBlocks(component.components, slug, accessToken)}</div>}</div>
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
