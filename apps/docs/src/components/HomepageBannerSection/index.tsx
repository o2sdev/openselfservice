import React, { type ReactNode, useState } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import CopyIcon from '@site/src/assets/icons/copy.svg';
import TerminalIcon from '@site/src/assets/icons/terminal.svg';
import GetStartedButtons from '@site/src/components/GetStartedButtons';

import { Body, H1 } from '../Typography';

export function HomepageBannerSection() {
    const { siteConfig } = useDocusaurusContext();
    const [copied, setCopied] = useState(false);

    const handleCopyClick = () => {
        navigator.clipboard.writeText('npx create-o2s-app');
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
    };

    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center">
            <div className="container grid md:grid-cols-2 items-center">
                <div className="lg:w-[560px]">
                    <H1 className="mt-12 md:mt-0">
                        <br /> The Open Source
                        <span className="text-highlighted"> Composable Frontend </span>for Customer Portals
                    </H1>
                    <Body>
                        <b>{siteConfig.customFields.heading as ReactNode}</b>
                        {siteConfig.tagline}
                    </Body>
                    {/*<Body className="text-2xl font-semibold leading-9 mb-10">{siteConfig.tagline}</Body>*/}
                    <div className="mt-16">
                        <div className="flex flex-col gap-4 mb-4">
                            <button
                                type="button"
                                className="button button-copy w-full font-mono text-base flex items-center px-3 py-2"
                                style={{ justifyContent: 'space-between' }}
                                onClick={handleCopyClick}
                            >
                                <TerminalIcon className="h-5 w-5 mr-2 shrink-0" />
                                <span className="flex-1 text-left ml-2 mr-2 whitespace-nowrap overflow-hidden text-ellipsis">
                                    npx create-o2s-app
                                </span>
                                <span className="relative ml-2 h-5 w-5 shrink-0">
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
                        <GetStartedButtons />
                    </div>
                </div>

                <div className="relative">
                    <img
                        src="/img/homepage/banner.png"
                        alt="Laptop with connecting nodes illustration"
                        className="w-full relative h-auto transform origin-left origin-center scale-[2] z-[-1]"
                    />
                </div>
            </div>
        </div>
    );
}
