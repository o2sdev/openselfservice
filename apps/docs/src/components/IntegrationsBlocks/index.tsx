import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';

import ArrowRightIcon from '@site/src/assets/icons/ArrowRight.svg';
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
        link?: string;
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
                    const isLinkable = !!integration.link;

                    const cardContent = (
                        <>
                            <div className="flex gap-6 relative z-10">
                                <div>{integration.icon}</div>
                                <div className="flex flex-col gap-2.5">
                                    <H3 className="mb-0!">{integration.name}</H3>
                                    <BodySmall className="mb-0!">{integration.description}</BodySmall>
                                </div>
                            </div>
                            <div className="w-full mt-auto flex items-center justify-between relative z-10">
                                <Badge
                                    title={statusConfig.title}
                                    variant={statusConfig.variant}
                                    icon={statusConfig.icon}
                                />
                                {isLinkable && <ArrowRightIcon className="w-4 h-4 *:stroke-white shrink-0" />}
                            </div>
                        </>
                    );

                    const cardClassName = clsx(
                        'card-base p-6! flex flex-col gap-[30px] h-full relative text-white!',
                        statusConfig.cardBgClass,
                        isLinkable &&
                            'before:content-[""] before:absolute before:inset-0 before:rounded-md before:bg-black/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200 before:pointer-events-none',
                    );

                    const linkClassName = clsx(
                        cardClassName,
                        'no-underline! hover:no-underline! focus:no-underline!',
                        'focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 focus-visible:outline',
                    );

                    if (isLinkable && integration.link) {
                        return (
                            <Link key={integrationIndex} to={integration.link} className={linkClassName}>
                                {cardContent}
                            </Link>
                        );
                    }

                    return (
                        <div key={integrationIndex} className={cardClassName}>
                            {cardContent}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
