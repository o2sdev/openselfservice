import React from 'react';

import { H2 } from '../Typography';

export function DXPArchitectureSection() {
    return (
        <div className="flex flex-col items-center justify-start w-full">
            {/* Header */}
            <H2 className="font-semibold leading-[1.2] text-3xl text-white w-full !mb-[10px]">
                How does it <span className="text-highlighted">work?</span>
            </H2>

            {/* Architecture Diagram */}
            <div className="relative w-full max-w-[1280px] my-16! md:my-10!">
                <img
                    src="/img/homepage/architecture-dxp.svg"
                    alt="DXP Architecture Diagram"
                    className="w-full h-full hidden md:block"
                />
                <img
                    src="/img/homepage/architecture-mobile-dxp.svg"
                    alt="DXP Architecture Diagram"
                    className="w-full h-full block md:hidden"
                />
            </div>
        </div>
    );
}
