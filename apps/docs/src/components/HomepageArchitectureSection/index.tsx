import React from 'react';

import Link from '@docusaurus/Link';

import { Body, H2 } from '../Typography';

export function HomepageArchitectureSection() {
    return (
        <section className="px-4 flex flex-col items-center">
            <div className="grid md:grid-cols-2 gap-14 md:gap-14">
                <div>
                    <H2 className="mb-0!">
                        One framework. <br />
                        Three layers for <span className="text-highlighted">full flexibility.</span>
                    </H2>
                </div>
                <div className="flex flex-col gap-6">
                    <Body className="mb-0!">
                        Built on composable principles — Open Self Service offers a modular, backend-agnostic foundation
                        for building modern customer-facing platforms. Each layer is designed to be independently
                        developed, extended or replaced — giving full control over how the frontend evolves.
                    </Body>
                    <Link href={'/docs/overview/architecture'} className="button w-fit" rel="noopener">
                        Learn more
                    </Link>
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
        </section>
    );
}
