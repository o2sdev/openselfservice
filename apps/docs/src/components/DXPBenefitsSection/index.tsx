import React from 'react';

import CodeIcon from '@site/src/assets/icons/code.svg';
import NetworkIcon from '@site/src/assets/icons/network.svg';
import PenToolIcon from '@site/src/assets/icons/pentool.svg';

import { Body, H2, H3 } from '../Typography';

interface BenefitCardProps {
    team: string;
    icon: React.ReactNode;
    title: string;
    borderColor?: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ team, icon, title, borderColor = '#4c5ce5' }) => {
    return (
        <div
            className={`rounded-lg relative flex-1 min-w-0 ${borderColor === 'gradient' ? 'card-gradient-border' : ''}`}
        >
            <div
                className={`flex flex-col gap-2 items-start justify-start p-6 w-full h-full ${borderColor === 'gradient' ? 'card-benefits-bg-gradient' : 'card-benefits-bg'}`}
            >
                {/* Header */}
                <div className="flex items-start justify-between w-full">
                    <Body className="flex-1 text-sm text-white font-medium">{team}</Body>
                    <div className="w-4 h-4 flex-shrink-0">{icon}</div>
                </div>

                {/* Title */}
                <H3 className="text-2xl font-bold leading-8 text-white w-full">{title}</H3>
            </div>

            {borderColor !== 'gradient' && (
                <div
                    className="absolute border inset-0 pointer-events-none rounded-lg shadow-sm"
                    style={{ borderColor }}
                />
            )}
        </div>
    );
};

export function DXPBenefitsSection() {
    const benefits = [
        {
            team: 'Frontend Developers',
            icon: <CodeIcon className="w-4 h-4 text-[#21d99a]" />,
            title: 'Quick start with zero boilerplate',
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
            borderColor: '#21d99a',
        },
    ];

    return (
        <div className="flex flex-col items-start justify-start w-full">
            <H2 className="text-3xl text-white w-full">
                Benefits for <span className="text-highlighted">every team</span>
            </H2>

            <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-start w-full">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} {...benefit} />
                ))}
            </div>
        </div>
    );
}
