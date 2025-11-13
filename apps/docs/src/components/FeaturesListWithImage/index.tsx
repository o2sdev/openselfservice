import clsx from 'clsx';
import React, { useState } from 'react';

import ArrowRightIcon from '@site/src/assets/icons/ArrowRight.svg';
import { BodyBold, H3 } from '@site/src/components/Typography';

interface FeaturesListWithImageProps {
    title: string;
    features: Array<{
        title: string;
        image: string;
    }>;
}

export function FeaturesListWithImage({ title, features }: FeaturesListWithImageProps) {
    const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
    return (
        <div className="flex flex-col gap-8">
            {/* Desktop layout: 2 columns */}
            <div className="hidden lg:grid lg:grid-cols-2 gap-8 w-full">
                {/* Left column: Title and button list */}
                <div className="flex flex-col gap-8">
                    <H3 className="mb-0!">{title}</H3>
                    <div className="flex flex-col">
                        {features.map((feature, featureIndex) => (
                            <button
                                key={featureIndex}
                                type="button"
                                onClick={() => setActiveFeatureIndex(featureIndex)}
                                className={clsx(
                                    'flex items-center justify-between py-4! px-0! border-b border-[#FAFAFA] text-left! transition-colors cursor-pointer',
                                    'bg-transparent! border-0! border-b! rounded-none!',
                                    'font-bold! text-base! leading-6!',
                                    featureIndex === activeFeatureIndex
                                        ? 'text-highlighted!'
                                        : 'text-white! hover:text-white/80!',
                                )}
                            >
                                <BodyBold className="text-base! leading-6! mb-0!">{feature.title}</BodyBold>
                                <ArrowRightIcon
                                    className={clsx(
                                        'w-4 h-4 shrink-0',
                                        featureIndex === activeFeatureIndex ? '*:stroke-(--color-highlighted)' : '',
                                    )}
                                />
                            </button>
                        ))}
                    </div>
                </div>
                {/* Right column: Image */}
                <div className="h-[546px] overflow-hidden rounded-lg">
                    <img
                        src={features[activeFeatureIndex].image}
                        alt={features[activeFeatureIndex].title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Mobile/Tablet layout: Single column */}
            <div className="flex flex-col gap-8 lg:hidden w-full">
                <H3 className="mb-0!">{title}</H3>
                {features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex flex-col gap-4">
                        <h4 className="m-0! font-bold! text-base! leading-6! text-white">{feature.title}</h4>
                        <img src={feature.image} alt={feature.title} className="w-full h-auto rounded-lg" />
                    </div>
                ))}
            </div>
        </div>
    );
}
