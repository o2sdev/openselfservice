import React from 'react';

import { ContentSection } from '@/components/ContentSection/ContentSection';
import { InformativeCard } from '@/components/InformativeCard/InformativeCard';

import { CategoryListPureProps } from './CategoryList.types';

export const CategoryListPure: React.FC<Readonly<CategoryListPureProps>> = ({ ...component }) => {
    return (
        <ContentSection title={component.title} description={component.description}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {component.items.map((item) => (
                    <li key={item.id} className="w-full">
                        <InformativeCard
                            title={item.title}
                            description={item.description}
                            href={item.slug}
                            iconUrl={item.icon?.url}
                            iconSize="small"
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
