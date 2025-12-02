import React from 'react';

import Link from '@docusaurus/Link';

import ArrowRight from '@site/src/assets/icons/ArrowRight.svg';

import { Body, H3 } from '../Typography';

export interface HoverCardProps {
    title: string;
    description: string;
    href?: string;
    ctaLabel?: string;
    badge?: string;
    gradient?: React.CSSProperties['background'];
    backgroundImage?: {
        url: string;
        alt: string;
    };
}

export const HoverCard = ({ title, description, href, gradient, badge, ctaLabel, backgroundImage }: HoverCardProps) => {
    const cardWrapperClasses = 'relative group block rounded-lg transition-all duration-200';

    const cardContent = () => {
        return (
            <div
                className="relative rounded-lg overflow-hidden h-[318px] p-6 flex flex-col justify-between"
                style={{ background: gradient }}
            >
                {backgroundImage?.url && backgroundImage?.alt && (
                    <img
                        src={backgroundImage.url}
                        alt={backgroundImage.alt}
                        aria-hidden
                        className="absolute inset-0 w-full h-full object-cover opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-200"
                    />
                )}
                <div className="flex flex-col gap-2.5 relative z-10">
                    <H3 className="m-0! lg:text-[32px]! lg:leading-[120%]!">{title}</H3>
                    {/* Description - visible on mobile/tablet, on hover for desktop */}
                    <Body className="mb-0! text-base leading-6 text-white lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                        {description}
                    </Body>
                </div>

                {ctaLabel ? (
                    <div className="flex items-center justify-end relative z-10">
                        <div className="flex items-center gap-2.5 text-white">
                            <span className="text-sm font-medium leading-5">{ctaLabel}</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                ) : badge ? (
                    <div className="flex items-center justify-start relative z-10">
                        <div className="bg-white px-2.5 py-0.5 rounded-full h-5 flex items-center justify-center">
                            <span className="text-xs font-semibold leading-4 text-violet">{badge}</span>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    };

    return href ? (
        <Link
            href={href}
            className={
                cardWrapperClasses +
                ' no-underline! hover:no-underline! focus:no-underline! focus-visible:outline-2 focus-visible:outline-(--ifm-color-primary) focus-visible:outline-offset-2'
            }
        >
            {cardContent()}
        </Link>
    ) : (
        <div className={cardWrapperClasses}>{cardContent()}</div>
    );
};
