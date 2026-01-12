import React from 'react';

import RefreshCwIcon from '@site/src/assets/icons/RefreshCw.svg';
import RocketIcon from '@site/src/assets/icons/Rocket.svg';
import CircleCheckIcon from '@site/src/assets/icons/circle-check.svg';
import { DXPFeaturesSection } from '@site/src/components/DXPFeaturesSection';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { StarterInfoSection, type StarterInfoSectionProps } from '@site/src/components/StarterInfoSection';
import { Body, BodySmall } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

// const benefits: Array<BenefitCardProps> = [
//     {
//         icon: <SupportIcon className="w-[50px] h-[50px]" />,
//         title: 'Theming with Tailwind',
//         borderColor: 'transparent',
//     },
//     {
//         icon: <ContactIcon className="w-[50px] h-[50px]" />,
//         title: 'Override or extend components',
//         borderColor: 'transparent',
//     },
//     {
//         icon: <LoopIcon className="w-[50px] h-[50px]" />,
//         title: 'Add custom blocks (frontend + BFF logic)',
//         borderColor: 'transparent',
//     },
//     {
//         icon: <RoadmapIcon className="w-[50px] h-[50px]" />,
//         title: 'CMS schema and layout control',
//         borderColor: 'transparent',
//     },
//     {
//         icon: <BadgeIcon className="w-[50px] h-[50px]" />,
//         title: 'Lighthouse 90+ scores (Performance, SEO, A11y)',
//         borderColor: 'transparent',
//     },
// ];

const digitalPortalStarter: StarterInfoSectionProps = {
    mainLink: { link: 'https://demo-dxp.openselfservice.com/', label: 'See live demo', target: '_blank' },
    secondaryLink: {
        link: 'https://storybook-dxp.openselfservice.com/?path=/docs',
        label: 'View Storybook',
        target: '_blank',
    },
    otherLinks: [
        { link: '/docs/app-starters/dxp/overview', label: 'Docs', target: '_blank' },
        { link: 'https://github.com/o2sdev/dxp-starter-kit', label: 'GitHub', target: '_blank' },
    ],
    mainTitle: 'Digital Experience Portal Starter',
    description: (
        <>
            Start with a flexible foundation for content-rich, customer-supportive platforms. Our ready-to-use frontend
            for help centers, marketing sites, knowledge bases, scalable CX platforms — everything that is customer
            self-service-oriented.
        </>
    ),
    cliCommand: 'npx create-dxp-app@latest my-dxp-app',
    accordionItems: [
        {
            title: 'Feature list',
            value: 'functional-blocks',
            content: (
                <ul className="pl-5! m-0!">
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">CMS-driven page layout</span>: structure pages from content
                        blocks without code
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Hero & media content</span>: highlight key messages with
                        visual-first blocks
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Text & feature sections</span>: add product features, headlines,
                        and callouts
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Knowledge base</span>: organize help content by category or tags
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Content search & filtering</span>: help users find relevant
                        information fast
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Contact & support info</span>: add inquiry forms or help center
                        details
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Themeable design system</span>: customize look & feel with
                        tokens and Tailwind
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Multilingual support</span>: manage content and routes across
                        locales
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Prebuilt UI components</span>: Storybook-powered and
                        production-ready
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Composable integration layer</span>: enrich content with CRM,
                        search, forms
                    </li>
                </ul>
            ),
        },
        {
            title: 'Applicable integrations',
            value: 'integrations',
            content: (
                <ul className="list-none! p-0! m-0!">
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Strapi</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Contentful</BodySmall>
                    </li>

                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">SurveyJS</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Algolia</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Medusa</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Redis</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon title={'Planned'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Storyblok</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon title={'Planned'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Pimcore</BodySmall>
                    </li>
                    <li title={'Planned'} className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">OroCommerce</BodySmall>
                    </li>
                    <li title={'Planned'} className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Personalization API (TBD)</BodySmall>
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
    mainLink: { link: 'https://demo.openselfservice.com/', label: 'See live demo', target: '_blank' },
    secondaryLink: {
        link: 'https://storybook-o2s.openselfservice.com/?path=/docs',
        label: 'View Storybook',
        target: '_blank',
    },
    otherLinks: [
        { link: '/docs/app-starters/o2s/overview', label: 'Docs', target: '_blank' },
        { link: 'https://github.com/o2sdev/openselfservice', label: 'GitHub', target: '_blank' },
    ],
    mainTitle: 'Customer Portal Starter',
    description: (
        <>
            Build scalable self-service customer portals — faster.
            <br />A production-ready foundation with prebuilt UI, extensible data model, and backend integration points.
            Ideal for B2B or B2C use cases involving account access, service overviews, ticketing, knowledge base
            content, and billing.
        </>
    ),
    cliCommand: 'npx create-o2s-app@latest my-portal',
    accordionItems: [
        {
            title: 'Feature list',
            value: 'functional-blocks',
            content: (
                <ul className="pl-5! m-0!">
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Authentication & RBAC</span>: secure access control for user
                        accounts
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">User profile & preferences</span>: let users manage their own
                        data
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">In-app notifications</span>: communicate what’s important to
                        users
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Ticket & case handling</span>: collect, manage, and resolve
                        support issues
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Service overview</span>: show relevant service data and upsell
                        options
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Billing & documents</span>: provide access to invoices and files
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Orders & payments</span>: let customers view and track their
                        purchases
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">CMS-driven page layout</span>: empower teams to manage UI
                        without code
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Ready UI components</span>: build fast using pre-made, tested
                        elements
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Themeable design system</span>: adjust colors and layout to your
                        brand
                    </li>
                    <li className="text-white text-sm leading-[1.3] py-1.5">
                        <span className="font-semibold">Composable integration layer</span>: connect any backend via BFF
                        modules
                    </li>
                </ul>
            ),
        },
        {
            title: 'Applicable integrations',
            value: 'integrations',
            content: (
                <ul className="list-none! p-0! m-0!">
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Strapi</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Contentful</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Keycloak</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Auth.js</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">SurveyJS</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">SAP S/4 Hana</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Algolia</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Medusa</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <CircleCheckIcon title={'Available'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]" />
                        <BodySmall className="mb-0!">Redis</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon title={'Planned'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Storyblok</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Zendesk</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon title={'Planned'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Pimcore</BodySmall>
                    </li>
                    <li title={'Planned'} className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">OroCommerce</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon title={'Planned'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Salesforce Service Cloud</BodySmall>
                    </li>
                    <li className="flex gap-4 items-center py-1.5">
                        <RefreshCwIcon title={'Planned'} className="h-5 w-5 shrink-0 *:stroke-[#21D99A]/40" />
                        <BodySmall className="mb-0!">Kill Bill (billing)</BodySmall>
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
                        <div className={styles.gradientCircleBlue} />
                        <main className={styles.mainContentWrapper}>
                            <HeroBannerSection
                                containerWidth="narrow"
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
                                <section id="customer-portal-starter" className="px-4 scroll-m-24">
                                    <StarterInfoSection {...customerPortalStarter} />
                                </section>
                                <section id="digital-portal-starter" className="px-4 scroll-m-24">
                                    <StarterInfoSection {...digitalPortalStarter} />
                                </section>
                                <section className="px-4">
                                    <DXPFeaturesSection />
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
                                description="Tell us what kind of frontend starter would help your next project. We're planning more — and we want your input."
                                primaryButton={{
                                    text: 'Submit your idea',
                                    url: '/contact',
                                }}
                            />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
