import React from 'react';

import BlocksIcon from '@site/src/assets/icons/Blocks.svg';
import AlgoliaIcon from '@site/src/assets/integrations/algolia-integration-icon.svg';
import AuthJsIcon from '@site/src/assets/integrations/auth.js-integration-icon.svg';
import ContentfulIcon from '@site/src/assets/integrations/contentful-integration-icon.svg';
import KeycloakIcon from '@site/src/assets/integrations/keycloak-integration-icon.svg';
import KillBillIcon from '@site/src/assets/integrations/killbill-integration-icon.svg';
import MedusaIcon from '@site/src/assets/integrations/medusa-integration-icon.svg';
import O2SIcon from '@site/src/assets/integrations/o2s-integration-icon.svg';
import OROIcon from '@site/src/assets/integrations/oro-integration-icon.svg';
import PimcoreIcon from '@site/src/assets/integrations/pimcore-integration-icon.svg';
import RedisIcon from '@site/src/assets/integrations/redis-integration-icon.svg';
import SalesforceIcon from '@site/src/assets/integrations/salesforce-integration-icon.svg';
import SAPIcon from '@site/src/assets/integrations/sap-integration-icon.svg';
import StoryblokIcon from '@site/src/assets/integrations/storyblok-integration-icon.svg';
import StrapiIcon from '@site/src/assets/integrations/strapi-integration-icon.svg';
import SurveyJSIcon from '@site/src/assets/integrations/surveyjs-integration-icon.svg';
import ZendeskIcon from '@site/src/assets/integrations/zendesk-integration-icon.svg';
import { FooterSection } from '@site/src/components/FooterSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { IntegrationsBlocks } from '@site/src/components/IntegrationsBlocks';
import { Body, BodyBold } from '@site/src/components/Typography';

import Layout from '@theme/Layout';

import styles from './product.module.scss';

// TODO: add links to docs for each integration
const INTEGRATION_SECTIONS: Array<{
    title: string;
    description: string;
    integrations: Array<{
        name: string;
        status: 'available' | 'planned' | 'internal';
        description: string;
        icon: React.ReactNode;
    }>;
}> = [
    {
        title: 'CMS',
        description:
            'Content, layout configuration, page structure, and more — including use as KB, notification, or ticket base.',
        integrations: [
            {
                name: 'Strapi',
                status: 'available',
                description: 'Headless CMS used for content, layouts, KB, and more.',
                icon: <StrapiIcon />,
            },
            {
                name: 'Contentful',
                status: 'available',
                description: 'CMS for multi-language content and marketing blocks.',
                icon: <ContentfulIcon />,
            },
            {
                name: 'Storyblok',
                status: 'planned',
                description: 'Visual CMS for content-driven experiences and static pages.',
                icon: <StoryblokIcon />,
            },
        ],
    },
    {
        title: 'Customer Support',
        description: 'Integrations for ticketing, forms, CRM and other customer support automation.',
        integrations: [
            {
                name: 'SurveyJS',
                status: 'available',
                description: 'Advanced survey and form engine for ticket submission.',
                icon: <SurveyJSIcon />,
            },
            {
                name: 'Zendesk',
                status: 'planned',
                description: 'External ticketing and support knowledge base system.',
                icon: <ZendeskIcon />,
            },
            {
                name: 'Salesforce Service Cloud',
                status: 'planned',
                description: 'Enterprise CRM and customer case handling solution.',
                icon: <SalesforceIcon />,
            },
        ],
    },
    {
        title: 'Billing',
        description: 'Expose invoice history, status and payments to customers.',
        integrations: [
            {
                name: 'SAP S/4 Hana',
                status: 'internal',
                description: 'ERP integration for billing, orders and document summaries.',
                icon: <SAPIcon />,
            },
            {
                name: 'Kill Bill',
                status: 'planned',
                description: 'Open-source billing and subscription management engine.',
                icon: <KillBillIcon />,
            },
        ],
    },
    {
        title: 'Identity & Access Management',
        description: 'Used for login, RBAC and session management.',
        integrations: [
            {
                name: 'Auth.js',
                status: 'available',
                description: 'Authentication adapter supporting OAuth and custom providers.',
                icon: <AuthJsIcon />,
            },
            {
                name: 'Keycloak',
                status: 'internal',
                description: 'Enterprise IAM for SSO, user management and OpenID flows.',
                icon: <KeycloakIcon />,
            },
        ],
    },
    {
        title: 'Knowledge Base Management',
        description: 'Manage articles, FAQs, categories and tags for support content.',
        integrations: [
            {
                name: 'Strapi',
                status: 'available',
                description: 'Used to model and manage article-based support knowledge base.',
                icon: <StrapiIcon />,
            },
            {
                name: 'Salesforce Service Cloud',
                status: 'planned',
                description: 'Enterprise CRM and customer case handling solution.',
                icon: <SalesforceIcon />,
            },
            {
                name: 'Zendesk',
                status: 'planned',
                description: 'External ticketing and support knowledge base system.',
                icon: <ZendeskIcon />,
            },
        ],
    },
    {
        title: 'ERP, Commerce & PIM',
        description:
            'Currently we support ERP scenarios (asset and order management). More advanced e-commerce capabilities & integrations are coming soon.',
        integrations: [
            {
                name: 'Medusa',
                status: 'available',
                description:
                    'Open-source composable commerce engine. Currently provides product & asset information in O2S.',
                icon: <MedusaIcon />,
            },
            {
                name: 'SAP S/4 Hana',
                status: 'internal',
                description: 'Used for order, billing, product and asset data integration.',
                icon: <SAPIcon />,
            },
            {
                name: 'OroCommerce',
                status: 'planned',
                description: 'B2B commerce platform with pricing, inventory and quote support.',
                icon: <OROIcon />,
            },
            {
                name: 'Pimcore',
                status: 'planned',
                description: 'PIM and DAM solution for product content and digital assets.',
                icon: <PimcoreIcon />,
            },
        ],
    },
    {
        title: 'Notifications',
        description: 'Send and manage in-app messages and status updates.',
        integrations: [
            {
                name: 'Strapi',
                status: 'available',
                description: 'Used to manage in-app notification content and metadata.',
                icon: <StrapiIcon />,
            },
            {
                name: 'Notification API',
                status: 'internal',
                description: 'Our proprietary API for sending multi-channel notifications.',
                icon: <O2SIcon />,
            },
            // { name: 'novu.co notification API', status: 'planned', description: 'Notification engine for multi-channel delivery and tracking.', icon: <BanGreenTileIcon /> },
        ],
    },
    {
        title: 'Search & Personalization',
        description: 'Power content and article search, recommendations and user-tailored experiences.',
        integrations: [
            {
                name: 'Algolia',
                status: 'available',
                description: 'Used for full-text and faceted search across content and articles.',
                icon: <AlgoliaIcon />,
            },
            {
                name: 'Personalisation API',
                status: 'planned',
                description:
                    'TBD. We plan to support more personalised experiences by means of integration with a suitable product.',
                icon: <O2SIcon />,
            },
        ],
    },
    {
        title: 'Cache',
        description: 'Improves performance and request optimization.',
        integrations: [
            {
                name: 'Redis',
                status: 'available',
                description: 'Used for caching, session storage and notification delivery.',
                icon: <RedisIcon />,
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
                                containerWidth="narrow"
                                badge={{
                                    text: 'Integrations',
                                    icon: <BlocksIcon className="*:stroke-white" />,
                                }}
                                heading={
                                    <>
                                        <span className="text-highlighted">Connect our frontend</span> <br />
                                        to APIs with ease
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
