import React, { type ReactNode, useState } from 'react';

import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import CopyIcon from '@site/src/assets/icons/copy.svg';
import GithubActiveIcon from '@site/src/assets/icons/github-active.svg';
import GithubIcon from '@site/src/assets/icons/github.svg';
import TerminalIcon from '@site/src/assets/icons/terminal.svg';

import { Body, H1 } from '../Typography';

interface HeroBannerSectionProps {
    heading: ReactNode;
    description: ReactNode | string[];
    cliCommand: string;
    mainLink: {
        text: string;
        url: string;
    };
    secondaryLink: {
        text: string;
        url: string;
    };
    heroImage: {
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
            <div className="container grid md:grid-cols-2 items-center">
                <div className="lg:w-[560px]">
                    <H1 className="mt-12 md:mt-0">{heading}</H1>
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
                    <div className="mt-16">
                        <div className="flex flex-col gap-4 mb-4">
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
                        <div>
                            <div className="sm:flex gap-6">
                                <a className="button button mb-4" href={mainLink.url} target="_blank">
                                    {mainLink.text}
                                </a>

                                <a
                                    href={secondaryLink.url}
                                    className="button button-ultra"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    <span className="label flex items-center justify-center gap-2">
                                        <span className="relative h-5 w-5 mr-2 flex-shrink-0">
                                            <GithubIcon className="absolute inset-0 h-5 w-5 transition-opacity duration-200 pointer-events-none github-icon-default" />
                                            <GithubActiveIcon className="absolute inset-0 h-5 w-5 transition-opacity duration-200 pointer-events-none github-icon-active" />
                                        </span>
                                        {secondaryLink.text}
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <img
                        src={heroImage.url}
                        alt={heroImage.alt}
                        className={`w-full relative h-auto  origin-left origin-center z-[-1] ${
                            isDXPage ? `hidden md:block mt-20 ml-[-250px] scale-[2.6] z-10` : 'scale-[2]'
                        }`}
                    />
                </div>
            </div>
        </div>
    );
}
