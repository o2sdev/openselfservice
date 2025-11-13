import React from 'react';

import RefreshCwIcon from '@site/src/assets/icons/RefreshCw.svg';
import RocketIcon from '@site/src/assets/icons/Rocket.svg';
import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import BadgeIcon from '@site/src/assets/icons/o2s-icon-badge.svg';
import ContactIcon from '@site/src/assets/icons/o2s-icon-contact.svg';
import LoopIcon from '@site/src/assets/icons/o2s-icon-loop.svg';
import RoadmapIcon from '@site/src/assets/icons/o2s-icon-roadmap.svg';
import SupportIcon from '@site/src/assets/icons/o2s-icon-support.svg';
import { type BenefitCardProps, BenefitsSection } from '@site/src/components/BenefitsSection';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { StarterInfoSection, type StarterInfoSectionProps } from '@site/src/components/StarterInfoSection';
import { Body, BodySmall } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

const benefits: Array<BenefitCardProps> = [
    {
        icon: <SupportIcon className="w-[50px] h-[50px]" />,
        title: 'Theming with Tailwind',
        borderColor: 'transparent',
    },
    {
        icon: <ContactIcon className="w-[50px] h-[50px]" />,
        title: 'Override or extend components',
        borderColor: 'transparent',
    },
    {
        icon: <LoopIcon className="w-[50px] h-[50px]" />,
        title: 'Add custom blocks (frontend + BFF logic)',
        borderColor: 'transparent',
    },
    {
        icon: <RoadmapIcon className="w-[50px] h-[50px]" />,
        title: 'CMS schema and layout control',
        borderColor: 'transparent',
    },
    {
        icon: <BadgeIcon className="w-[50px] h-[50px]" />,
        title: 'Lighthouse 90+ scores (Performance, SEO, A11y)',
        borderColor: 'transparent',
    },
];

const digitalPortalStarter: StarterInfoSectionProps = {
    links: [
        { link: 'https://demo-dxp.openselfservice.com/', label: 'Live Demo', target: '_blank' },
        { link: '/docs/app-starters/dxp/overview', label: 'Docs' },
        { link: 'https://storybook-dxp.openselfservice.com/?path=/docs', label: 'Storybook', target: '_blank' },
        { link: 'https://github.com/o2sdev/dxp-starter-kit', label: 'Github', target: '_blank' },
    ],
    mainTitle: 'Digital Portal Starter',
    description: (
        <>
            Headless CMS-powered content portal with knowledge base features.
            <br />
            Great for public help centers, marketing sites, and scalable experience platforms.
        </>
    ),
    cliCommand: 'npx create-o2s-app@latest my-dxp-app --template dxp',
    accordionItems: [
        {
            title: 'Business value + key functionality',
            value: 'business-value',
            content: (
                <ul className="pl-5! m-0!">
                    <li className="text-white text-sm leading-[1.3] py-1.5">CMS-powered structure and layouts</li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        Multi-page navigation (home, articles, FAQs)
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        Block-based architecture with layout mapping
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">Optional personalization & i18n</li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        Storybook with reusable content components
                    </li>
                </ul>
            ),
        },
        {
            title: 'Functional blocks',
            value: 'functional-blocks',
            content: (
                <ul className="pl-5! m-0!">
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Content blocks:</span> Hero, Media, Text+Image, Call-to-actions
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Structure blocks:</span> Sections, Columns, Cards
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Knowledge base:</span> Article, FAQ, Category overview
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Search & filters:</span> Tag filter, breadcrumb
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Contact:</span> Form, info section
                    </li>
                </ul>
            ),
        },
        {
            title: 'Integrations',
            value: 'integrations',
            content: (
                <ul className="list-none! p-0! m-0!">
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Strapi</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Contentful</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Algolia</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Personalization</BodySmall>
                    </li>
                </ul>
            ),
        },
    ],
    img: {
        src: '/img/starterspage/digital-portal.png',
        alt: 'Digital Portal Starter view',
    },
};

