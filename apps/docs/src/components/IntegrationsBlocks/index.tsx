import clsx from 'clsx';
import React from 'react';

import RefreshCwIcon from '@site/src/assets/icons/RefreshCw.svg';
import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import Badge from '@site/src/components/Badge';
import { Body, BodySmall, H2, H3 } from '@site/src/components/Typography';

export interface IntegrationsBlocksProps {
    title: string;
    description: string;
    integrations: { name: string; description: string; isAvailable: boolean; icon: React.ReactNode }[];
}

export function IntegrationsBlocks({ title, description, integrations }: IntegrationsBlocksProps) {
    return (
        <div>
            <H2 className="mb-6!">{title}</H2>
            <Body className="mb-8!">{description}</Body>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {integrations.map((integration, integrationIndex) => (
                    <div
                        key={integrationIndex}
                        className={clsx(
                            'card-base p-6! flex flex-col gap-[30px] h-fit',
                            integration.isAvailable ? 'bg-violet!' : 'card-base-bg',
                        )}
                    >
                        <div className="flex gap-6">
                            {integration.icon}
                            <div className="flex flex-col gap-2.5">
                                <H3 className="mb-0!">{integration.name}</H3>
                                <BodySmall className="mb-0!">{integration.description}</BodySmall>
                            </div>
                        </div>
                        <div className="w-fit">
                            <Badge
                                title={integration.isAvailable ? 'Available' : 'Planned'}
                                variant={integration.isAvailable ? 'light' : 'dark'}
                                icon={
                                    integration.isAvailable ? (
                                        <CircleCheckIcon className="w-4 h-4 *:stroke-violet" />
                                    ) : (
                                        <RefreshCwIcon className="w-4 h-4 *:stroke-white" />
                                    )
                                }
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
