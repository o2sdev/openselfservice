import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Body, H2 } from '../Typography';

export function HomepageArchitectureSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div className="container flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-14 md:gap-28">
                <div>
                    <H2 className="mb-0!">
                        One framework. Three layers. <span className="text-highlighted">Full flexibility</span>
                    </H2>
                </div>
                <div className="flex flex-col gap-6">
                    <Body className="mb-0!">
                        Open Self&nbsp;Service separates content, presentation and integration — enabling gradual
                        growth.
                    </Body>
                    <a
                        href={''} // TODO: add link
                        className="button w-fit"
                        rel="noopener"
                    >
                        <span className="label flex items-center justify-center gap-2">Learn more</span>
                    </a>
                </div>
            </div>
            <div className="mt-14 w-full flex justify-center">
                <img
                    src="/img/homepage/architecture.svg"
                    alt="Architecture illustration"
                    className="w-full hidden md:block"
                />
                <img
                    src="/img/homepage/architecture-mobile.svg"
                    alt="Architecture illustration"
                    className="block md:hidden"
                />
            </div>
        </div>
    );
}
