import React, { type ReactNode, useState } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import WaitlistForm from '@site/src/components/WaitlistForm';

import { Body, H1 } from '../Typography';

export function HomepageBannerSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div className="relative min-h-[calc(100vh-64px)] flex items-center">
            <div className="container grid md:grid-cols-2 items-center">
                <div>
                    <H1 className="mt-12 md:mt-0">
                        <br /> {siteConfig.customFields.heading2 as ReactNode}
                        <span className="text-highlighted">{siteConfig.customFields.brandName as ReactNode}</span>
                    </H1>
                    <Body>{siteConfig.tagline}</Body>
                    {/*<Body className="text-2xl font-semibold leading-150 mb-10">{siteConfig.tagline}</Body>*/}
                    <div className="mt-16">
                        <WaitlistForm inputId="waitlistBannerFormInput" />
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