const customerPortalStarter: StarterInfoSectionProps = {
    links: [
        { link: 'https://demo.openselfservice.com/', label: 'Live Demo', target: '_blank' },
        { link: 'https://github.com/o2sdev/openselfservice', label: 'GitHub', target: '_blank' },
        { link: '/docs/app-starters/o2s/overview', label: 'Docs' },
        {
            link: 'https://storybook-o2s.openselfservice.com/?path=/docs',
            label: 'Storybook',
            target: '_blank',
        },
    ],
    mainTitle: 'Customer Portal Starter',
    description: (
        <>
            Build scalable self-service customer portals faster.
            <br />A production-grade foundation with prebuilt UI and backend logic for authenticated user areas, service
            information, ticketing, and orders.
        </>
    ),
    cliCommand: 'npx create-o2s-app@latest my-portal',
    accordionItems: [
        {
            title: 'Business value + key functionality',
            value: 'business-value',
            content: (
                <ul className="pl-5! m-0!">
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        Authenticated login and protected routes
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        Orders and payments integration (mocked or real API)
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">Ticketing via CRM adapter</li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        Notification center with CMS-based content
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        CMS-managed user dashboard using layout blocks
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">Ready-to-use UI components in Storybook</li>
                </ul>
            ),
        },
        {
            title: 'Functional blocks',
            value: 'functional-blocks',
            content: (
                <ul className="pl-5! m-0!">
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">User & access:</span> Login, dashboard, auth status
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Support:</span> Ticket list, ticket details, contact widgets
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Service info:</span> Service cards, status blocks
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Knowledge base:</span> FAQ, category list, article viewer
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Notifications:</span> Notification list, unread counter
                    </li>
                </ul>
            ),
        },
        {
            title: 'Integrations',
            value: 'integrations',
            content: (
                <ul className="list-none! p-0! m-0!">
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Auth.js / Keycloak</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">CRM ticket API (mock)</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Redis (notifications)</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Strapi CMS</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Algolia</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">ERP / billing system</BodySmall>
                    </li>
                </ul>
            ),
        },
    ],
    img: {
        src: '/img/starterspage/customer-portal.png',
        alt: 'Customer Portal Starter view',
    },
};

export default function ProductStarters() {
    return (
        <Layout title="Starters">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <div className={styles.gradientWrapper}>
                        {/* TODO: add new gradient circle here */}
                        <div className={styles.gradientCircleBlue} />
                        <main className={styles.mainContentWrapper}>
                            <HeroBannerSection
                                badge={{
                                    text: 'Starters',
                                    icon: <RocketIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        Start fast with{' '}
                                        <span className="text-highlighted">frontend application starters</span>
                                    </>
                                }
                                description={
                                    <Body>
                                        Use one of our pre-configured starter kits to launch your project — then extend
                                        it with your own blocks and integrations.
                                    </Body>
                                }
                            />
                            <div className="flex flex-col gap-y-40 pb-40">
                                <section id="customer-portal-starter" className="px-4">
                                    <StarterInfoSection {...customerPortalStarter} />
                                </section>
                                <section id="digital-portal-starter" className="px-4">
                                    <StarterInfoSection {...digitalPortalStarter} />
                                </section>
                                <section className="px-4">
                                    <BenefitsSection
                                        title={
                                            <>
                                                <span className="text-highlighted">What you get</span>
                                                <span className="text-white">{' with every starter'}</span>
                                            </>
                                        }
                                        description={
                                            <>
                                                Each starter includes a modular frontend layer built on Open Self
                                                Service — with fully customizable UI, layout blocks, and modern DX
                                                features.
                                            </>
                                        }
                                        benefits={benefits}
                                    />
                                </section>
                            </div>
                        </main>
                    </div>
                    <div className="section-gradient-1 px-4 py-40 mb-0!">
                        <section className="mb-0!">
                            <FooterSection
                                title={
                                    <>
                                        <span className="text-white">Looking for </span>
                                        <span className="text-highlighted">something else?</span>
                                    </>
                                }
                                description="Tell us what kind of frontend starter would help your next project.We're planning more — and we want your input."
                                primaryButton={{
                                    text: 'Submit your idea',
                                    url: '/contact', // TODO: confirm link
                                }}
                            />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
