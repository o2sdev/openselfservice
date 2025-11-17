import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import ChevronRightIcon from '@site/src/assets/icons/ChevronRight.svg';
import { H3 } from '@site/src/components/Typography';

interface FeaturesListWithImageProps {
    title: string;
    link: {
        text: string;
        href: string;
    };
    features: Array<{
        title: string;
        image: string;
    }>;
}

export function FeaturesListWithImage({ title, features, link }: FeaturesListWithImageProps) {
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
                                    'flex items-center justify-between py-4! px-0! border-b-[#9CA3AF] text-left! transition-colors cursor-pointer',
                                    'bg-transparent! border-0! border-b! rounded-none!',
                                    'font-bold! text-base! leading-6!',
                                    featureIndex === activeFeatureIndex
                                        ? 'text-white border-b-white'
                                        : 'text-[#9CA3AF]!',
                                )}
                            >
                                <span className="text-base leading-6 mb-0">{feature.title}</span>
                                <ChevronRightIcon
                                    className={clsx(
                                        'w-4 h-4 shrink-0',
                                        featureIndex === activeFeatureIndex ? '*:stroke-white' : '*:stroke-[#9CA3AF]',
                                    )}
                                />
                            </button>
                        ))}
                    </div>
                    <a href={link.href} className="button w-fit" rel="noopener" target={'blank'}>
                        <span className="label flex items-center justify-center gap-2">{link.text} </span>
                    </a>
                </div>
                {/* Right column: Image */}
                <div className="rounded-lg overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={activeFeatureIndex}
                            src={features[activeFeatureIndex].image}
                            alt={features[activeFeatureIndex].title}
                            className="w-full h-auto"
                            initial={{ opacity: 0, x: 160 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -160 }}
                            transition={{ duration: 0.16, ease: 'easeInOut' }}
                        />
                    </AnimatePresence>
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
