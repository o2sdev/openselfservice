import clsx from 'clsx';
import React, { type ReactNode, useState } from 'react';

import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import CopyIcon from '@site/src/assets/icons/copy.svg';
import TerminalIcon from '@site/src/assets/icons/terminal.svg';

import { Body, H1 } from '../Typography';

interface HeroBannerSectionProps {
    heading?: ReactNode;
    description: ReactNode | string[];
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
    cliCommand,
    mainLink,
    secondaryLink,
    tertiaryLink,
    heroImage,
    isDXPage = false,
}: HeroBannerSectionProps) {
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(cliCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center">
            <div className={clsx('container grid items-center', heroImage ? 'md:grid-cols-2' : 'text-center')}>
                <div className={clsx(heroImage ? 'lg:w-[560px]' : 'lg:w-[842px] m-auto')}>
                    {heading && <H1 className="mt-12 md:mt-0">{heading}</H1>}
                    <Body>
                        {Array.isArray(description) ? (
                            <ul className="space-y-2 !ml-0 !p-0 list-none">
                                {description.map((item, index) => (
                                    <li key={index} className="flex items-start gap-2">
                                        <CircleCheckIcon className="h-5 w-5 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            description
                        )}
                    </Body>
                    <div className="mt-16 space-y-4">
                        {cliCommand && (
                            <div className="flex flex-col gap-4">
                                <button
                                    type="button"
                                    className="button button-copy w-full font-mono text-base flex items-center px-3 py-2"
                                    style={{ justifyContent: 'space-between' }}
                                    onClick={handleCopyClick}
                                >
                                    <TerminalIcon className="h-5 w-5 mr-2 flex-shrink-0" />
                                    <span className="flex-1 text-left ml-2 mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                                        {cliCommand}
                                    </span>
                                    <span className="relative ml-2 h-5 w-5 flex-shrink-0">
                                        <CopyIcon
                                            className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${copied ? 'opacity-0' : 'opacity-100'}`}
                                            style={{ pointerEvents: 'none' }}
                                        />
                                        <CircleCheckIcon
                                            className={`absolute inset-0 h-5 w-5 transition-opacity duration-200 ${copied ? 'opacity-100' : 'opacity-0'}`}
                                            style={{ pointerEvents: 'none' }}
                                        />
                                    </span>
                                </button>
                            </div>
                        )}
                        {mainLink && (
                            <div>
                                <div className={clsx('sm:flex gap-2 space-y-4', !heroImage && 'justify-center')}>
                                    <a className="button button" href={mainLink.url} target={mainLink.target}>
                                        {mainLink.iconLeft}
                                        {mainLink.text}
                                        {mainLink.iconRight}
                                    </a>

                                    {secondaryLink && (
                                        <a
                                            href={secondaryLink.url}
                                            className="button button-ultra"
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
                                            className="button button-special"
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
                            </div>
                        )}
                    </div>
                </div>

                {heroImage && (
                    <div className="relative">
                        <img
                            src={heroImage.url}
                            alt={heroImage.alt}
                            className={`w-full relative h-auto  origin-left origin-center z-[-1] ${
                                isDXPage ? `hidden md:block mt-20 ml-[-250px] scale-[2.6] z-10` : 'scale-[2]'
                            }`}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
