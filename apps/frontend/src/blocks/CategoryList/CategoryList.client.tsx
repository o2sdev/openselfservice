import React from 'react';

import { InformativeCard } from '@/components/Cards/InformativeCard/InformativeCard';
import { ContentSection } from '@/components/ContentSection/ContentSection';

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
                            icon={item.icon}
                            iconSize={24}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
