import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import HistoryIcon from '../../assets/icons/History.svg';
import { FeatureTile } from '../FeatureTile';
import { Body, BodySmall, H2, H3 } from '../Typography';

export interface Guide {
    title: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string;
}

export interface GuideInfo {
    title: string;
    description?: React.ReactNode;
    link?: {
        text: string;
        url: string;
        iconLeft?: ReactNode;
        iconRight?: ReactNode;
        target?: HTMLAnchorElement['target'];
    };
    subtitle?: string;
}

export interface GuidesSectionProps {
    title?: React.ReactNode;
    guides: Guide[];
    info?: GuideInfo;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ title, guides, info }) => {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            {title && <H2 className="text-3xl text-white w-full">{title}</H2>}

            <div className={clsx('grid gap-8 w-full', info && 'lg:grid-cols-[6fr_7fr]')}>
                <ul className="list-none p-0! m-0! flex flex-col gap-4 w-full">
                    {guides.map((guide, index) => (
                        <li key={index}>
                            <FeatureTile
                                icon={guide.icon}
                                title={guide.title}
                                description={guide.description}
                                badge={guide.badge}
                            />
                        </li>
                    ))}
                </ul>

                {info && (
                    <div className="space-y-4">
                        <div className={clsx('card-base card-light-bg')}>
                            <div className={`flex justify-between gap-6 p-6 w-full h-full`}>
                                <div className={`flex flex-col gap-6`}>
                                    <H3 className="m-0! text-current!">{info.title}</H3>
                                    {info.description && <Body className="m-0!">{info.description}</Body>}

                                    {info.link && (
                                        <a
                                            className="button button max-w-fit"
                                            href={info.link.url}
                                            target={info.link.target}
                                        >
                                            {info.link.iconLeft}
                                            {info.link.text}
                                            {info.link.iconRight}
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>

                        {info.subtitle && (
                            <div className="flex gap-2">
                                <HistoryIcon />
                                <BodySmall>{info.subtitle}</BodySmall>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};
