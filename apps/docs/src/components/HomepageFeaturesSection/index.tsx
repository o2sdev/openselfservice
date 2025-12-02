import React from 'react';

import Link from '@docusaurus/Link';

import BlocksIcon from '@site/src/assets/icons/Blocks.svg';
import UserIcon from '@site/src/assets/icons/CircleUser.svg';
import FileSearchIcon from '@site/src/assets/icons/FileSearch.svg';
import TicketIcon from '@site/src/assets/icons/TicketX.svg';
import WalletIcon from '@site/src/assets/icons/Wallet.svg';
import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';

import { Body, H2, H3, H4 } from '../Typography';

interface FeatureItemProps {
    text: string;
    icon: React.ReactNode;
    textClassName?: string;
}

const FeatureItem = ({ text, icon, textClassName = '' }: FeatureItemProps) => (
    <div className="flex gap-4 items-start">
        <div className="flex items-center pt-0.5 shrink-0">{icon}</div>
        <Body className={`mb-0! text-base leading-6 ${textClassName}`}>{text}</Body>
    </div>
);

interface BuildingBlockCardProps {
    title: string;
    icon: React.ReactNode;
}

const BuildingBlockCard = ({ title, icon }: BuildingBlockCardProps) => (
    <div className="flex flex-col gap-2 items-start">
        <div className="flex items-center mb-2 [&_svg_path]:stroke-(--color-highlighted)">{icon}</div>
        <H4 className="mb-0! leading-7!">{title}</H4>
    </div>
);

export function HomepageFeaturesSection() {
    const developersFeatures = [
        'Performance-first, modern stack',
        'Built-in reusable UI components & blocks',
        'Full frontend decoupling & unified API middleware',
        'Ready to use CMS content models',
        'Growing list of integrations',
    ];

    const digitalTeamsFeatures = [
        'Quick start with built-in starters & components',
        'Gain control over frontend without dev support',
        'From support apps to enterprise CX platforms',
        'Vendor independent frontend',
        'UX optimized for efficient customer self-service',
    ];

    const buildingBlocks = [
        {
            title: 'User authentication & profile management',
            icon: <UserIcon className="h-5 w-5" />,
        },
        {
            title: 'Ticketing and customer support workflows',
            icon: <TicketIcon className="h-5 w-5" />,
        },
        {
            title: 'Payments, invoices, orders',
            icon: <WalletIcon className="h-5 w-5" />,
        },
        {
            title: 'Knowledge base and content search',
            icon: <FileSearchIcon className="h-5 w-5" />,
        },
        {
            title: 'CMS-powered landing pages and sections',
            icon: <BlocksIcon className="h-5 w-5" />,
        },
    ];

    return (
        <section className="px-4 flex flex-col items-center gap-y-20">
            <H2 className="mb-0! text-center">
                <span className="text-highlighted">Value</span> for developers and business leaders
            </H2>

            <div className="w-full flex flex-col md:flex-row rounded-[20px] overflow-hidden">
                <div className="flex-1 bg-white/10 p-10 rounded-t-[20px] md:rounded-tl-[20px] md:rounded-bl-[20px] md:rounded-tr-none md:rounded-br-none">
                    <div className="flex flex-col gap-6">
                        <H3 className="mb-0!">For developers</H3>
                        <ul className="flex flex-col gap-2 list-none p-0! m-0!">
                            {developersFeatures.map((feature, idx) => (
                                <li key={idx} className="m-0 p-0">
                                    <FeatureItem
                                        text={feature}
                                        icon={<CircleCheckIcon className="h-5 w-5 *:stroke-violet" />}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex-1 bg-white p-10 rounded-b-[20px] md:rounded-tr-[20px] md:rounded-br-[20px] md:rounded-tl-none md:rounded-bl-none">
                    <div className="flex flex-col gap-6">
                        <H3 className="mb-0! text-[#000d42]!">For digital transformation leaders</H3>
                        <ul className="flex flex-col gap-2 list-none p-0! m-0!">
                            {digitalTeamsFeatures.map((feature, idx) => (
                                <li key={idx} className="m-0 p-0">
                                    <FeatureItem
                                        text={feature}
                                        icon={<CircleCheckIcon className="h-5 w-5 *:stroke-(--color-highlighted)" />}
                                        textClassName="text-[#000d42]"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/*<div className="w-full flex flex-col gap-16">*/}
            {/*    <H3 className="mb-0! text-white">Built-in capabilities</H3>*/}
            {/*    <div className="grid grid-cols-1 md:grid-cols-5 gap-7">*/}
            {/*        {buildingBlocks.map((block, idx) => (*/}
            {/*            <BuildingBlockCard key={idx} title={block.title} icon={block.icon} />*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}

            <Link href="/product/features" className="button">
                Explore full feature set
            </Link>
        </section>
    );
}
