'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';
import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { InformativeCard } from '@o2s/ui/components/Cards/InformativeCard';
import { ContentSection } from '@o2s/ui/components/ContentSection';
import { DynamicIconProps } from '@o2s/ui/components/DynamicIcon';

import { CategoryListPureProps } from './CategoryList.types';

export const CategoryListPure = ({
    locale,
    accessToken,
    routing,
    meta,
    ...component
}: Readonly<CategoryListPureProps>) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const inspector = LivePreview.useInspector();

    return (
        <ContentSection
            title={component.title}
            description={component.description}
            LinkComponent={LinkComponent}
            meta={meta}
        >
            <ul
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
                {...inspector(meta, 'categories')}
            >
                {component.items.map((item) => (
                    <li key={item.id} className="w-full">
                        <InformativeCard
                            title={item.title}
                            description={item.description}
                            href={item.slug}
                            icon={{
                                name: item.icon as DynamicIconProps['name'],
                                size: 24,
                            }}
                            LinkComponent={LinkComponent}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
