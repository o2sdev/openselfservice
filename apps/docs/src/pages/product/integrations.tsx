import React from 'react';

import BanGreenTileIcon from '@site/src/assets/icons/BanGreenTile.svg';
import BlocksIcon from '@site/src/assets/icons/Blocks.svg';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { IntegrationsBlocks } from '@site/src/components/IntegrationsBlocks';
import { Body, BodyBold } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

const INTEGRATION_SECTIONS = [
    {
        title: 'CMS',
        description: 'Content, frontend configuration',
        integrations: [
            {
                isAvailable: true,
                name: 'Strapi',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: true,
                name: 'Contentful',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Storyblok',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
    {
        title: 'Auth / Infra',
        description: 'TODO: add description here',
        integrations: [
            {
                isAvailable: true,
                name: 'Auth.js',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Keycloak',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: true,
                name: 'Redis',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
    {
        title: 'CRM / Support ticket processing / Knowledge Base',
        description: 'TODO: add description here',
        integrations: [
            {
                isAvailable: true,
                name: 'Strapi',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: true,
                name: 'SurveyJS',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Zendesk',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Salesforce Service Cloud',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
    {
        title: 'Billing',
        description: 'TODO: add description here',
        integrations: [
            {
                isAvailable: false,
                name: 'Kill Bill',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: true,
                name: 'SAP S/4 Hana',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
    {
        title: 'Notifications',
        description: 'TODO: add description here',
        integrations: [
            {
                isAvailable: true,
                name: 'Strapi',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: true,
                name: 'Notification service (custom, not open-sourced)',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'novu.co notification API',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
    {
        title: 'Search, Personalization, DXP',
        description: 'TODO: add description here',
        integrations: [
            {
                isAvailable: true,
                name: 'Algolia',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Pimcore',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Headless personalization engine',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
    {
        title: 'ERP/PIM/DAM/Commerce',
        description: 'TODO: add description here',
        integrations: [
            {
                isAvailable: true,
                name: 'Medusa',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: true,
                name: 'SAP S/4 Hana',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'OroCommerce',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Pimcore',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
            {
                isAvailable: false,
                name: 'Custom product API',
                description: 'integration description',
                icon: <BanGreenTileIcon className="w-4 h-4" />,
            },
        ],
    },
];

export default function ProductIntegrations() {
    return (
        <Layout title="Integrations">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <div className={styles.gradientWrapper}>
                        {/* TODO: add new gradient circle here */}
                        <div className={styles.gradientCircleBlue} />
                        <main className={styles.mainContentWrapper}>
                            <HeroBannerSection
                                badge={{
                                    text: 'Integrations',
                                    icon: <BlocksIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        Connect our frontend <br />
                                        <span className="text-highlighted"> to APIs and services </span>with ease
                                    </>
                                }
                                description={
                                    <>
                                        <Body>
                                            Open Self Service is composable by design. We believe in backend-agnostic
                                            architecture. That's why every integration is decoupled and modular — so you
                                            can swap or extend data sources without rebuilding your frontend.
                                        </Body>
                                        <BodyBold className="mb-0!">
                                            Below is a list of available and upcoming integrations.
                                        </BodyBold>
                                    </>
                                }
                            />
                            <div className="flex flex-col gap-y-40 pb-40">
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    {INTEGRATION_SECTIONS.map((section, sectionIndex) => (
                                        <IntegrationsBlocks
                                            key={sectionIndex}
                                            title={section.title}
                                            description={section.description}
                                            integrations={section.integrations}
                                        />
                                    ))}
                                </section>
                            </div>
                        </main>
                    </div>
                    <div className="section-gradient-1 px-4 py-40 mb-0!">
                        <section className="mb-0! max-w-[1080px] mx-auto">
                            <FooterSection
                                title={
                                    <>
                                        <span className="text-white">Build what you need - </span>
                                        <span className="text-highlighted">or help us build it</span>
                                    </>
                                }
                                description="Open Self Service is made to be extended. Create your own adapters and UI blocks using TypeScript — or let us know which integrations you'd like to see next. Use our examples as a starting point, or shape the roadmap by sharing what matters most to you."
                                primaryButton={{
                                    text: 'See integration docs',
                                    url: '/docs/guides/integrations/adding-new-integrations',
                                }}
                                secondaryButton={{
                                    text: 'Submit integration request',
                                    url: 'https://github.com/o2sdev/openselfservice/issues',
                                    target: '_blank',
                                }}
                            />
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
