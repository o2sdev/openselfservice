import React from 'react';

import CodeIcon from '@site/src/assets/icons/code.svg';
import NetworkIcon from '@site/src/assets/icons/network.svg';
import PenToolIcon from '@site/src/assets/icons/pentool.svg';

import Card from '../Card';
import { Body, H2, H3 } from '../Typography';

interface BenefitCardProps {
    team: string;
    icon: React.ReactNode;
    title: string;
    borderColor?: 'gradient' | 'blue' | 'green';
}

const BenefitCard: React.FC<BenefitCardProps> = ({ team, icon, title, borderColor = 'blue' }) => {
    return (
        <Card borderColor={borderColor} gap="gap-2">
            {/* Header */}
            <div className="flex items-start w-full">
                <Body className="flex-1 text-sm text-white font-medium">{team}</Body>
                <div className="w-4 h-4 flex-shrink-0">{icon}</div>
            </div>

            {/* Title */}
            <H3 className="text-2xl font-bold leading-8 text-white w-full mt-auto">{title}</H3>
        </Card>
    );
};

export function DXPBenefitsSection() {
    const benefits: Array<{
        team: string;
        icon: React.ReactNode;
        title: string;
        borderColor?: 'gradient' | 'blue' | 'green';
    }> = [
        {
            team: 'Frontend Developers',
            icon: <CodeIcon className="w-4 h-4 text-[#21d99a]" />,
            title: 'Quick start with zero boilerplate',
            borderColor: 'blue',
        },
        {
            team: 'Content Teams',
            icon: <PenToolIcon className="w-4 h-4 text-[#21d99a]" />,
            title: 'Structured CMS and ready to use content models',
            borderColor: 'gradient',
        },
        {
            team: 'Solution Architects',
            icon: <NetworkIcon className="w-4 h-4 text-[#21d99a]" />,
            title: 'Flexible, composable stack as a base for future scaling',
            borderColor: 'green',
        },
    ];

    return (
        <div className="flex flex-col items-start justify-start w-full">
            <H2 className="text-3xl text-white w-full">
                Benefits for <span className="text-highlighted">every team</span>
            </H2>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-start w-full">
                {benefits.map((benefit, index) => (
                    <BenefitCard
                        key={index}
                        team={benefit.team}
                        icon={benefit.icon}
                        title={benefit.title}
                        borderColor={benefit.borderColor}
                    />
                ))}
            </div>
        </div>
    );
}
