import clsx from 'clsx';
import React from 'react';

import Link from '@docusaurus/Link';

import ArrowLeftRightGreenTileIcon from '@site/src/assets/icons/ArrowLeftRightGreenTile.svg';
import BanGreenTileIcon from '@site/src/assets/icons/BanGreenTile.svg';
import BlocksPurpleTileIcon from '@site/src/assets/icons/BlocksPurpleTile.svg';
import CircleUserGreenTileIcon from '@site/src/assets/icons/CircleUserGreenTile.svg';
import GaugePurpleTileIcon from '@site/src/assets/icons/GaugePurpleTile.svg';
import LayersPurpleTileIcon from '@site/src/assets/icons/LayersPurpleTile.svg';
import LayoutDashboardGreenTileIcon from '@site/src/assets/icons/LayoutDashboardGreenTile.svg';
import ScalingGreenTileIcon from '@site/src/assets/icons/ScalingGreenTile.svg';
import SquareStackPurpleTileIcon from '@site/src/assets/icons/SquareStackPurpleTile.svg';
import StarIcon from '@site/src/assets/icons/Star.svg';
import WaypointsPurpleTileIcon from '@site/src/assets/icons/WaypointsPurpleTile.svg';
import { FeatureTileList } from '@site/src/components/FeatureTile';
import { FeaturesListWithImage } from '@site/src/components/FeaturesListWithImage';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { Body, BodySmall, H2, H3 } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

const keyBenefits = {
    developers: {
        title: 'For developers',
        features: [
            {
                icon: <GaugePurpleTileIcon />,
                title: 'Performance-first, modern stack',
                description: 'Next.js, SSR, Tailwind, shadcn, Lighthouse 90+ scores',
            },
            {
                icon: <BlocksPurpleTileIcon />,
                title: 'Built-in reusable UI components & blocks',
                description: 'Create pages from modular components and UI blocks',
            },
            {
                icon: <LayersPurpleTileIcon />,
                title: 'Unified API layer',
                description: 'Fetch all backend data via one normalized interface',
            },
            {
                icon: <SquareStackPurpleTileIcon />,
                title: 'Ready to use CMS content models',
                description: 'Use pre-defined schemas mapped to frontend components',
            },
            {
                icon: <WaypointsPurpleTileIcon />,
                title: 'Growing list of integrations',
                description: 'Connect to CRM, CMS, search, auth, and more...',
            },
        ],
    },

    digitalTeams: {
        title: 'For digital transformation leaders',
        features: [
            {
                icon: <ScalingGreenTileIcon />,
                title: 'Quick start with built-in starters & components',
                description: 'Build with our starters, functional blocks & components',
            },
            {
                icon: <LayoutDashboardGreenTileIcon />,
                title: 'Control over frontend without dev support',
                description: 'Let CMS users manage layout and content',
            },
            {
                icon: <ArrowLeftRightGreenTileIcon />,
                title: 'From support apps to enterprise CX platforms',
                description:
                    'Support apps; help centers; asset, subscription or fleet management portals; large-scale digital Customer eXperience platforms',
            },
            {
                icon: <BanGreenTileIcon />,
                title: 'Vendor independent frontend',
                description: 'Choose the best tools, replace them freely when needed',
            },
            {
                icon: <CircleUserGreenTileIcon />,
                title: 'UX optimized for efficient customer self-service',
                description: 'Use proven UI patterns designed for great CX',
            },
        ],
    },
};

