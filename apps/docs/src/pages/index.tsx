import type { ReactNode } from 'react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { HeroBannerSection } from '@site/src/components/HeroBannerSection';
import { HomepageAboutSection } from '@site/src/components/HomepageAboutSection';
import { HomepageArchitectureSection } from '@site/src/components/HomepageArchitectureSection';
import { HomepageBenefitsSection } from '@site/src/components/HomepageBenefitsSection';
import HomepageJoinTheWaitlistSection from '@site/src/components/HomepageJoinTheWaitlistSection';
import { HomepageUseCases } from '@site/src/components/HomepageUseCases';

import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <div>
            <Layout title={`${siteConfig.customFields.fullPageTitle}`}>
                <div className={styles.linearGradient}>
                    <div style={{ overflow: 'hidden' }}>
                        <div className={styles.gradientWrapper}>
                            <div className={styles.gradientCircleGreen} />
                            <div className={styles.gradientCircleBlue} />
                            <div className={`${styles.mainContentWrapper}`}>
                                <HeroBannerSection
                                    heading={
                                        <>
                                            <br /> The Open Source
                                            <span className="text-highlighted"> Composable Frontend </span>for Customer
                                            Portals
                                        </>
                                    }
                                    description={
                                        <>
                                            <b>Open Self Service</b>
                                            is an open-source framework that lets you easily integrate APIs, unify data,
                                            and build scalable, high-performance customer support portals with Next.js,
                                            TypeScript, and NestJS.
                                        </>
                                    }
                                    cliCommand="npx create-o2s-app"
                                    mainLink={{
                                        text: 'See our demo app',
                                        url: 'https://demo.openselfservice.com',
                                    }}
                                    secondaryLink={{
                                        text: 'Star us on GitHub',
                                        url: 'https://github.com/o2sdev/openselfservice',
                                    }}
                                    heroImage={{
                                        url: '/img/homepage/banner.png',
                                        alt: 'Laptop with connecting nodes illustration',
                                    }}
                                />
                                <HomepageArchitectureSection />
                                <HomepageUseCases />
                            </div>
                        </div>
                    </div>

                    <HomepageAboutSection />
                    <HomepageBenefitsSection />
                </div>
            </Layout>
        </div>
    );
}
