import clsx from 'clsx';
import React, { type ReactNode } from 'react';

import Link from '@docusaurus/Link';

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
    otherLinks: StarterInfoSectionLink[];
    mainLink: StarterInfoSectionLink;
    secondaryLink?: StarterInfoSectionLink;
    mainTitle: string;
    description: string | ReactNode;
    cliCommand: string;
    accordionItems: AccordionItem[];
    img: StarterInfoSectionImage;
    accordionDefaultValue?: string;
    accordionType?: 'single' | 'multiple';
}

export function StarterInfoSection({
    otherLinks,
    mainLink,
    secondaryLink,
    mainTitle,
    description,
    cliCommand,
    accordionItems,
    img,
    accordionDefaultValue,
    accordionType = 'single',
}: StarterInfoSectionProps) {
    return (
        <div className="grid md:grid-cols-2 gap-14 md:gap-20">
            <div className="flex flex-col gap-6 min-w-0">
                <div className="flex flex-col gap-8">
                    <H2 className="mb-0!">{mainTitle}</H2>
                    <Body className="mb-0!">{description}</Body>
                </div>
                <div className={clsx('space-y-4 md:max-w-fit')}>
                    {cliCommand && <CopyCommandButton command={cliCommand} />}
                    {mainLink && (
                        <div className={clsx('sm:flex gap-2 space-y-4 w-full')}>
                            <Link
                                className={clsx('button', cliCommand && 'sm:w-1/2')}
                                href={mainLink.link}
                                target={mainLink.target}
                            >
                                {mainLink.label}
                            </Link>

                            {secondaryLink && (
                                <Link
                                    href={secondaryLink.link}
                                    className={clsx('button button-tertiary', cliCommand && 'sm:w-1/2')}
                                    target={secondaryLink.target}
                                    rel="noopener"
                                >
                                    <span className="label flex items-center justify-center gap-2">
                                        {secondaryLink.label}
                                    </span>
                                </Link>
                            )}
                        </div>
                    )}
                </div>
                <div className="flex flex-wrap gap-x-12 gap-y-2">
                    {otherLinks.map((linkItem) => (
                        <a
                            key={linkItem.label}
                            href={linkItem.link}
                            className="text-white! underline! hover:no-underline! text-sm font-medium"
                            target={linkItem.target}
                            rel={linkItem.target === '_blank' ? 'noopener noreferrer' : undefined}
                        >
                            {linkItem.label}
                        </a>
                    ))}
                </div>
                <Accordion items={accordionItems} defaultValue={accordionDefaultValue} type={accordionType} />
            </div>
            <div className="relative h-[562px] md:h-[762px]">
                <img src={img.src} alt={img.alt} className="absolute top-0 left-0 h-full max-w-none!" />
            </div>
        </div>
    );
}
