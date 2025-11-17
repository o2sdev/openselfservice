import clsx from 'clsx';
import React from 'react';

import RefreshCwIcon from '@site/src/assets/icons/RefreshCw.svg';
import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import Badge from '@site/src/components/Badge';
import { Body, BodySmall, H2, H3 } from '@site/src/components/Typography';

export interface IntegrationsBlocksProps {
    title: string;
    description: string;
    integrations: {
        name: string;
        description: string;
        status: 'available' | 'planned' | 'internal';
        icon?: React.ReactNode;
    }[];
}

const getStatusConfig = (status: 'available' | 'planned' | 'internal') => {
    switch (status) {
        case 'available':
            return {
                title: 'Available',
                variant: 'light' as const,
                icon: <CircleCheckIcon className="w-4 h-4 *:stroke-violet" />,
                cardBgClass: 'bg-violet!',
            };
        case 'planned':
            return {
                title: 'Planned',
                variant: 'dark' as const,
                icon: <RefreshCwIcon className="w-4 h-4 *:stroke-white" />,
                cardBgClass: 'card-base-bg',
            };
        case 'internal':
            return {
                title: 'Internal',
                variant: 'private' as const,
                icon: <CircleCheckIcon className="w-4 h-4 *:stroke-white" />,
                cardBgClass: 'bg-violet!',
            };
        default:
            return {
                title: 'Planned',
                variant: 'dark' as const,
                icon: <RefreshCwIcon className="w-4 h-4 *:stroke-white" />,
                cardBgClass: 'card-base-bg',
            };
    }
};

export function IntegrationsBlocks({ title, description, integrations }: IntegrationsBlocksProps) {
    return (
        <div>
            <H2 className="mb-6!">{title}</H2>
            <Body className="mb-8!">{description}</Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {integrations.map((integration, integrationIndex) => {
                    const statusConfig = getStatusConfig(integration.status);
                    return (
                        <div
                            key={integrationIndex}
                            className={clsx('card-base p-6! flex flex-col gap-[30px] h-full', statusConfig.cardBgClass)}
                        >
                            <div className="flex gap-6">
                                {integration.icon}
                                <div className="flex flex-col gap-2.5">
                                    <H3 className="mb-0!">{integration.name}</H3>
                                    <BodySmall className="mb-0!">{integration.description}</BodySmall>
                                </div>
                            </div>
                            <div className="w-fit mt-auto">
                                <Badge
                                    title={statusConfig.title}
                                    variant={statusConfig.variant}
                                    icon={statusConfig.icon}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
