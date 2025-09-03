import React from 'react';

import { Body, H2 } from '../Typography';

export function DXPComplexPlatformsSection() {
    return (
        <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-8">
            {/* Left side - Image */}
            <div className="h-[372px] relative w-full lg:w-[481px] flex-shrink-0">
                <img
                    src="/img/homepage/built-for-complex-platforms.svg"
                    alt="Built for complex platforms diagram"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Right side - Text content */}
            <div className="flex flex-col items-start justify-start w-full lg:w-[460px]">
                <H2 className="font-semibold leading-[1.2] text-3xl text-white w-full mb-10!">
                    Built for <span className="text-highlighted">complex, enterprise-scale platforms</span>
                </H2>

                <Body className="min-w-full text-base text-white w-min">
                    <p className="leading-6 mb-2">
                        Unlike simple CMS-only frontends, our starter uses a dedicated integration and data
                        normalization layer that allows for future scaling and makes the solution backend-agnostic.
                    </p>
                    <p className="leading-6">
                        <span>While this architecture is more complex than a direct CMS integration, </span>
                        <span className="font-bold">
                            it's future-proof and scalable — perfect when you know your project will grow.
                        </span>
                    </p>
                </Body>
            </div>
        </div>
    );
}
