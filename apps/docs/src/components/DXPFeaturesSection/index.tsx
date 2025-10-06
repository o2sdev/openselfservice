import React from 'react';

import CodeIcon from '@site/src/assets/icons/code.svg';
import CodepenIcon from '@site/src/assets/icons/codepen.svg';
import GitcompareIcon from '@site/src/assets/icons/gitcompare.svg';

import Card from '../Card';
import { H2, H3 } from '../Typography';

interface FeatureCardProps {
    title: string;
    icon: React.ReactNode;
    features: string[];
    buttonText: string;
    buttonUrl: string;
    borderColor?: 'gradient' | 'blue' | 'green' | 'light';
}

const features: Array<FeatureCardProps> = [
    {
        title: 'Modern Frontend Foundation',
        icon: (
            <div className="absolute inset-[16.67%_8.33%]">
                <CodeIcon className="w-7 h-7 text-[#21d99a]" />
            </div>
        ),
        features: ['Next.js based frontend', 'UI components & content types', 'Optimized for SEO, a11y & web perf'],
        buttonText: 'Learn more',
        buttonUrl: '/docs/app-starters/dxp/overview',
        borderColor: 'light',
    },
    {
        title: 'Composable Integration Layer',
        icon: (
            <div className="absolute inset-[8.333%]">
                <CodepenIcon className="w-7 h-7 text-[#21d99a]" />
            </div>
        ),
        features: ['Future-ready architecture', 'API Harmonization', 'Vendor independence'],
        buttonText: 'Learn more',
        buttonUrl: '/docs/main-components/harmonization-app/',
        borderColor: 'light',
    },
    {
        title: 'Seamless CMS Experience',
        icon: (
            <div className="absolute inset-[12.5%]">
                <GitcompareIcon className="w-7 h-7 text-[#21d99a]" />
            </div>
        ),
        features: ['Headless CMS integration', 'Powerful content management', 'Multilingual support'],
        buttonText: 'Learn more',
        buttonUrl: '/docs/integrations/cms/strapi/overview',
        borderColor: 'light',
    },
];

const FeatureCard: React.FC<FeatureCardProps> = ({
    title,
    icon,
    features,
    buttonText,
    buttonUrl,
    borderColor = 'blue',
}) => {
    return (
        <Card borderColor={borderColor}>
            {/* Header */}
            <div className="flex items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start self-stretch w-full">
                    <H3 className="text-2xl font-semibold leading-[1.5] text-white w-full">{title}</H3>
                </div>
                <div className="h-[26.533px] w-11 flex-shrink-0 relative">{icon}</div>
            </div>

            {/* Features List */}
            <div className="flex flex-col items-start justify-start w-full flex-1">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-start justify-start w-full relative">
                        <div className="absolute border-b border-zinc-400 inset-0 pointer-events-none" />
                        <div className="flex items-center justify-between px-0 py-4 w-full">
                            <div className="flex-1 font-bold leading-6 text-base text-white">{feature}</div>
                            <div className="relative w-4 h-4 flex-shrink-0">
                                {/* <LightbulbIcon className="w-4 h-4 text-[#21d99a]" /> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button */}
            <a href={buttonUrl} className="button">
                {buttonText}
            </a>
        </Card>
    );
};

export function DXPFeaturesSection() {
    return (
        <div className="flex flex-col items-start justify-start w-full">
            <H2 className="font-semibold leading-[1.2] text-3xl text-white w-full">
                What does the <span className="text-highlighted">DXP Starter offer?</span>
            </H2>

            <div className="flex flex-col gap-8 items-start justify-start w-full">
                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-start w-full">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </div>
    );
}
