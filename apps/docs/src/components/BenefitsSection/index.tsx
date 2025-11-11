import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Card from '../Card';
import { Body, BodySmall, H2, H3 } from '../Typography';

export interface BenefitsSectionProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    benefits: BenefitCardProps[];
}

export interface BenefitCardProps {
    team?: string;
    icon: React.ReactNode;
    iconPosition?: 'left' | 'right';
    title: React.ReactNode;
    description?: React.ReactNode;
    link?: {
        text: string;
        url: string;
        iconLeft?: ReactNode;
        iconRight?: ReactNode;
        target?: HTMLAnchorElement['target'];
    };
    borderColor?: 'gradient' | 'blue' | 'green' | 'light';
}

export const BenefitCard: React.FC<BenefitCardProps> = ({
    team,
    icon,
    iconPosition = 'right',
    title,
    description,
    link,
    borderColor = 'blue',
}) => {
    return (
        <Card borderColor={borderColor} gap={team ? 'gap-2' : 'gap-6'}>
            {team && (
                <>
                    <div className={clsx('flex items-start w-full')}>
                        <Body className="flex-1 text-sm text-white font-medium">{team}</Body>
                        <div className={clsx('shrink-0', 'w-4 h-4')}>{icon}</div>
                    </div>
                    <H3 className="text-2xl font-bold leading-8 text-white w-full mt-auto mb-0!">{title}</H3>
                </>
            )}

            {!team && !description && (
                <>
                    <div className={clsx('flex items-start w-full')}>
                        <div className={clsx('shrink-0')}>{icon}</div>
                    </div>
                    <H3 className="text-2xl font-bold leading-8 text-white w-full mt-auto mb-0!">{title}</H3>
                </>
            )}

            {!team && description && (
                <>
                    <div className={clsx('flex items-start gap-4 w-full')}>
                        <H3 className="text-2xl font-bold leading-8 text-white w-full mt-auto mb-0!">{title}</H3>
                        <div className={clsx('shrink-0')}>{icon}</div>
                    </div>
                </>
            )}

            {description && <BodySmall>{description}</BodySmall>}

            {link && (
                <a className="button mt-auto mb-0" href={link.url} target={link.target}>
                    {link.iconLeft}
                    {link.text}
                    {link.iconRight}
                </a>
            )}
        </Card>
    );
};

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ title, description, benefits }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full gap-20">
            <div className="flex flex-col gap-6">
                {title && <H2 className="mb-0! text-3xl text-white w-full">{title}</H2>}
                {description && <Body className="mb-0! text-white w-full">{description}</Body>}
            </div>

            <div className="grid lg:grid-cols-3 gap-8 w-full">
                {benefits.map((benefit, index) => (
                    <BenefitCard key={index} {...benefit} />
                ))}
            </div>
        </div>
    );
};