const technicalCapabilities = [
    {
        title: 'Developer Experience',
        features: [
            {
                title: 'TypeScript SDK',
                description: 'For easy, type-safe API consumption.',
            },
            {
                title: 'CLI app scaffolding',
                description: 'Use our CLI to scaffold a full project in seconds.',
            },
            {
                title: 'Optimized monorepo tooling',
                description: 'Use Turborepo with fast dev workflows, hot reload and modular builds.',
            },
            {
                title: 'Storybook',
                description: 'Browse and test our UI components with built-in Storybook integration.',
            },
            {
                title: 'Code quality tooling',
                description: 'Enforced code style and linting with ESLint, Prettier, and CI-ready configs.',
            },
            {
                title: 'Integrations with headless APIs',
                description: 'Many integrations come OOTB. Easily add your own with our built-in extension methods.',
            },
            {
                title: 'Docker-ready deployment',
                description: 'Preconfigured Docker & Docker Compose setup for local and cloud deployments.',
            },
            {
                title: 'Renovate bot',
                description: 'Stay secure and up-to-date with Renovate preconfigured for monorepo environments.',
            },
        ],
    },
    {
        title: 'Frontend app',
        features: [
            {
                title: 'Next.js',
                description: 'based frontend for great performance and developer experience.',
            },
            {
                title: 'TypeScript',
                description: 'full-stack TypeScript support out of the box.',
            },
            {
                title: 'Tailwind and shadcn/ui',
                description: 'large UI component library and solid tools for rapid UI development.',
            },
            {
                title: 'Next-intl',
                description: 'for Internationalization and localization support.',
            },
            {
                title: 'Tailwind + UI tokens',
                description: 'for Ui customization, theming and branding.',
            },
            {
                title: 'Built-in authentication',
                description: 'Auth.js-based authentication support. RBAC via extenral integrations.',
            },
            {
                title: 'Dynamic, CMS-powered page composition',
                description: 'Page structure and component configuration built-in, managed via headless CMS-s.',
            },
            {
                title: '90+ Lighthouse scores',
                description: 'Performance, accessibility, SEO, and dev best practices OOTB.',
            },
        ],
    },
    {
        title: 'API layer',
        features: [
            {
                title: 'NestJS integration middleware',
                description:
                    'A powerful backend-for-frontend written in NestJS and TypeScript, ready for composable integrations.',
            },
            {
                title: 'Data orchestration and aggregation',
                description: 'Orchestrate requests and aggregate data from multiple sources.',
            },
            {
                title: 'API normalization',
                description: 'Normalize frontend data model and stay vendor independent.',
            },
            {
                title: 'Event-driven with RxJS',
                description: 'Use reactive programming patterns for real-time updates and external triggers.',
            },
            {
                title: 'Backend-agnostic frontend',
                description: 'Swap APIs without changing the frontend.',
            },
            {
                title: 'Request optimization',
                description: 'Reduce over-fetching and minimize the number of API calls with smart data orchestration.',
            },
        ],
    },
];

const functionalBlocks = [
    {
        title: 'Core customer portal blocks',
        link: {
            text: 'Browse in Storybook',
            href: 'https://storybook-o2s.openselfservice.com/',
        },
        features: [
            {
                title: 'Authentication & RBAC',
                image: '/img/featurespage/img-authentication.png',
            },
            {
                title: 'User account & preferences',
                image: '/img/featurespage/img-user-profile.png',
            },
            {
                title: 'In-app notifications',
                image: '/img/featurespage/img-notifications.png',
            },
            {
                title: 'Ticket & case lists and forms',
                image: '/img/featurespage/img-ticket-submission.png',
            },
            {
                title: 'Services overview & management',
                image: '/img/featurespage/img-service-overview.png',
            },
            {
                title: 'Billing & documents',
                image: '/img/featurespage/img-invoices-payments.png',
            },
            {
                title: 'Order list & details',
                image: '/img/featurespage/img-orders.png',
            },
        ],
    },
    {
        title: 'Content & knowledge blocks',
        link: {
            text: 'Browse in Storybook',
            href: 'https://storybook-dxp.openselfservice.com/',
        },
        features: [
            {
                title: 'CMS-powered marketing content',
                image: '/img/featurespage/img-cms.png',
            },
            {
                title: 'Knowledge base & help center',
                image: '/img/featurespage/img-knowledge.png',
            },
            {
                title: 'Content search & browsing',
                image: '/img/featurespage/img-search.png',
            },
            {
                title: 'Content categories & tags',
                image: '/img/featurespage/img-content-categories.png',
            },
            {
                title: 'Navigation & i18n',
                image: '/img/featurespage/img-navigation.png',
            },
        ],
    },
];

