import { createNavigation } from 'next-intl/navigation';
import React from 'react';

import { InformativeCard } from '@o2s/ui/components/Cards/InformativeCard';
import { ContentSection } from '@o2s/ui/components/ContentSection';
import { DynamicIconProps } from '@o2s/ui/components/DynamicIcon';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<Readonly<QuickLinksPureProps>> = ({
    locale,
    accessToken,
    routing,
    ...component
}) => {
    const { Link: LinkComponent } = createNavigation(routing);

    return (
        <ContentSection title={component.title} description={component.description} LinkComponent={LinkComponent}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {component.items.map((item) => (
                    <li key={item.label} className="flex w-full h-full ">
                        <InformativeCard
                            title={item.label}
                            description={item.description}
                            href={item.url}
                            icon={{
                                name: item.icon as DynamicIconProps['name'],
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
