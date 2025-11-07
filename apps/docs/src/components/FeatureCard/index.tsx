import clsx from 'clsx';
import React from 'react';

import Badge from '../Badge';
import { BodyBold, BodySmall } from '../Typography';

export interface FeatureCardProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    badge?: string;
    className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, badge, className }) => {
    return (
        <div className={clsx('card-base', className)}>
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
