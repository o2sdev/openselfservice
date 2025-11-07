import React from 'react';

import { FeatureCard, FeatureCardProps } from '../FeatureCard';
import { H3 } from '../Typography';

export interface FeatureCardsListProps {
    title: string;
    features: FeatureCardProps[];
}

export const FeatureCardsList: React.FC<FeatureCardsListProps> = ({ title, features }) => {
    return (
        <div className="flex flex-col gap-4 flex-1">
            <H3 className="mb-0!">{title}</H3>
            <ul className="list-none p-0! m-0! flex flex-col gap-4">
                {features.map((feature, index) => (
                    <li key={index}>
                        <FeatureCard icon={feature.icon} title={feature.title} description={feature.description} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
