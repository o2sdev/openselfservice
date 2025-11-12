import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';

import { CopyCommandButton } from '../CopyCommandButton';
import { H1 } from '../Typography';

interface HeroBannerSectionProps {
    heading?: ReactNode;
    description: ReactNode | ReactNode[];
    badge?: {
        text: string;
        icon?: ReactNode;
    };
    cliCommand?: string;
    mainLink?: {
        text: string;
        url: string;
        iconLeft?: ReactNode;
        iconRight?: ReactNode;
        target?: HTMLAnchorElement['target'];
    };
    secondaryLink?: {
        text: string;
        url: string;
        iconLeft?: ReactNode;
        iconRight?: ReactNode;
        target?: HTMLAnchorElement['target'];
    };
    tertiaryLink?: {
        text: string;
        url: string;
        iconLeft?: ReactNode;
        iconRight?: ReactNode;
        target?: HTMLAnchorElement['target'];
    };
    heroImage?: {
        url: string;
        alt: string;
    };
    isDXPage?: boolean;
}

export function HeroBannerSection({
    heading,
    description,
    badge,
    cliCommand,
    mainLink,
    secondaryLink,
    tertiaryLink,
    heroImage,
    isDXPage = false,
}: HeroBannerSectionProps) {
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center">
            <div className={clsx('container grid items-center', heroImage ? 'md:grid-cols-2' : 'text-center')}>
                <div className={clsx(heroImage ? 'lg:w-[515px]' : 'lg:w-[842px] m-auto')}>
                    {badge && (
                        <div className="flex justify-center mb-12">
                            <div className="bg-white/10 border border-white rounded-full px-4 py-2 h-10 flex items-center justify-center gap-2">
                                {badge.icon && (
                                    <span className="w-6 h-6 flex items-center justify-center">{badge.icon}</span>
                                )}
                                <span className="text-white text-sm font-medium leading-[1.3]">{badge.text}</span>
                            </div>
                        </div>
                    )}
                    {heading && <H1 className="mt-12 md:mt-0">{heading}</H1>}

                    {Array.isArray(description) ? (
                        <ul className="space-y-2 ml-0! p-0! list-none">
                            {description.map((item, index) => (
                                <li key={index} className="flex items-start gap-2">
                                    <CircleCheckIcon className="h-5 w-5 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        description
                    )}
                    <div className={clsx('mt-16 space-y-4 md:max-w-[415px]', !heroImage && 'm-auto')}>
                        {cliCommand && <CopyCommandButton command={cliCommand} />}
                        {mainLink && (
                            <>
                                <div className={clsx('sm:flex gap-2 space-y-4 w-full', !heroImage && 'justify-center')}>
                                    <a
                                        className={clsx('button', cliCommand && 'w-1/2')}
                                        href={mainLink.url}
                                        target={mainLink.target}
                                    >
                                        {mainLink.iconLeft}
                                        {mainLink.text}
                                        {mainLink.iconRight}
                                    </a>

                                    {secondaryLink && (
                                        <a
                                            href={secondaryLink.url}
                                            className={clsx('button button-ultra', cliCommand && 'w-1/2')}
                                            target={secondaryLink.target}
                                            rel="noopener"
                                        >
                                            <span className="label flex items-center justify-center gap-2">
                                                {secondaryLink.iconLeft}
                                                {secondaryLink.text}
                                                {secondaryLink.iconRight}
                                            </span>
                                        </a>
                                    )}

                                    {tertiaryLink && (
                                        <a
                                            href={tertiaryLink.url}
                                            className={clsx('button button-special', cliCommand && 'w-1/2')}
                                            target={tertiaryLink.target}
                                            rel="noopener"
                                        >
                                            <span className="label flex items-center justify-center gap-2">
                                                {tertiaryLink.iconLeft}
                                                {tertiaryLink.text}
                                                {tertiaryLink.iconRight}
                                            </span>
                                        </a>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {heroImage && (
                    <div className="relative">
                        <img
                            src={heroImage.url}
                            alt={heroImage.alt}
                            className={`w-full relative h-auto origin-left origin-center z-[-1] ${
                                isDXPage ? `hidden md:block mt-20 ml-[-250px] scale-[2.6] z-10` : 'scale-[2]'
                            }`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
