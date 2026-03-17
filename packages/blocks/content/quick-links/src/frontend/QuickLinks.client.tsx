'use client';

import { LivePreview } from '@o2s/configs.integrations/live-preview';
import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { InformativeCard } from '@o2s/ui/components/cards/InformativeCard';
import { ContentSection } from '@o2s/ui/components/content/ContentSection';
import { DynamicIconProps } from '@o2s/ui/components/media/DynamicIcon';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<Readonly<QuickLinksPureProps>> = ({
    locale,
    accessToken,
    routing,
    meta,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);
    const inspector = LivePreview.useInspector();
    const items = component.items ?? [];

    return (
        <ContentSection
            title={component.title}
            description={component.description}
            LinkComponent={LinkComponent}
            meta={meta}
        >
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {items.map((item, index) => (
                    <li key={item.label} className="flex w-full h-full" {...inspector(meta?.items?.[index], 'label')}>
                        <InformativeCard
                            title={item.label}
                            description={item.description}
                            href={item.url}
                            icon={{
                                name: (item.icon as DynamicIconProps['name']) || '',
                                size: 36,
                            }}
                            lineClamp={2}
                            LinkComponent={LinkComponent}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
