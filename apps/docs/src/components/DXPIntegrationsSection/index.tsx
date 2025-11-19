import React from 'react';

import Link from '@docusaurus/Link';

import { H3 } from '../Typography';

interface IntegrationBadgeProps {
    icon: string;
    name: string;
}

const IntegrationBadge: React.FC<IntegrationBadgeProps> = ({ icon, name }) => {
    return (
        <div className="flex gap-2.5 items-center justify-center px-0 py-0.5 rounded-full">
            <div className="relative w-5 h-5 shrink-0">
                <img alt={`${name} logo`} className="block max-w-none w-full h-full" src={icon} />
            </div>
            <div className="font-normal leading-[1.4] text-sm text-white whitespace-nowrap">{name}</div>
        </div>
    );
};

export function DXPIntegrationsSection() {
    const integrations = [
        {
            icon: '/img/logos/strapi-logo.svg',
            name: 'Strapi CMS',
        },
        {
            icon: '/img/logos/algolia-logo.svg',
            name: 'Algolia',
        },
        {
            icon: '/img/logos/surveyjs-logo.svg',
            name: 'SurveyJS',
        },
        {
            icon: '/img/logos/keycloak-logo.svg',
            name: 'KeyCloak',
        },
        {
            icon: '/img/logos/authjs-logo.svg',
            name: 'auth.js',
        },
        {
            icon: '/img/logos/medusa-logo.svg',
            name: 'Medusa',
        },
        {
            icon: '/img/logos/sap-logo.svg',
            name: 'SAP S4/Hana',
        },
        {
            icon: '/img/logos/redis-logo.svg',
            name: 'Redis cache',
        },
    ];

    return (
        <div className="w-full p-6">
            <div className="flex flex-col gap-8 items-start justify-start w-full">
                {/* Header */}
                <div className="flex flex-col sm:flex-row items-start justify-between w-full gap-4">
                    <H3 className="font-semibold leading-normal text-2xl text-white w-full">
                        Extend with existing Open Self Service features
                    </H3>
                    <Link href="/docs/integrations" className="button shrink-0">
                        See all integrations
                    </Link>
                </div>

                {/* Integration Badges */}
                <div className="flex flex-wrap gap-2.5 items-start justify-between w-full">
                    {integrations.map((integration, index) => (
                        <IntegrationBadge key={index} {...integration} />
                    ))}
                </div>
            </div>
        </div>
    );
}
