import React from 'react';

import { ContentSection } from '@/components/ContentSection/ContentSection';
import { InformativeCard } from '@/components/InformativeCard/InformativeCard';

import { QuickLinksPureProps } from './QuickLinks.types';

export const QuickLinksPure: React.FC<Readonly<QuickLinksPureProps>> = ({ ...component }) => {
    return (
        <ContentSection title={component.title} description={component.description}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {component.items.map((item) => (
                    <li key={item.label} className="flex w-full h-full ">
                        <InformativeCard
                            title={item.label}
                            description={item.description}
                            href={item.url}
                            iconUrl={item.icon?.url}
                            iconSize="medium"
                            lineClamp={2}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
