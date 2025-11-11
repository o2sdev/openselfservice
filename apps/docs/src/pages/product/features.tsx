import clsx from 'clsx';
import React from 'react';

import ArrowLeftRightGreenTileIcon from '@site/src/assets/icons/ArrowLeftRightGreenTile.svg';
import BanGreenTileIcon from '@site/src/assets/icons/BanGreenTile.svg';
import BlocksPurpleTileIcon from '@site/src/assets/icons/BlocksPurpleTile.svg';
import GaugePurpleTileIcon from '@site/src/assets/icons/GaugePurpleTile.svg';
import LayersPurpleTileIcon from '@site/src/assets/icons/LayersPurpleTile.svg';
import LayoutDashboardGreenTileIcon from '@site/src/assets/icons/LayoutDashboardGreenTile.svg';
import ScalingGreenTileIcon from '@site/src/assets/icons/ScalingGreenTile.svg';
import StarIcon from '@site/src/assets/icons/Star.svg';
import WaypointsPurpleTileIcon from '@site/src/assets/icons/WaypointsPurpleTile.svg';
import { FeatureTileList } from '@site/src/components/FeatureTile';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { Body, H2, H3 } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

const keyBenefits = {
    developers: {
        title: 'For Developers',
        features: [
            {
                icon: <BlocksPurpleTileIcon />,
                title: 'Reusable blocks',
                description: 'Create pages from modular components and UI blocks',
            },
            {
                icon: <LayersPurpleTileIcon />,
                title: 'API harmonization',
                description: 'Integrate any backend system (CMS, CRM, search…) with a unified data layer',
            },
            {
                icon: <WaypointsPurpleTileIcon />,
                title: 'Custom integrations & extensions',
                description: 'Extend logic, add your APIs, or replace services',
            },
            {
                icon: <GaugePurpleTileIcon />,
                title: 'Performance-first stack',
                description: 'Next.js, Tailwind, SSR, ISR, SEO-optimized, Lighthouse 90+',
            },
        ],
    },
    digitalTeams: {
        title: 'For Digital Teams',
        features: [
            {
                icon: <BanGreenTileIcon />,
                title: 'No vendor lock-in',
                description: 'Choose the best tools, replace them freely when needed',
            },
            {
                icon: <ScalingGreenTileIcon />,
                title: 'Scalable architecture',
                description: 'Start small and evolve into multi-system experience platforms',
            },
            {
                icon: <ArrowLeftRightGreenTileIcon />,
                title: 'Flexible use cases',
                description: 'From customer support portals to self-service platforms and beyond',
            },
            {
                icon: <LayoutDashboardGreenTileIcon />,
                title: 'CMS-driven UI',
                description: 'Let non-tech teams manage layouts and content with no redeploys',
            },
        ],
    },
};

const technicalCapabilities = [
    {
        title: 'Frontend App',
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
                description: 'for Internationalization and localization with.',
            },
            {
                title: 'Tailwind + UI tokens',
                description: 'for Ui customization, theming and branding.',
            },
            {
                title: '90+ Google Lighthouse scores',
                description: 'for performance, accessibility, SEO, and best practices audits.',
            },
            {
                title: 'Built-in authentication',
                description: 'Auth.js-based authentication providers support.',
            },
            {
                title: 'Dynamic, CMS-powered page composition',
                description: 'page structure and component configuration built-in, managed via headless CMS-s.',
            },
        ],
    },
    {
        title: 'API Harmonization Layer',
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
                description: 'normalized frontend data model and stay vendor independent.',
            },
            {
                title: 'Event-driven with RxJS',
                description: 'Use reactive programming patterns for real-time updates and external triggers.',
            },
            {
                title: 'Backend-agnostic frontend',
                description: 'Swap APIs without changing the frontend.',
            },
        ],
    },
    {
        title: 'Developer Experience',
        features: [
            {
                title: 'TypeScript SDK',
                description: 'for easy, type-safe API consumption.',
            },
            {
                title: 'CLI app scaffolding',
                description: 'Use our CLI to scaffold a full project in seconds.',
            },
            {
                title: 'Docker-ready deployment',
                description: 'Preconfigured Docker & Docker Compose setup for local and cloud deployments.',
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
                title: 'Renovate bot',
                description: 'Stay secure and up-to-date with Renovate preconfigured for monorepo environments.',
            },
        ],
    },
];
export default function ProductFeatures() {
    return (
        <Layout title="Features">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <main className={styles.mainContentWrapper}>
                        <div className={styles.gradientWrapper}>
                            {/* TODO: add new gradient circle here */}
                            <div className={styles.gradientCircleBlue} />
                            <HeroBannerSection
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
                                    <H2 className="mb-0!">
                                        Key <span className="text-highlighted">Benefits</span>
                                    </H2>
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
                                        <span className="text-highlighted">Technical Capabilities</span> by Component
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
                                                                    <h4 className="m-0! text-2xl! text-current! font-semibold! leading-9!">
                                                                        {feature.title}
                                                                    </h4>
                                                                    <Body className="mb-0!">{feature.description}</Body>
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
                                    <div className="grid md:grid-cols-2 gap-14 md:gap-28">
                                        <H2 className="mb-0!">Functional Blocks</H2>
                                        <Body className="mb-0!">
                                            Use functional blocks to speed up development and add essential
                                            customer-support features.
                                        </Body>
                                    </div>
                                    <div>Functional Blocks: in progress...</div>
                                </section>
                            </div>
                        </div>
                        <div className="section-gradient-2 px-4 py-40 mb-0!">
                            <section className="mb-0!">
                                <FooterSection
                                    title="Want to connect your own APIs?"
                                    description={
                                        <>
                                            Go to the <a href="/product/integrations">Integrations</a> page to learn
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
                    </main>
                </div>
            </div>
        </Layout>
    );
}
