import clsx from 'clsx';
import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { DXPArchitectureSection } from '@site/src/components/DXPArchitectureSection';
import { DXPBenefitsSection } from '@site/src/components/DXPBenefitsSection';
import { DXPComplexPlatformsSection } from '@site/src/components/DXPComplexPlatformsSection';
import { DXPFeaturesSection } from '@site/src/components/DXPFeaturesSection';
import { DXPFooterSection } from '@site/src/components/DXPFooterSection';
import { DXPIntegrationsSection } from '@site/src/components/DXPIntegrationsSection';
import { DXPUseCasesSection } from '@site/src/components/DXPUseCasesSection';
import { HeroBannerSection } from '@site/src/components/HeroBannerSection';

import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function DXPStarter(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div className="dxp-page">
            <Layout title="DXP Frontend Starter - Open Self Service">
                <div className={styles.linearGradient}>
                    <div className="overflow-hidden">
                        <div className={styles.gradientWrapper}>
                            <div className={styles.gradientCircleGreen} />
                            <div className={styles.gradientCircleBlue} />
                            <div className={`${styles.mainContentWrapper}`}>
                                <HeroBannerSection
                                    heading={
                                        <>
                                            <br /> <span className="text-highlighted">Digital Experience Platform</span>{' '}
                                            Frontend Starter Kit
                                        </>
                                    }
                                    description={[
                                        'Kick-start your modern, composable digital platform with our Next.js based starter and built-in Strapi CMS integration.',
                                        'Start small and scale with composable architecture, ready-to-use integrations and our API composition server.',
                                        "It's open-source. Use our starter, build your own, extend it however you need.",
                                    ]}
                                    cliCommand="npx create-dxp-app"
                                    mainLink={{
                                        text: 'See DXP demo app',
                                        url: 'https://demo-dxp.openselfservice.com',
                                    }}
                                    secondaryLink={{
                                        text: 'See on GitHub',
                                        url: 'https://github.com/o2sdev/dxp-frontend-starter',
                                    }}
                                    heroImage={{
                                        url: '/img/homepage/banner-dxp.png',
                                        alt: 'DXP Platform illustration',
                                    }}
                                    isDXPage={true}
                                />

                                <section className="pr-4 pl-4 mb-4 mt-10">
                                    <DXPFeaturesSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPIntegrationsSection />
                                </section>

                                <section className="pr-4 pl-4 mb-10">
                                    <DXPArchitectureSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPComplexPlatformsSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPUseCasesSection />
                                </section>

                                <section className="pr-4 pl-4 mb-40">
                                    <DXPBenefitsSection />
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="section-border pr-4 pl-4 mb-0! pb-10">
                        <section className="mb-0!">
                            <div className="mt-20! mb-20!">
                                <DXPFooterSection />
                            </div>
                        </section>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
