import React, { type ReactNode } from 'react';

import Accordion, { type AccordionItem } from '@site/src/components/Accordion';
import { CopyCommandButton } from '@site/src/components/CopyCommandButton';
import { Body, H2 } from '@site/src/components/Typography';

export interface StarterInfoSectionLink {
    link: string;
    label: string;
    target?: string;
}

export interface StarterInfoSectionImage {
    src: string;
    alt: string;
}

export interface StarterInfoSectionProps {
    links: StarterInfoSectionLink[];
    mainTitle: string;
    description: string | ReactNode;
    cliCommand: string;
    accordionItems: AccordionItem[];
    img: StarterInfoSectionImage;
    accordionDefaultValue?: string;
    accordionType?: 'single' | 'multiple';
}

export function StarterInfoSection({
    links,
    mainTitle,
    description,
    cliCommand,
    accordionItems,
    img,
    accordionDefaultValue,
    accordionType = 'multiple',
}: StarterInfoSectionProps) {
    return (
        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            <div className="flex flex-col gap-6 min-w-0">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-wrap gap-x-12 gap-y-2">
                        {links.map((linkItem) => (
                            <a
                                key={linkItem.label}
                                href={linkItem.link}
                                className="text-white! underline! hover:no-underline! text-sm font-medium"
                                target={linkItem.target}
                            >
                                {linkItem.label}
                            </a>
                        ))}
                    </div>
                    <H2 className="mb-0!">{mainTitle}</H2>
                    <Body className="mb-0!">{description}</Body>
                </div>
                <div className="max-w-fit">
                    <CopyCommandButton command={cliCommand} />
                </div>
                <Accordion items={accordionItems} defaultValue={accordionDefaultValue} type={accordionType} />
            </div>
            <div className="relative h-[562px] md:h-[762px]">
                <img src={img.src} alt={img.alt} className="absolute top-0 left-0 h-full max-w-none!" />
            </div>
        </div>
    );
}
