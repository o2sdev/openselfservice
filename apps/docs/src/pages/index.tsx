import type { ReactNode } from 'react';

import '@o2s/ui/globals';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import { HomepageAboutSection } from '@site/src/components/HomepageAboutSection';
import { HomepageArchitectureSection } from '@site/src/components/HomepageArchitectureSection';
import { HomepageBannerSection } from '@site/src/components/HomepageBannerSection';
import { HomepageBenefitsSection } from '@site/src/components/HomepageBenefitsSection';
import HomepageJoinTheWaitlistSection from '@site/src/components/HomepageJoinTheWaitlistSection';

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
                                <HomepageBannerSection />
                                <HomepageArchitectureSection />
                            </div>
                        </div>
                    </div>
                    <HomepageAboutSection />
                    <HomepageBenefitsSection />
                </div>

                <HomepageJoinTheWaitlistSection />
            </Layout>
        </div>
    );
}
