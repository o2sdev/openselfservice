import React from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { Body, H2 } from '../Typography';

export function HomepageArchitectureSection() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div className="container flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-14 md:gap-28">
                <div>
                    <H2 className="mb-[0]">
                        Composable architecture <br />
                        for digital self&nbsp;service solutions
                    </H2>
                </div>
                <div>
                    <Body>
                        Open Self&nbsp;Service is designed to simplify the process of creating modern customer portals
                        that need to integrate many data sources to provide capabilities to the users.
                    </Body>
                    <Body className="mb-[0]">
                        The components we provide allow to build a decoupled, modern & fast frontend application and
                        connect any API you might need - no matter if it's a CRM, CMS or a headless commerce backend.
                    </Body>
                </div>
            </div>
            <div className="mt-14 md:mt-24 w-full flex justify-center">
                <img
                    src="/img/homepage/architecture.svg"
                    alt="Archotecture illustration"
                    className="w-full hidden md:block"
                />
                <img
                    src="/img/homepage/architecture-mobile.svg"
                    alt="Archotecture illustration"
                    className="block md:hidden"
                />
            </div>
        </div>
    );
}
