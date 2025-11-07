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
import { FeatureCardsList } from '@site/src/components/FeatureCardsList';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { Body, H2 } from '@site/src/components/Typography';

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

export default function ProductFeatures() {
    return (
        <Layout title="Features">
            <div className={styles.linearGradient}>
                <div style={{ overflow: 'hidden' }}>
                    <div className={styles.gradientWrapper}>
                        {/* TODO: add new gradient circle here */}
                        <div className={styles.gradientCircleBlue} />
                        <main className={styles.mainContentWrapper}>
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
                            <div className="flex flex-col gap-y-40 pb-16">
                                <section className="px-4 flex flex-col gap-20 w-full">
                                    <H2 className="mb-0!">
                                        Key <span className="text-highlighted">Benefits</span>
                                    </H2>
                                    <div className="flex flex-col lg:flex-row gap-8 w-full">
                                        <FeatureCardsList
                                            title={keyBenefits.developers.title}
                                            features={keyBenefits.developers.features}
                                        />
                                        <FeatureCardsList
                                            title={keyBenefits.digitalTeams.title}
                                            features={keyBenefits.digitalTeams.features}
                                        />
                                    </div>
                                </section>
                                <div>TECHNICAL CAPABILITIES BY COMPONENT here</div>
                                <div>FUNCTIONAL BLOCKS here</div>
                                <div>Footer section here</div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
