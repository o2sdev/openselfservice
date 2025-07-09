import React from 'react';

import { InformativeCard } from '@o2s/ui/components/Cards/InformativeCard';
import { ContentSection } from '@o2s/ui/components/ContentSection';

import { Link } from '@/i18n';

import { CategoryListPureProps } from './CategoryList.types';

export const CategoryListPure: React.FC<Readonly<CategoryListPureProps>> = ({ ...component }) => {
    return (
        <ContentSection title={component.title} description={component.description} LinkComponent={Link}>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                {component.items.map((item) => (
                    <li key={item.id} className="w-full">
                        <InformativeCard
                            title={item.title}
                            description={item.description}
                            href={item.slug}
                            icon={item.icon}
                            iconSize={24}
                            LinkComponent={Link}
                        />
                    </li>
                ))}
            </ul>
        </ContentSection>
    );
};
