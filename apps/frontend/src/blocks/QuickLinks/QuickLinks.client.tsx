import React from 'react';

import { InformativeCard } from '@/components/Cards/InformativeCard/InformativeCard';
import { ContentSection } from '@/components/ContentSection/ContentSection';

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
                            icon={item.icon}
                            iconSize={36}
                            lineClamp={2}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
