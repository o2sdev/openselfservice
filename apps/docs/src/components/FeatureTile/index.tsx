import clsx from 'clsx';
import React from 'react';

import Badge from '../Badge';
import { BodyBold, BodySmall, H3 } from '../Typography';

export interface FeatureTileProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    badge?: string;
}

export const FeatureTile = ({ icon, title, description, badge }: FeatureTileProps) => {
    return (
        <div className={clsx('card-base')}>
            <div className="flex justify-between p-6 w-full h-full">
                <div className="flex gap-6 flex-1 w-full">
                    {icon && <div className="flex items-center justify-center">{icon}</div>}

                    <div className="flex flex-col gap-2">
                        <BodyBold className="m-0!">{title}</BodyBold>
                        {description && <BodySmall className="m-0!">{description}</BodySmall>}
                    </div>
                </div>

                {badge && (
                    <div className="shrink-0 ml-2">
                        <Badge title={badge} variant="secondary" />
                    </div>
                )}
            </div>
        </div>
    );
};

export interface FeatureTileListProps {
    title: string;
    features: FeatureTileProps[];
}

export const FeatureTileList = ({ title, features }: FeatureTileListProps) => {
    return (
        <div className="flex flex-col gap-4 flex-1">
            <H3 className="mb-0!">{title}</H3>
            <ul className="list-none p-0! m-0! flex flex-col gap-4">
                {features.map((feature, index) => (
                    <li key={index}>
                        <FeatureTile icon={feature.icon} title={feature.title} description={feature.description} />
                    </li>
                ))}
            </ul>
        </div>
    );
};