export default function ProductFeatures() {
    return (
        <Layout title="Features">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <div className={styles.gradientWrapper}>
                        <div className={styles.gradientCircleBlue} />
                        <main className={styles.mainContentWrapper}>
                            <HeroBannerSection
                                containerWidth="narrow"
                                badge={{
                                    text: 'Product Features',
                                    icon: <StarIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        Explore what <span className="text-highlighted">Open Self Service</span> offers
                                    </>
                                }
                                description={
                                    <Body>
                                        Here's a breakdown of what the framework enables — both for business outcomes
                                        and developer experience.
                                    </Body>
                                }
                            />
                            <div className="flex flex-col gap-y-40 pb-40">
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    {/*<H2 className="mb-0!">*/}
                                    {/*    Key <span className="text-highlighted">Benefits</span>*/}
                                    {/*</H2>*/}
                                    <div className="flex flex-col lg:flex-row gap-8 w-full">
                                        <FeatureTileList
                                            title={keyBenefits.developers.title}
                                            features={keyBenefits.developers.features}
                                        />
                                        <FeatureTileList
                                            title={keyBenefits.digitalTeams.title}
                                            features={keyBenefits.digitalTeams.features}
                                        />
                                    </div>
                                </section>
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    <H2 className="mb-0!">
                                        What’s included in your <span className="text-highlighted">dev toolbox</span>
                                    </H2>
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
                                        {technicalCapabilities.map((component, componentIndex) => (
                                            <div key={componentIndex} className="flex flex-col gap-8">
                                                <H3 className="mb-0!">{component.title}</H3>
                                                <ul className="list-none p-0! m-0! flex flex-col gap-4">
                                                    {component.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex}>
                                                            <div className={clsx('card-base card-light-bg p-6!')}>
                                                                <div className="flex flex-col gap-2">
                                                                    <h4 className="m-0! text-xl! text-current! font-semibold! leading-7!">
                                                                        {feature.title}
                                                                    </h4>
                                                                    <BodySmall className="mb-0!">
                                                                        {feature.description}
                                                                    </BodySmall>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    <div className="grid md:grid-cols-2 gap-14 md:gap-14">
                                        <div>
                                            <H2 className="mb-0!">
                                                <span className="text-highlighted">Available</span> functional blocks
                                            </H2>
                                        </div>
                                        <div className="flex flex-col gap-6">
                                            <Body className="mb-0!">
                                                Use built-in functional blocks to speed up development and add essential
                                                customer-support features.
                                            </Body>
                                            <Link
                                                href="/docs/main-components/blocks"
                                                className="button w-fit"
                                                rel="noopener"
                                            >
                                                <span className="label flex items-center justify-center gap-2">
                                                    Learn more about Blocks
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                    {functionalBlocks.map((block, blockIndex) => (
                                        <FeaturesListWithImage
                                            key={blockIndex}
                                            title={block.title}
                                            features={block.features}
                                            link={block.link}
                                        />
                                    ))}
                                </section>
                            </div>
                        </main>
                    </div>
                    <div className="section-gradient-2 px-4 py-40 mb-0!">
                        <section className="mb-0!">
                            <FooterSection
                                title="Want to connect your own APIs?"
                                description={
                                    <>
                                        Go to the <Link href="/product/integrations">Integrations</Link> page to learn
                                        more about supported services and how to add your own.
                                    </>
                                }
                                primaryButton={{
                                    text: 'Integrations',
                                    url: '/product/integrations',
                                }}
                            />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
